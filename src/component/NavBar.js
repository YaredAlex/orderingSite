import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from '../context/UserContext';
import { LogoutMessage } from './LogoutMessage';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

const NavBar =()=>{
 const {currentUser} = useContext(UserContext);   
 const [show,setShow] = useState(false);
  return (
    <Navbar bg="danger" expand="lg" className=' navbar-dark'>
      {show&&<LogoutMessage setShow={setShow}/>}
      <Container>
        <Navbar.Brand href="#home">food</Navbar.Brand>
         <SearchBar/>
        <Navbar.Toggle aria-controls="food-nav" />
        <Navbar.Collapse id="food-nav" className=''>
          <Nav className=" nav-bar-nav" >
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/" className='nav-link'>Cart</Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
            {currentUser.email&& 
                  <>
              <Link className="dropdown-item" role="button" data-rr-ui-dropdown-item  to="/usersetting">setting</Link>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>setShow(true)}>
                <p className='text-center '><span className='d-inline-block rounded-circle bg-primary text-light h-100 text-center pb-1' style={{width:"26.5px"}} >{currentUser.email.substring(0,1)}</span> Logout</p>
              </NavDropdown.Item>
              </>
              }
              {currentUser.email ? "":<Link data-rr-ui-dropdown-item to="/login" className='dropdown-item'>Login</Link>}
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;