import { Grid } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import PriminsterDataNews from '../../../services/newsData/PriminsterDataNews'

const PriministerSmallNews = () => {
    return (
        <Grid container spacing={2} sx={{ padding: '0rem 0rem' }}>
            {
                PriminsterDataNews.map(({ link, id }) => {
                    return (
                        <Grid item key={id} xs={6} sm={3} sx={{ width: '100%' }}>
                            <ReactPlayer playing={true} loop={true} muted={true} width='100%' height='20vh' style={{ mt: '2rem', width: '100%' }} url={link} />
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}

export default PriministerSmallNews
