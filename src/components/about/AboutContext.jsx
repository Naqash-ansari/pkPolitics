import { Button, Grid, Hidden, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import '../../assets/style/about.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';

const AboutContext = () => {
  let style = useTheme();
  // console.log();
  return (
    <>
      <Grid container spacing={2} sx={{ padding: '0rem 1.5rem' }}>
        <Hidden smDown>
          <Grid item md={3} id='about_context_grid'>
            <Box id='about_context_grid-fixed'>
              <Box sx={{ padding: '0rem', mt: '4rem' }} >
                <Grid container>
                  <Grid item xs={3} id='about_sidebbar'>
                    <Box id='about-icon' >
                      <span><FacebookOutlinedIcon sx={style.CharityParagraph.aboutcion} /></span>
                    </Box>
                    <Box id='about-icon' >
                      <span>

                        <InstagramIcon sx={style.CharityParagraph.aboutcion} /></span>
                    </Box>
                    <Box id='about-icon' >
                      <span><TwitterIcon sx={style.CharityParagraph.aboutcion} /></span>
                    </Box>
                    <Box id='about-icon' >
                      <span><LinkedInIcon sx={style.CharityParagraph.aboutcion} />
                      </span>
                    </Box>
                  </Grid>
                  <Grid item xs={9} sx={{ backgroundColor: '', borderLeft: '1px solid silver', borderTop: '1px solid silver' }} >
                    <Box>
                      <Box mt={4} sx={style.CharityParagraph.aboutsideLink}>
                        <NavLink id='aboutLink'>political figture</NavLink>
                      </Box>
                      <Box sx={style.CharityParagraph.aboutsideLink}>
                        <NavLink id='aboutLink'>history of pakistan</NavLink>
                      </Box>
                      <Box sx={style.CharityParagraph.aboutsideLink}>
                        <NavLink id='aboutLink'>provinces of pakistan</NavLink>
                      </Box>
                      <Box sx={style.CharityParagraph.aboutsideLink}>
                        <NavLink id='aboutLink'>Districts of pakistan</NavLink>
                      </Box>
                      <Box sx={style.CharityParagraph.aboutsideLink}>
                        <NavLink id='aboutLink'>Cities of pakistan</NavLink>
                      </Box>
                      <Box sx={style.CharityParagraph.aboutsideLink}>
                        <NavLink id='aboutLink'>beautiful places</NavLink>
                      </Box>
                      <Box sx={style.CharityParagraph.aboutsideLink}>
                        <NavLink id='aboutLink'>heart of pakistan</NavLink>
                      </Box>
                      <Box sx={style.CharityParagraph.aboutsideLink}>
                        <NavLink id='aboutLink'>map of pakistan</NavLink>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Hidden>
        <Grid item md={9}>
          <Box padding={{ sm: '2rem', xs: '2rem 0rem' }} sx={{ fontFamily: 'Lora, serif' }} >
            <Typography fontSize={{ sx: '2rem', xs: '1.5rem' }} sx={{ fontWeight: '600' }} > INTRODUCTION</Typography>
            <Typography fontSize={{ sx: '2rem', xs: '1rem' }} sx={{ fontWeight: '500' }} padding={{ sm: '1rem 10rem 0rem 0rem' }} >
              Pakistan emerged on the world map on August 14th, 1947. It has its roots into the remote
              past. Its establishment was the culmination of the struggle by Muslims of the South-Asian
              subcontinent for a separate homeland of their own and its foundation was laid when Muhammad
              bin Qasim subdued Sindh in 711 A.D. as a reprisal against sea pirates that had taken refuge in
              Raja Dahir's kingdom.
            </Typography>

            <Typography fontSize={{ sx: '2rem', xs: '1rem' }} sx={{ fontWeight: '500', mt:'0.7rem' }} padding={{ sm: '1rem 10rem 0rem 0rem' }} >
              The advent of Islam further strengthened the historical individuality in the areas now
              constituting Pakistan and further beyond its boundaries.
            </Typography>
            <Typography fontSize={{ sx: '2rem', xs: '0.8rem' }} sx={{ fontWeight: '500' }} padding={{ sm: '1rem 10rem 0rem 0rem' }}>
              The first permanent Muslim foothold in the subcontinent was achieved with Muhammad bin Qasim's 
              conquest of Sindh in 711 A.D. An autonomous Muslim state linked with the Umayyed, and later, 
              the Abbassid Caliphate was established with jurisdiction extending over southern and central 
              parts of present Pakistan. Quite a few new cities were established and Arabic was introduced as
               the official language. At the time of Mahmud of Ghazna's invasion, Muslim rule still existed, 
               though in a weakened form, in Multan and some other regions. The Ghaznavids (976-1148) and 
               their successors
            </Typography>
               <Button variant="outlined" color='success' sx={{padding:'0.2rem 1.8rem',mt:'0.7rem'}} >More</Button>

            
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default AboutContext
