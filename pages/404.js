import React from 'react'
import Image from 'next/image'
import { Grid, Typography, Button } from '@mui/material'
import robot from "../public/robot.png"
import Router from 'next/router'

const Page404 = () => {
    return (
        <div>
            <Grid container className='align-middle max-h-screen' spacing={2} sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 25,
                textAlign: 'right',
            }}>
                <Grid item>
                    <Image src={robot}
                        alt="robot.png"
                        width={300}
                        height={300} />
                </Grid>
                <Grid item>
                    <Typography variant='h1' color='secondary'>404</Typography>
                    <Typography variant='h3'>Lo lamentamos</Typography>
                    <Typography variant='h5'>No hemos encontrado la pagina</Typography>
                    <Button variant="contained" color='secondary' className='bg-purple-20' sx={{marginTop: 2}} onClick={ () => Router.replace('/')}>Volver</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Page404