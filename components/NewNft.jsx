import React, { useState } from 'react'
import Image from 'next/image'
import { Typography, Modal, Box, Button, Grid, TextField } from '@mui/material';

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

const NewNft = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
            // aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='bg-gray-20 rounded-lg'>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Image src='/asd.png'
                                alt="robot.png"
                                width={300}
                                height={300}
                                className='bg-gray-10' />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" className='text-white'>
                                Nombre del Nft:
                                <TextField fullWidth color="secondary" className='bg-gray-10 rounded-lg p-0.5'/>
                            </Typography>
                            <Typography variant="h6" className='text-white'>
                                Descripcion del Nft:
                                <TextField fullWidth color="secondary" className='bg-gray-10 rounded-lg p-0.5'/>
                            </Typography>
                            <Grid container sx={{ marginTop: 2 }}>
                                <Grid item xs={6} sx={{textAlign: 'center'}}>
                                    <Typography variant="h6" className='text-white'>
                                        <Button variant="contained" color='secondary' className='bg-gray-10' onClick={handleClose}>Cancelar</Button>
                                    </Typography>
                                </Grid>
                                <Grid item sx={6}>
                                    <Typography variant="h6" className='text-white'>
                                        <Button variant="contained" color='secondary' className='bg-purple-20'>Subir</Button>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

export default NewNft