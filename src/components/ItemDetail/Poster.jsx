import { Box } from '@mui/material'
import React from 'react'

const Poster = () => {
  return (
    <>
      <Box component='div'>
        <img src='/images/coba/banner1.jpg' style={{ width: '100%', height: '512px', objectFit: 'cover', objectPosition: '0 10%', position: 'absolute', zIndex:'-1' }} />
      </Box>
    </>
  )
}

export default Poster