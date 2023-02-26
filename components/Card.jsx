import React from 'react';
import Image from 'next/image'
import { CardActionArea, Card, CardContent, CardMedia, Typography, Modal, Box, Button, Grid } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    // bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CardNft = ({adminUser, auctionDesc,initialAmount,maxPeopleAllowed}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card sx={{ maxWidth: 345 }} className='bg-gray-10'>
                <CardActionArea onClick={handleOpen}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" >
                            {auctionDesc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style} className='bg-gray-20 rounded-lg'>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="h6" className='text-white'>
                                    Nombre del subastador:
                                    <Typography className='bg-gray-10 rounded-lg p-0.5'>
                                        {adminUser}
                                    </Typography>
                                </Typography>
                                <Typography variant="h6" className='text-white'>
                                    Descripcion:
                                    <Typography className='bg-gray-10 rounded-lg p-0.5'>
                                        {auctionDesc}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" className='text-white'>
                                    Precio inicial:
                                    <Typography>
                                        ${initialAmount}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" className='text-white'>
                                    Precio de puja:
                                    <Typography>
                                        ${initialAmount}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" className='text-white'>
                                    Maximo de participantes
                                    <Typography>
                                        {maxPeopleAllowed}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={3} sx={{textAlign: 'right'}}>
                                <Typography variant="h6" className='text-white'>
                                    <Button variant="contained" color='secondary' className='bg-gray-10' sx={{ marginTop: 2 }} onClick={handleClose}>Cancelar</Button>
                                </Typography>
                            </Grid>
                            <Grid item xs={3} sx={{textAlign: 'left'}}>
                                <Typography variant="h6" className='text-white'>
                                    <Button variant="contained" color='secondary' className='bg-purple-20' sx={{ marginTop: 2 }}>Entrar</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </div>
        </>
    )

}

export default CardNft