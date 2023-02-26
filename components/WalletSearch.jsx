import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from 'react';
import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
import { NotificationManager } from "react-notifications";
import CardNft from "./Card";

const WalletSearch = () => {
    const { publicKey } = useWallet()
    const { connection } = useConnection()
    const [notFound, setNotFound] = useState("")
    const [NFT, setNFTs] = useState()

    const getNFTs = async () => {
        if (!isValidSolanaAddress(publicKey)) {
            NotificationManager.error("Tu public key no es valida", "Error!!", 5000)
        }

        const connect = createConnectionConfig(connection.rpcEndpoint)

        const nftArray = await getParsedNftAccountsByOwner({
            publicAddresss: publicKey,
            connection: connect,
            serialization: true
        });


        if (nftArray.length === 0) {
            setNotFound(true)
        }

        const metadatas = await fetchMetadata(nftArray);
        var group = {};

        for (const nft of metadatas) {
            console.log(nft);
            if (group.hasOwnProperty(nft.data.symbol)) {
                group[nft.data.symbol].push(nft);
            } else {
                group[nft.data.symbol] = [nft];
            }
        }
        //setGroupedNfts(group);
        setNFTs(metadatas);
    }

    const fetchMetadata = async (nftArray) => {
        let metadatas = [];
        for (const nft of nftArray) {
            console.log(nft);
            try {
                await fetch(nft.data.uri)
                    .then((response) => response.json())
                    .then((meta) => {
                        metadatas.push({ ...meta, ...nft });
                    });
            } catch (error) {
                console.log(error);
            }
        }
        return metadatas;
    }

    useEffect(() => {
        getNFTs()
    }, [])

    return (
        <div>
            {notFound && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">Tu billetera no cuenta con NFTs</span>
                </div>
            )}
            {!notFound && NFT?.map( (metadata, index) => (   
                <CardNft key={`nft_${index}`} image={metadata?.image} name={metadata?.name} />
            ))}
        </div>
    )
}

export default WalletSearch;