import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {

    
  return (
    <div >
    <Navbar  bg='light' expand="lg" sticky='top'>
    <Container>
        <Navbar.Brand>
        <img src="https://assetscdn1.paytm.com/movies_new/_next/static/media/brand_logo_lg.40253d4c.png" alt="no image" style={{width:'150px'}} className='mt-2' /></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='icons' style={{justifyContent:'end'}}>
        <Nav className="me-auto">
        <Nav.Link className='fs-5 fw-normal text-dark'><Link className='text-decoration-none text-dark' to={'/'}>Home</Link></Nav.Link>
        <Nav.Link className='fs-5 fw-normal text-dark'><Link className='text-decoration-none text-dark' to={'/Theaters'}>Theaters</Link></Nav.Link>
        <Nav.Link className='fs-5 fw-normal text-dark'><Link className='text-decoration-none text-dark' to={'category'}>Orders</Link></Nav.Link>
        </Nav>
            <Nav style={{gap:'0.5rem', alignItems:'center'}} className='d-inline-flex'>
              <Link to={'/login'}><button className='btn btn-primary rounded-5 p-2 text-light me-4 '>Login/SignUp</button></Link>
              <a href="https://apps.apple.com/in/app/ticketnew-book-movie-tickets/id495490813"><FontAwesomeIcon icon={faAppStore} className='fs-2 me-4 text-dark'/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=ticketnew.android.ui">
            <FontAwesomeIcon icon={faGooglePlay} className='fs-2 me-4 text-dark' />
            </a>
            </Nav>
        </Navbar.Collapse>
        
    </Container>
    </Navbar>
</div>

  )
}

export default Header