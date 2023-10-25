import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function Update() {
  const {id} = useParams();

  const [inputData, setInputData] = useState({
      id: id,
      name: '',
      email: '',
      url:''
  })
  const navigate = useNavigate();

  useEffect(() => {
      axios.get('https://user-server-9rka.onrender.com/users/'+id)
      .then(res => setInputData(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (event) => {
      event.preventDefault();
      axios.put('https://user-server-9rka.onrender.com/users/'+id , inputData)
      .then(res => {
          console.log(res)
         alert("Data Updated Successfully!")
          navigate('/home')
      })
  }

  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 shadow rounded p-5'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="number" disabled name='id' className='form-control' value={inputData.id}
                />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control' value={inputData.name}
                onChange={e => setInputData({...inputData, name: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' className='form-control' value={inputData.email}
                onChange={e => setInputData({...inputData, email: e.target.value})}/>
            </div>
            <div>
            <label htmlFor="imageurl">ImageUrl:</label>
            <input
              type="text"
              name="imageUrl"
              className="form-control"
              value={inputData.url}
              onChange={(e) =>
                setInputData({ ...inputData, url: e.target.value })
              }
            />
          </div>
            <br />
            <button className='btn btn-info'>Update</button>
        </form>
    </div>
</div></div>

  )
}

export default Update