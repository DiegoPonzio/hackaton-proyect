//import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import * as web3 from '@solana/web3.js'

// const { connection } = useConnection();
// const { publicKey , sendTransaction } = useWallet();

const transactionWallet = (connection , publicKey , sendTransaction) =>{

    if (!connection || !publicKey){ 
    
        return {} 
    
    }
    else{

        const programId = new web3.PublicKey(PROGRAM_ID)
        const programDataAccount = new web3.PublicKey(DATA_ACCOUNT_PUBKEY)
        const transaction = new web3.Transaction()
        
        const instruction = new web3.TransactionInstruction({
            keys: [
                {
                pubkey: programDataAccount,
                isSigner: false,
                isWritable: true
            },
            ],
            programId
        });
        
        transaction.add(instruction)
        sendTransaction(transaction, connection).then(sig => {
            console.log(sig)
        });

    }

}

export default transactionWallet;