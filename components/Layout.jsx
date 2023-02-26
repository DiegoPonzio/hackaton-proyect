import Head from 'next/head'

const Layout = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Subastas de NFTs y el Hackathon 2023" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout