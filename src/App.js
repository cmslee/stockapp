import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//import page and components
import Homepage from './pages/Homepage';
import About from './pages/About'
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import NavBar from './components/NavBar';

//import data
import stocks from './data/data';

import './App.css';

function App() {
  const [data, setData] = useState(stocks)
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/stocks' element={<Dashboard stocks={data}/>} />
        <Route path='/stocks/:symbol' element={<Stock stockInfo={data}/>}/>
      </Routes>
    </div>
  );
}

export default App;
