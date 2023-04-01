import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Chip, Divider, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../../assets/style/head.css';
import trust1 from '../../assets/img/trust1.jpg'
import charity from '../../assets/img/charity1.png'
import charity2 from '../../assets/img/charity2.png'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useTheme } from 'styled-components';



const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    let ParaStyle = useTheme()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{height:'5.4vh', width:'100%'}}>
            <Box sx={{height:'5.4vh',position:'fixed',width:'100%',
            textAlign: 'center', backgroundColor: 'green', padding: '0.3rem', color: 'white',
            fontFamily: 'Lora, serif'
        }}>
            <NavLink to='/' id='head_link' variant="outlined" onClick={handleClickOpen}>
                Support pK
                Help Provide Humanitarian Aid to Pakistan.
            </NavLink>
            <Dialog
                maxWidth='xl'
                sx={{ mt: '2rem' }}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id='charity_title'>{"Giving to Charity Makes You a True Believer"}</DialogTitle>

                <Grid container>

                    <Grid item xs={12} md={8} id='charity_text'>
                        <p>Prophet Muhammad (PBUH) stated: “A man is not a believer who fills his stomach while his
                            neighbour is hungry.” This means that you are not a true Muslim or believer in Allah
                            (SWT) if you fail to give to charity and show mercy to someone who is less fortunate
                            than you.</p>
                    </Grid>
                </Grid>

                <Grid container spacing={2} mt='3rem'>

                    <Grid item xs={12} md={6} id='img_grid' >
                        <img src={trust1} alt="" />
                        <p>shaukat khanum memorial trust</p>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ borderLeft: '1px solid silver' }} >
                        <Box padding={ParaStyle.CharityParagraph.pad} sx={ParaStyle.CharityParagraph.style}>
                            Many young innocent lives are being saved at Shaukat Khanum Memorial Cancer
                            Hospital and Research Centre. Last year, your Zakat made it possible to treat
                            almost 75% of our patients for free. This year we need 8.5 billion rupees to
                            help those who cannot afford to pay for their own treatment. While the revenue
                            from the Hospital’s diagnostic services has always, and continues to be,
                            utilised for our expansion projects, it is your Zakat that is the hope of
                            life for our poor cancer patients. Donate generously to SKMCH&RC this Ramadan
                            and help us keep this hope alive.
                            <br />
                            <Button sx={{ mt: '2rem' }} variant="outlined" color='success'>Donate <BloodtypeIcon sx={{ ml: '0.3rem  ' }} /></Button>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: '2rem' }}>
                    <Chip color="success" variant="outlined" label="Shaukat Khanum Memorial Trust Pakistan" />
                </Divider>

                <Grid container spacing={2} mt='2rem' >
                    <Grid item xs={12} md={6}  >
                        <Box padding={ParaStyle.CharityParagraph.pad} sx={ParaStyle.CharityParagraph.style}>
                            Many young innocent lives are being saved at Shaukat Khanum Memorial Cancer
                            Hospital and Research Centre. Last year, your Zakat made it possible to treat
                            almost 75% of our patients for free. This year we need 8.5 billion rupees to
                            help those who cannot afford to pay for their own treatment. While the revenue
                            from the Hospital’s diagnostic services has always, and continues to be,
                            utilised for our expansion projects, it is your Zakat that is the hope of
                            life for our poor cancer patients. Donate generously to SKMCH&RC this Ramadan
                            and help us keep this hope alive.
                            <br />
                            <Button sx={{ mt: '2rem' }} variant="outlined" color='success'>Donate <BloodtypeIcon sx={{ ml: '0.3rem  ' }} /></Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ borderLeft: '1px solid silver' }} id='img_grid'>
                        <img src={charity} alt="" />
                        <p>shaukat khanum memorial trust</p>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: '2rem' }}>
                    <Chip color="success" variant="outlined" label="Shaukat Khanum Memorial Trust Pakistan" />
                </Divider>


                <Grid container spacing={2} mt='2rem' >
                    <Grid item xs={12} md={6} sx={{ borderRight: '1px solid silver' }} id='img_grid' >
                        <img src={charity2} alt="" />
                        <p>shaukat khanum memorial trust</p>
                    </Grid>
                    <Grid item xs={12} md={6} id='thred_charity_text' >
                        <Box padding={ParaStyle.CharityParagraph.pad} sx={ParaStyle.CharityParagraph.style} >
                            Many young innocent lives are being saved at Shaukat Khanum Memorial Cancer
                            Hospital and Research Centre. Last year, your Zakat made it possible to treat
                            almost 75% of our patients for free. This year we need 8.5 billion rupees to
                            help those who cannot afford to pay for their own treatment. While the revenue
                            from the Hospital’s diagnostic services has always, and continues to be,
                            utilised for our expansion projects, it is your Zakat that is the hope of
                            life for our poor cancer patients. Donate generously to SKMCH&RC this Ramadan
                            and help us keep this hope alive.
                            <br />
                            <Button sx={{ mt: '2rem' }} variant="outlined" color='success'>Donate <BloodtypeIcon sx={{ ml: '0.3rem  ' }} /></Button>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: '2rem' }}>
                    <Chip color="success" variant="outlined" label="Shaukat Khanum Memorial Trust Pakistan" />
                </Divider>




                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    {/* <Button onClick={handleClose}>Agree</Button> */}
                </DialogActions>
            </Dialog>
        </Box>
        </Box>
    );
}