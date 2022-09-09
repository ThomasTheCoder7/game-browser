import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Detailed from './components/Detailed'
import SearchView from './components/SearchView'
import PageNotFound from './components/PageNotFound';
import {Routes,Route} from 'react-router-dom' 
import { useState, useEffect } from 'react';






function App() {
  

  const [searchResults, setResults] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [isLoading, setLoading] = useState([]);
  const [hideNav, setHideNav] = useState(false);
  const [screenshots, setSc] = useState({})
  const key = "53f7c1ee5b2449dc8379de8da8db4d18";
  useEffect(() => {
    
    
      
      
    fetch(`https://api.rawg.io/api/games?key=${key}&search=${searchText}`)
      
        .then(response => response.json())
        .then(data => {
          
          setResults(data.results);
          
          setLoading(false);
          

          
          
        })
      
    
  }, [searchText])


  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText}
      setLoading = {setLoading} hideNav={hideNav}
      />
        
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/search" element={
        <SearchView keyword={searchText}
        searchResult={searchResults} loading={isLoading} setLoading={setLoading}
        setSc={setSc}
        />} />
        <Route path="/game/:id" element={<Detailed loading={isLoading} setLoading={setLoading} res={searchResults} setHideNav={setHideNav} setResults={setResults} screenshots={screenshots} setSc={setSc} />} />
        <Route path="/game-browser/" element={<Home/>} />
        <Route path='*' element={<PageNotFound/>} />
        </Routes>
      

    </div>
    
  );
}

export default App;

