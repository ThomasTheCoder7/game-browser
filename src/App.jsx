import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Detailed from './components/Detailed'
import SearchView from './components/SearchView'
import {Routes,Route} from 'react-router-dom' 
import { useState, useEffect } from 'react';






function App() {
  

  const [searchResults, setResults] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [isLoading, setLoading] = useState([]);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    if (searchText != null) {
      fetch(`https://api.rawg.io/api/games?key=39a9a8f059eb4e2d9df768186807dcf9&search=${searchText}`)
        .then(response => response.json())
        .then(data => {
          setResults(data.results);
          
          setLoading(false);
          // if (searchResults.length === 0) console.log("empty")
          
        })
      
    }  
  }, [searchText])


  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText}
      setLoading = {setLoading} hideNav={hideNav}
      />
        
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResult={searchResults} loading={ isLoading}/>} />
        <Route path="/game/:id/:k" element={<Detailed res={searchResults} setHideNav={setHideNav} setResults={ setResults} />}/>
        </Routes>
      

    </div>
  );
}

export default App;

