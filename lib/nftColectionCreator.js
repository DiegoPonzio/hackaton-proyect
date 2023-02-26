import { Metaplex, keypairIdentity, bundlrStorage , toMetaplexFile , toBigNumber } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";

const nftColectionCreator =async () =>{

    const { candyMachine } = await metaplex.candyMachines().create({

        itemsAviable : toBigNumber(5000),
        sellerFeeBasisPoints : 500,
        collection : {
    
            address : collectionNft.address,
            updateAuthority : metaplex.identity()
    
        }
        
    });
    
    const { collectionNft } = await metaplex.nfts().create(
        {
            uri: uri,
            name: "My NFT Collection",
            sellerFeeBasisPoints: 0,
            isCollection: true
        },
        { commitment: "finalized" },
    );

}