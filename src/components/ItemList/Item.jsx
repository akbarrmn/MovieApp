import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const Item = ({ data, clicked}) => {
    return (
        <>
            <Grid container rowSpacing={1} direction="row"  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data ? data.filter((data) => data.Type.includes(clicked)).map((item) =>(
                    <Grid item xs sx={{ mt: 5 }}>
                        <Box component='div'>
                        <Link to={`/detail/${item.imdbID}`} style={{ textDecoration:'none', color:'black' }}>
                            <img alt='' src={item.Poster !== 'N/A' ? item.Poster : 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg'} style={{ maxWidth: '280px', minHeight: '444px', objectFit: 'cover', borderRadius: '10px' }} />
                            <Typography variant="h5" component="h5">{item.Title}</Typography>
                            <Typography component="p">{item.Year}</Typography>  
                        </Link>
                        </Box>
                    </Grid>
                ))
                :
                <Shimmer/>
                }
            </Grid>
        </>
    )
}

export default Item