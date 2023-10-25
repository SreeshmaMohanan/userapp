import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    username: "",
    url:""
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("https://user-server-9rka.onrender.com/users", inputData).then((res) => {
      alert("Data Posted Successfully!");
      console.log(res.data);
      navigate("/home");
    });
  };

  return (
    <div>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="username">ImageUrl:</label>
            <input
              type="text"
              name="imageUrl"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, url: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Create