import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react'

const Characters = ({ data }) => {
  const actors = (data.Actors).split(', ')
  return (
    <Box component='div' display={'flex'} flexWrap={'wrap'} sx={{ margin: '2rem 10rem' }}>
      {/* <Grid container rowSpacing={1} direction="row" columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
      {actors.map((item) => {
        return(
            // <Grid item xs sx={{ mt: 3 }}>
              <Box component='div' mr={2} mb={2}>
                <img src={data.Poster !== 'N/A' ? data.Poster : 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg'} style={{ Width: '305px', Height: '305px', objectFit: 'cover', borderRadius: '10px' }} />
                <Typography variant="h5" component="h5">{item}</Typography>
              </Box>
            // </Grid>
        )
      })}
      {/* </Grid> */}
    </Box>
  )
}

export default Characters