import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Filter = ({ clicked, handleFilter }) => {
    let items = [];
    let keys = ['', 'movie', 'series', 'game']
    keys.map((item) => {
        items.push(
            <Button className={item === clicked ? 'activeButton mt-1' : 'black mt-1'} onClick={() => handleFilter(item)}>
                {item == '' ? 'All' : item}
            </Button>
        )
    })
    return (
        <>
            <Box component='div'>
                {items}
            </Box>
        </>
    )
}

export default Filter