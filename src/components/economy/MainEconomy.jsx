import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useTheme } from 'styled-components';
import EconomyData from '../../services/Economy/EconomyData'

const MainEconomy = () => {
  let EconomyStyle = useTheme();
  let head =  EconomyStyle.CharityParagraph.Economy.heading
  let textStyle =  EconomyStyle.CharityParagraph.Economy.EconomyTitle
  return (
    <Grid container>
       <Grid item padding={{xs:'1rem', sm:'6rem 2.2rem'}}>
          {
            EconomyData.map(({id,title,text,p1,p2})=>{
              return(
                <Box key={id} width={{sx:'100%', sm:'95%'}} >
                  <Typography variant='h2' sx={head} >{title}</Typography>
                  <Typography variant='h3' sx={textStyle} >{text}</Typography>
                  <Typography variant='h4' sx={textStyle} >{p1}</Typography>
                  <Typography variant='h5' sx={textStyle} >{p2}</Typography>
                </Box>
              )
            })
          }
       </Grid>
    </Grid>
  )
}

export default MainEconomy
