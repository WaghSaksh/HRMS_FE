import React, { useState } from 'react'
// import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
// import sumago1 from '../Images/sumago1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login_by_Head() {

  // const divStyle = {
  //   background: 'linear-gradient(to bottom, #6b87e3, hsl(206, 43%, 85%))',
  // };
  // const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    e.preventDefault();
    const xyz = { email, password }
    axios.post("http://localhost:5000/hrms/login_by_head", xyz)
      .then(res => {
        console.log(res.data)
        alert("Form submitted sucessfully")
      }).catch(err => {
        console.log(err)
        alert("Something went wrong")
      })


    
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handlesubmit} action="">


          <div className="mb-3">
            <label htmlFor="email">
              <h6>Email</h6>
            </label>
            <input
              type="email"
              placeholder='Enter your Email'
              autoComplete='off'
              value={email}
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <h6>password</h6>
            </label>
            <input
              type="password"
              placeholder='Enter your Password'
              value={password}
              className='form-control runded-0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0' onClick={() => navigate("/")}>
            Login
          </button>
        
        <p className='mt-3'>Don't Have an Account
          <Link to="/register_by_head">
            Register
          </Link></p>
          </form>
      </div>
    </div>
   
  )
}
