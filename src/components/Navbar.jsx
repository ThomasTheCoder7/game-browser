
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const navbar = ({searchText,setSearchText,setLoading,hideNav}) => {
     const Navigate = useNavigate();
     const [text, update] = useState([]);
     
     const changeSearch = (event) => {
          event.preventDefault();
          setLoading(true);
          setSearchText(text);
          Navigate("game-browser/search")
          

          
          
          
          
     }
    
     return (
          <>
                  <Navbar bg="dark" expand="lg" sticky='top' hidden={hideNav} text={"light"}>
                    <Container fluid>
                    <Link to="game-browser" className="navbar-brand text-light" >Game Browser</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li className="nav-item">
                                        <Link className="nav-link active text-light" to="/">Home</Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link className="nav-link text-light" to="/about">About</Link>
                                   </li>
                              </ul>
            
             
               
             
           
            
            
          </Nav>
          <form className="d-flex" role="search" >
                                   <input className="form-control me-2 text-light bg-dark" type="search" placeholder="Search" aria-label="Search" required="required" onChange={event => update(event.target.value)} value={text} />
                                   <button className="btn btn-outline-light" type="submit"   onClick={changeSearch} >Search</button>
                              </form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 

          </>
     )
}


export default navbar;













/*{<nav className="navbar navbar-expand-lg bg-dark sticky-top">
                    <div className="container-fluid">


                         <Link to="/" className="navbar-brand text-light" >Game Browser</Link>



                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="gonavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li className="nav-item">
                                        <Link className="nav-link active text-light" to="/">Home</Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link className="nav-link text-light" to="/about">About</Link>
                                   </li>
                              </ul>
                              <form className="d-flex" role="search" >
                                   <input className="form-control me-2 text-light bg-dark" type="search" placeholder="Search" aria-label="Search" required="required" onChange={event => update(event.target.value)} value={text} />
                                   <button className="btn btn-outline-light" type="submit"   onClick={changeSearch} >Search</button>
                              </form>
                         </div>
                    </div>
               </nav>}*/