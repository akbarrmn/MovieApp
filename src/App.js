import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailMovie from './pages/DetailMovie';
import HomePage from './pages/HomePage';
import { Theme } from './Theme';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route path='*' element={<><h1 className='text-center'>404 ERROR</h1></>}/>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/detail/:id' element={<DetailMovie/>}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
