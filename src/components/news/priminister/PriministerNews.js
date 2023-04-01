import { Box, Grid } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { useTheme } from 'styled-components'

const PriministerNews = () => {
  let style = useTheme();
  style = style.CharityParagraph.style
  return (
    <Box sx={{ padding: '2rem 1rem' }}>
      <h2>News</h2>
      <Grid container sx={{ padding: '1rem 0rem' }}>
        <Grid item xs={12} sm={8} sx={{ width: '100%' }}>
          <ReactPlayer playing={true} loop={true} muted={true} width='90%' style={{ mt: '2rem' }} url='https://www.youtube.com/watch?v=sUKwTVAc0Vo' />
        </Grid>
        <Grid item xs={12} sm={4} sx={style} padding={{ xs: '1rem 0rem' }}>
          <b>Political activism in British India</b> <br />
          Ali Khan returned to his homeland India in 1923, entering in national politics, determining to eradicate to what he saw as the injustice and ill-treatment of Indian Muslims under the British Indian Government and the British Government.[11] His political philosophy strongly emphasised a divided India, first gradually believing in the Indian nationalism. The Congress leadership approached to Ali Khan to become a part of the party, but after attending the meeting with Jawaharlal Nehru
        </Grid>
      </Grid>
    </Box>
  )
}

export default PriministerNews
