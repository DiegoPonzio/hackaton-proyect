import { Metaplex, keypairIdentity, bundlrStorage, toMetaplexFile } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";

const nftCreator = async (buffer, name, description) => {
    try {
        console.log(buffer);
        const connection = new Connection(clusterApiUrl("devnet"));
        const wallet = Keypair.generate();

        const metaplex = Metaplex.make(connection)
            .use(keypairIdentity(wallet))
            .use(
                bundlrStorage({
                    address: "https://devnet.bundlr.network",
                    providerUrl: "https://api.devnet.solana.com",
                    timeout: 60000,
                }),
            );

        // PREINICIALIZAR UN NFT CON UN DOCUMENTO, UNA IMAGEN
        const file = toMetaplexFile(buffer, `${name}.png`);

        const imageUri = await metaplex.storage().upload(file);

        // SUBIR EL NFT A LA BLOCKCHAIN
        const { uri } = await metaplex.nfts.uploadMetadata({

            name: name,
            description: description,
            image: imageUri

        })

        // CREADOR DEL NFT, DEVUELVE UN JSON CON SUS CUALIDADES
        const { nft } = await metaplex.nfts().create({

            uri: uri,
            name: name,
            sellerFeeBasisPoints: 0
        },

            { commitment: "finalized" },

        );

        return (

            nft

        );
    } catch (error) {
        //console.log(error)
        return {error}
    }

}

export default nftCreator;