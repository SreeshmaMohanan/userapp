import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{height:'80px',color:'black'}}> 
     <Navbar className="bg-primary" style={{height:'80px'}}>
    <Container>
      <Navbar.Brand className=' fw-bold text-light' >
      <Link to='/' style={{color:'white'}} className='btn btn-transparent'><i class="fa-sharp fa-solid fa-user-plus fa-beat "></i></Link>{' '}
            User App
      </Navbar.Brand>
    </Container>
  </Navbar>
  
  </div>
  )
}

export default Header