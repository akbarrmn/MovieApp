import { Box, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Characters from './Characters'
import Content from './Content'
import Overview from './Overview'
import Poster from './Poster'
import PosterTitle from './PosterTitle'
import Review from './Review'

const Details = () => {
    const [data, setData] = useState()
    const { id } = useParams()

    const getData = async () => {
        await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d41a16c2`).then(res => setData(res.data))
    }

    useEffect(() => {
        getData()
    }, [id]);

    // Button active
    const [clicked, setClicked] = useState('overview');
    let items = [];
    let keys = ['overview', 'character', 'review']
    keys.map((item)=>{
        items.push(
            <Button className={item === clicked ? 'activeButton' : 'black'} onClick={() => setClicked(item)}>
                {item}
            </Button>
        )
    })
    console.log(data);
    
    return (
        <>
            <Box component='div'>
                <Poster data={data}/>
                <PosterTitle data={data}/>
                <Box component='div' sx={{ margin:'10rem 10rem 0 10rem' }}>
                    {items}
                </Box>
                <Content overview={<Overview data={data}/>} characters={<Characters data={data}/>} review={<Review data={data}/>} clicked={clicked}/>
            </Box>
        </>
    )
}

export default Details