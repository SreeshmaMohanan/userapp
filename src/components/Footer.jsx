import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-primary p-5 text-light '>
        <Row className='align-items-center justify-content-between'>
            <Col sm={12} md={6} lg={3}>
             <div>
                    <h3><Link to='/' style={{color:'white'}} className='btn btn-transparent'><i class="fa-sharp fa-solid fa-user-plus fa-beat "></i></Link>{' '}
            User App</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus aspernatur placeat ex ipsa temporibus rem sunt. Impedit repellat amet, rerum, corporis soluta cumque nulla id incidunt nisi eos molestiae.</p>
             </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
                <div>
                <h3>About Us</h3>
                <h6>Add User</h6>
                <h6>View User</h6>
                <h6>Edit User</h6>
                <h6>Delete User</h6>
                </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
                <div>
                <h3>Contact Us</h3>
               <p className='d-flex'>
                    <input type="text" className='Form-control p-2' placeholder='enter your email' />
                    <button className='btn btn-success ms-2'>Subscribe</button>
               </p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Footer