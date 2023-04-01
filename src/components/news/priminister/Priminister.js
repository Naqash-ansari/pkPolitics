import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from 'styled-components'
import Img from '../../../assets/img/LiaquatAli.jpg'
import PriministerNews from './PriministerNews'
import PriministerSmallNews from './PriministerSmallNews'

const Priminister = () => {
    // eslint-disable-next-line 
    let pimster = useTheme();
    pimster = pimster.CharityParagraph.style
    return (
        <Grid container columnSpacing={2}  padding={{xs:'1rem 2rem', sm:'6rem 2rem'}} >
            <Grid item xs={12} sm={3} >
                <img src={Img} style={{width:'100%'}} alt='hello' />
            </Grid>
            <Grid item xs={12} sm={9} sx={{padding:'1rem 2rem'}}>
                <Typography sx={pimster}>
                    <b>Liaquat Ali Khan</b> (Urdu: لِیاقت علی خان listen (help·info); 1 October 1895 – 16 October 1951), also referred to in Pakistan as Quaid-e-Millat (قائد ملت, 'Leader of the Nation') or Shaheed-e-Millat (شہِیدِ مِلّت, 'Martyr of the Nation'), was a Pakistani statesman, lawyer, political theorist, and one of the leading founding fathers of Pakistan. On 15 August 1947, one day after independence, Khan became the first prime minister of Pakistan; he also held cabinet portfolio as the first foreign minister, defence minister, and frontier regions minister from 1947 until his assassination in 1951. Prior to the part, Khan briefly tenured as Finance minister of British India in the Interim Government that undertook independence of Pakistan and India, led by Louis Mountbatten, the then-Viceroy of India.[2][3
                </Typography>
            </Grid>

            <PriministerNews />
            <PriministerSmallNews />
        </Grid>
    )
}

export default Priminister
