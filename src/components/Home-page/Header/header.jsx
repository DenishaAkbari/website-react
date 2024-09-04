import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../../assets/logo/logo.png'
import '../Header/Header.css'

function Header() {
  return (
    <header>

    <Navbar expand="lg" className='text-white'>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto">
            <Nav.Link href="#" className='text-white'>Home</Nav.Link>
            <NavDropdown title="Pages" className='text-white' id="basic-nav-dropdown"> pages
              <NavDropdown.Item href="#action/3.1">GIM(Graduate In Multimedia)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ITA-CS+</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Animation  & VFX 2 year</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Event" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blogs" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='d-flex align-items-center ms-5'> 
            <i class="fa-regular fa-circle-user" style={{marginRight: "20px"}}></i>
            <form action="">
                <button type="submit" className='btn btn-outline-transparent bg-white py-3 px-4'>Search<i class="fa-solid fa-magnifying-glass" style={{marginLeft: "80px"}} ></i></button>
            </form>  
          </div> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;