import React from 'react';
import CardNft from '../components/Card.jsx';
import { Grid, Box } from '@mui/material';

import NewNft from "../components/NewNft.jsx";

const PruebaComp = () => {
    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
        { id: 4, name: "Doe" },
        { id: 5, name: "Jane" },
        { id: 6, name: "Victor" },
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
        { id: 4, name: "Doe" },
        { id: 5, name: "Jane" },
        { id: 6, name: "Victor" },
    ];

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} display="flex" justifyContent="center">
                    {data.map((a) => (
                        <Grid item key={`coso_${a.name}_${a.id}`}>
                            <CardNft id={a.id} name={a.name} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <NewNft />
        </>
    )
}

export default PruebaComp