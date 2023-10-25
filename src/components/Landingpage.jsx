import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div>
        <Row className='justify-content-evenly'>
            <Col sm={12} lg={4} md={6}>
                <div className="container d-flex flex-column mt-5 mb-5 p-5 flex-wrap">
                    <h1>User App</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni nulla laboriosam laudantium modi, similique odio iure nam et facere eos, ipsa at architecto autem qui dolorum distinctio sequi veritatis?</p>
                    <Link to='/home' className='btn btn-info mt-5'>See All Users</Link>
                </div>
            </Col>
            <Col sm={12} lg={4} md={6}>
                <div  className="m-5 p-2 img-fluid">
                   <img width={'400px'} height={'300px'} src="https://img.freepik.com/premium-photo/modern-realistic-web-login-page-templates-3d-render_633461-265.jpg?size=626&ext=jpg" alt="" />
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Landingpage