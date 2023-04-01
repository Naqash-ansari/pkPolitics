import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import news from '../../services/newsData/news'

const RightBtn = () => {
    let style = useTheme();
    style = style.CharityParagraph.newsBtn;

    let PrimeMinister = news
    return (
        <>
            {
                PrimeMinister.map(({ duration, id, party }) => {
                    return (
                        <div key={id}>
                            <Box sx={{ "&:hover": { backgroundColor: '#eeeeee', }, color: 'red', padding: '0.6rem 1rem' }}>
                                <NavLink style={style}><span style={{ paddingRight: '1rem' }}>Govt.</span> {duration} <br />
                                   <span style={{ fontSize: '0.7rem' }}>{party}</span>
                                </NavLink>
                            </Box>
                            <Divider />
                        </div>
                    )
                })
            }

        </>
    )
}

export default RightBtn
