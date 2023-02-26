import { useConnection, useWallet, useContext } from "@solana/wallet-adapter-react";
import Drawer from "../components/Drawer";
import Layout from "../components/Layout";
import Bar from "../components/Bar";
import { NotificationContainer } from "react-notifications"
import withSession from "../lib/remember";

export default function Home() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  return (
    <Layout title={publicKey ? `Hola ${publicKey}` : "Bienvenido a BETNET9"}>
      <Bar />
      <Drawer>
        <NotificationContainer />
      </Drawer>
    </Layout>
  )
}

export const getServerSideProps = withSession( async function ({ req, res }) {
  const rememberExist = req.session.get("remember")

  if ( rememberExist === undefined ) {
    res.setHeader("location", "/principal")
    res.statusCode = 302
    res.end()
    return { props: {} }
  }  
  
  return {
    props: {}
  }

})
