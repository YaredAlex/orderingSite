import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from '../context/UserContext';


const NavBar =()=>{
 const {currentUser} = useContext(UserContext);   
  return (
    <Navbar bg="danger" expand="lg" className=' navbar-dark'>
      <Container>
        <Navbar.Brand href="#home">food</Navbar.Brand>
         <form className='search-bar shadow'>
          <label>
            <input type='search' placeholder='Search...'/>
            <FontAwesomeIcon icon={faSearchengin} className="p-1"/>
          </label>
         </form>
        <Navbar.Toggle aria-controls="food-nav" />
        <Navbar.Collapse id="food-nav" className=''>
          <Nav className=" nav-bar-nav" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">S</Nav.Link>
            <NavDropdown title="account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">setting</NavDropdown.Item>
              {currentUser&& 
              <>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                {currentUser.email}
                <p className='text-center'>Logout</p>
              </NavDropdown.Item>
              </>}
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;