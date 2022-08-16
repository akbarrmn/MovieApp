import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const PosterTitle = ({data}) => {
  return (
    <Box component='div' sx={{ margin: '0 10rem', pt: 5 }}>
        <Typography variant='h3' sx={{ color:'white', fontWeight:'700' }}>
            {data ? data.Title: '--'}
        </Typography>
        <Box component='div' sx={{ display:'flex', alignItems:'center' }}>
            <img src="/images/star.png" style={{ height:'24px' }} />
            <Typography variant='h6' sx={{ color:'white', fontWeight:'500', fontSize:'20px', ml:2 }}>
                {data ? data.imdbVotes :'--'} Votes
            </Typography>
        </Box>
        <Typography variant='h6' sx={{ color:'white', maxWidth:'55%', mt:2 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae officiis velit porro corrupti nobis architecto voluptas? Adipisci, consequatur commodi. Atque beatae quam repellendus pariatur esse, corporis dicta soluta molestiae? Illo, maxime non. Fugit itaque esse culpa eligendi nobis! Deserunt, illo.
        </Typography>
        <Box component='div' sx={{ mt:3 }}>
            <Button sx={{ background:'#FE024E', borderRadius:'15px', width:'330px', height: '80px', color:'white', fontSize:'28px',fontWeight:'700' }}>
                Watch Trailer
            </Button>
            <Button sx={{borderRadius:'15px', width:'330px', height: '80px', border: '4px solid #FFFFFF',fontSize:'28px', color:'white', ml:4, fontWeight:'700' }}>
                Add to Watchlist
            </Button>
        </Box>
    </Box>
  )
}

export default PosterTitle