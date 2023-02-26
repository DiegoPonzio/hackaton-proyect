import React from 'react'
import image from "../public/revLogo.png"
import { AppBar, Box, Toolbar, Typography, Avatar } from '@mui/material';
import Balance from "./user/Balance.jsx";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import Image from 'next/image';

const Bar = () => {

    const { publicKey } = useWallet()

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="fixed" className='bg-purple-20'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Image src={image} className={"w-20 h-20"} />
                    </Typography>
                    <Typography variant="h6" component="div">
                        <div className='pr-3'>
                            <Balance />
                        </div>
                    </Typography>
                    {publicKey ? <Avatar /> : <WalletMultiButton />}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Bar 