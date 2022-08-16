import React from 'react'
import { Box, Typography } from '@mui/material'

const Overview = ({data}) => {
    return (
        <Box component='div' sx={{ margin: '2rem 10rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h4' sx={{ fontWeight: '700' }}>
                    Synopsis
                </Typography>
                <Box component='div' sx={{ width: '100%', border: '1.5px solid #CDCDCD', background: '#CDCDCD', ml: 2 }} />
            </Box>
            <Typography variant='h6' sx={{ mt: 2 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus corporis dolore nostrum ad expedita fugiat nemo magni iste debitis odit laudantium sapiente, sunt nam aliquid harum. Eligendi qui debitis sed saepe nihil minus recusandae ducimus id eius, dignissimos harum voluptates laborum, nulla consectetur. Commodi aperiam sequi saepe ab voluptatum! Voluptatem expedita odio delectus! Deleniti error perferendis voluptas dolore, suscipit id consequuntur vitae sequi? Velit, obcaecati tenetur reiciendis tempore voluptas suscipit!
            </Typography>
            <Typography variant='h6' sx={{ mt: 2 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus corporis dolore nostrum ad expedita fugiat nemo magni iste debitis odit laudantium sapiente, sunt nam aliquid harum. Eligendi qui debitis sed saepe nihil minus recusandae ducimus id eius, dignissimos harum voluptates laborum, nulla consectetur. Commodi aperiam sequi saepe ab voluptatum! Voluptatem expedita odio delectus! Deleniti error perferendis voluptas dolore, suscipit id consequuntur vitae sequi? Velit, obcaecati tenetur reiciendis tempore voluptas suscipit!
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <Typography variant='h4' sx={{ fontWeight: '700' }}>
                    Movie
                </Typography>
                <Box component='div' sx={{ width: '100%', border: '1.5px solid #CDCDCD', background: '#CDCDCD', ml: 2 }} />
            </Box>
            <Box component='div' sx={{ mt: 2 }}>
                <Typography variant='h6'>Release date: {data ? data.Released : ''}</Typography>
                <Typography variant='h6'>Director: {data ? data.Director : ''}</Typography>
                <Typography variant='h6'>Budget: {data ? data.BoxOffice : ''}</Typography>
                <Typography variant='h6'>Genre: {data ? data.Genre : ''}</Typography>
                <Typography variant='h6'>Language: {data ? data.Language : ''}</Typography>
                <Typography variant='h6'>Writer: {data ? data.Writer : ''}</Typography>
            </Box>
        </Box>
    )
}

export default Overview