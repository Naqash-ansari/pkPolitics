import { Box, Grid } from '@mui/material'
import React from 'react'
import Priminister from './priminister/Priminister'
import RightBtn from './RightBtn'

const News = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={10} >
          <Priminister />
        </Grid>
        <Grid item xs={12} md={2} >
          <Box sx={{width:'100%'}}>
             <Box sx={{width:'100%',border:'1px solid silver',height:'100vh', position:'fixed',overflow:'scroll'}}>
               <RightBtn />
             </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default News
