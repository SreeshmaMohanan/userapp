import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
function Home() {
  const [data, setData] = useState([]);

  useEffect(()=> {
      axios.get('http://localhost:3031/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
      const confirm = window.confirm("Do you like to Delete?");
      if(confirm) {
          axios.delete('http://localhost:3031/users/'+id)
          .then(res => {
              console.log(res.data);
              window.location.reload(true);
          })
      }
    }

  return (
    <div>
      <div className="container">
      <div className='d-flex justify-content-between flex-wrap'>
        <h2 className='mt-3 fw-bold '>All Users</h2>
        <Link to="/create" className="btn btn-primary my-3">
          Add user +
        </Link>
      </div>
      <table className="table table-responsive-md table-responsive text-white table-responsive-sm border">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
          data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link
                  className="btn btn-transparent btn-sm fz-bolder "
                  to={`/update/${d.id}`}
                >
                  <i style={{fontSize:'25px'}} class="fa-solid fa-pen-to-square text-primary"></i>
                </Link>
                <button
                  className="btn btn-transparent btn-sm fz-bolder"
                  onClick={() => handleDelete(d.id)}
                >
                  <i style={{fontSize:'25px'}} class="fa-solid fa-trash  text-danger"></i>
                </button>
                <Link
                  className="btn btn-transparent btn-sm fz-bolder text-dark"
                  to={`/read/${d.id}`}
                >
                  <i style={{fontSize:'25px'}} class="fa-sharp fa-solid fa-eye"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Home