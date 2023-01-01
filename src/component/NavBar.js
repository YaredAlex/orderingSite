import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavBar =()=>{
     
  return (
    <Navbar bg="danger" expand="lg" className=' navbar-dark'>
      <Container>
        <Navbar.Brand href="#home">food</Navbar.Brand>
        <Navbar.Toggle aria-controls="food-nav" />
        <Navbar.Collapse id="food-nav" className=''>
          <Nav className="ms-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="dark" size="sm" className='me-2'>Click Me</Button>
    </Navbar>
  );
}


export default NavBar;