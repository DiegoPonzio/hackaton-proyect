import { ConnectionProvider, useWallet, WalletProvider } from '@solana/wallet-adapter-react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import * as web3 from '@solana/web3.js'
import "@solana/wallet-adapter-react-ui/styles.css"
import '../styles/globals.css'
import 'react-notifications/dist/react-notifications.css'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'

function MyApp({ Component, pageProps }) {
  const endpoint = web3.clusterApiUrl('devnet')
  const wallet = new PhantomWalletAdapter()

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[wallet]}>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default MyApp
