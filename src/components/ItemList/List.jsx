import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Filter from './Filter';
import Item from './Item';
import { Pagination } from '@mui/material';
import axios from 'axios';

const List = () => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = useState();
  const [clicked, setClicked] = React.useState('');
  
  const handleFilter = (value) => {
    setClicked(value)
  }

  const handleChange = (event, value) => {

    setPage(value);
  }
  const getData = async () => {
    await axios.get(`https://www.omdbapi.com/?apikey=d41a16c2&page=${page}&s=race&type=${clicked}`).then(res => setData(res.data.Search))
  }

  useEffect(() => {
    setData(null)
    setTimeout(() => {
      getData()
    }, 1000);
  }, [page, clicked]);
  return (
    <>
      <Box component="div" sx={{ margin: '2rem 10rem' }}>
        <Typography variant="h5" component="h5">
          Browse by category
        </Typography>
        <Filter handleFilter={handleFilter} clicked={clicked}/>
        <Item page={page} data={data} clicked={clicked}/>
        <Box component='div' sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Pagination count={10} color="secondary" page={page} onChange={handleChange} />
        </Box>
      </Box>
    </>
  )
}

export default List