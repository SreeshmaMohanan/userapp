import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {
  const { id } = useParams();
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3031/users/" + id)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className=" w-50-sm border shadow px-5 py-3 rounded ">
        <h2 className='text-center'>User Details</h2>
       <div className='d-flex flex-wrap m-5'>
          <div><img className='img-fluid shadow' height={'200px'} width={'200px'} style={{borderRadius:'60%'}}   src={data.url} alt="" /></div>
         <div className='ms-3'>
            <h5><b>User Id:</b> {data.id}</h5>
            <h5><b>Username:</b> {data.username}</h5>
            <h5><b>Name: </b>{data.name}</h5>
            <h5><b>Email: </b>{data.email}</h5>
            <Link to="/home" className="btn btn-info me-3"><i class="fa-sharp fa-solid fa-arrow-left me-2"></i>Back</Link>
            <Link to={`/update/${id}`} className="btn btn-primary ">Edit</Link>
         </div>
       </div>
      </div>
    </div>
    </div>
    
  )
}

export default Read