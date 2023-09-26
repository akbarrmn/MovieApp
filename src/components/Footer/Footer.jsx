import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box component='div' sx={{ background: '#000000', width: '100%', height: '400px' }}>
            <Box component="div" sx={{ margin: '3rem 10rem', pt: 5 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ color: 'white' }}>
                    <Grid item xs={4}>
                        <Box
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <img
                                    src="/images/brand.png"
                                    alt="logo"
                                    loading="lazy"
                                    style={{ width: '100px' }}
                                />
                            </IconButton>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                MovieApp
                            </Typography>
                        </Box>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <Typography variant='h5' component='h5'>
                            Tentang Kami
                        </Typography>
                        <Typography variant='h5' component='h5' sx={{ mt:2 }}>
                            Blog
                        </Typography>
                        <Typography variant='h5' component='h5' sx={{ mt:2 }}>
                            Layanan
                        </Typography>
                        <Typography variant='h5' component='h5' sx={{ mt:2 }}>
                            Karir
                        </Typography>
                        <Typography variant='h5' component='h5' sx={{ mt:2 }}>
                            Pusat Media
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h5' component='h5'>
                            Download
                        </Typography>
                        <Box component='div' sx={{ display:'flex', alignItems:'center', ml:-1.5 }}>
                            <img src="/images/google play 1.png" style={{ maxWidth:'200px' }}/>
                            <img src="/images/apple store 1.png" style={{ maxWidth:'190px', marginTop:'0.5rem' }}/>
                        </Box>
                        <Typography variant='h5' component='h5'>
                            Social Media
                        </Typography>
                        <Box component='div' sx={{ display:'flex', alignItems:'center', mt:2 }}>
                            <img src="/images/facebook.png" style={{ maxWidth:'55px' }}/>
                            <img src="/images/pinterest.png" style={{ maxWidth:'55px', margin:'0 1rem' }}/>
                            <img src="/images/instagram.png" style={{ maxWidth:'55px'}}/>
                        </Box>
                    </Grid>
                </Grid>
                <Box component='div' sx={{ border: '1px solid #D4D4D4', width:'100%', height:'0px', mt:5 }}></Box>
                <Box component='div' sx={{ display:'flex', justifyContent:'center', color:'white', mt:4 }}>
                    <Typography variant='h5'>
                        Copyright © 2000-2002 MovieApp.  All Rights Reserved
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer