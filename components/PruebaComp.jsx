import React from 'react';
import CardNft from '../components/Card.jsx';
import { Grid, Box } from '@mui/material';

import NewNft from "../components/NewNft.jsx";

const PruebaComp = ({info}) => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} display="flex" justifyContent="center">
                    {info.map((item) => (
                        <Grid item key={`coso_${item.auctionId}`}>
                            <CardNft 
                                id={item.auctionId} 
                                adminUser={item.adminUser}
                                auctionDesc={item.auctionDesc}
                                initialAmount={item.initialAmount}
                                maxPeopleAllowed={item.maxPeopleAllowed}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default PruebaComp