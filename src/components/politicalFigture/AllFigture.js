import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';
import FiguarData from '../../services/politicalFiguar/FiguarData';

const AllFigture = () => {
    let head = useTheme();
    // head = head.cCharityParagraph.Economy.heading
    // console.log();
    return (
        <Grid container spacing={6} padding={{xs:'1rem' ,sm:'6rem 2rem'}} >
            {
                FiguarData.map(({ id, name, imgs }) => {
                    return (
                        <Grid key={id} item xs={12} sm={4} >
                            <NavLink to='/' style={{textDecoration:'none', color:'black'}}>
                            <Box sx={{width:'100%', border:'1px solid #eeeeee', padding:'1rem','&:hover':{backgroundColor:'#eeeeee', border:'1px solid white'}}}>
                                <img src={imgs} width='100%' style={{height:'60vh'}} alt='political figure' />
                                <Typography sx={head.CharityParagraph.Economy.EconomyTitle} >{name}</Typography>
                            </Box>
                            </NavLink>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default AllFigture
