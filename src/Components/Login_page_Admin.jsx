// import React from 'react'
// // import '../App.css'
// import { useState } from 'react'
// import { Button, Col, Container, Form, Row } from 'react-bootstrap'
// import sumago1 from '../Images/sumago1.jpg'
// import axios from 'axios';


// export default function Login_page_Admin() {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleCancel = (e) => {
//     setEmail("")
//     setPassword("")
//   }

//   const handleLogin = (e) => {
//     const form = e.currentTarget;
//     if (form.checkValidity() === false) {
//       e.preventDefault();
//       e.stopPropagation();
//     }

//     e.preventDefault();
//     const xyz = { email, password }
//     axios.post("http://localhost:8080/user/login", xyz)
//       .then(res => {
//         console.log(res.data)
//         alert("Form submitted sucessfully")
//       }).catch(err => {
//         console.log(err)
//         alert("Something went wrong")
//       })

//   }


//   return (
//     <Container fluid className='fluid'>
//       <Container style={{padding:"5rem"}}>
//     <div className='loginpage border rounded-3'>
//       {/* <div className='border m-5 p-5'> */}
//       <div className='frame d-flex justify-content-center'>

//          <Col md={6} sm={12}>
//           <div className='my-3 p-5'>
//             <img src={sumago1} className='img-fluid rounded-circle' style={{height:"340px"}} alt="" />
//             </div> </Col>

//           <Col md={6} sm={12}>
//           <div className='p-5' style={{marginTop:"5rem"}}>
//             <Form>

//               <Form.Group as={Row} className="mb-3 fs-5 " controlId="formPlaintextEmail">
//                 {/* <Form.Label sm='12 '>
//                   Email
//                 </Form.Label> <br /> */}
//                 <Col sm="12">
//                   <Form.Control type="email"  placeholder="Email" className='border border-dark border-2 bg-transparent text-dark border-top-0 border-start-0 border-end-0'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)} />
//                 </Col>
//               </Form.Group>

//               <Form.Group as={Row} className="mb-3 fs-5 mt-5" controlId="formPlaintextPassword">
//                 {/* <Form.Label column sm="12">
//                   Password
//                 </Form.Label> <br /> */}
//                 <Col sm="12">
//                   <Form.Control type="password" className='border border-dark border-2 bg-transparent text-dark border-top-0 border-start-0 border-end-0' 
//                   placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)} />
//                 </Col>
//               </Form.Group>
//               <Col />
//               <div className=' d-flex justify-content-center my-3 mt-5'>
//                 <Button className='mx-4' type='submit' variant="primary"
//                   onClick={handleLogin}>Login</Button>
//                 {/* <Button className='mx-5' type='submit' variant="outline-success" onClick={handleLogin}>Login</Button> */}
//                 <Button type="reset" variant="danger" onClick={handleCancel}>Cancel</Button>
//                 {/* <Button type="reset" variant="outline-danger" onClick={handleCancel}>Cancel</Button> */}
//                 </div>
//                 <div className='col-md-12 sm-12 my-2  text-bold'>
//                   <p>Don't have an Account? <span >Sign Up</span></p>
//                 </div>


//             </Form>
//             </div>
//           </Col>

//       </div>
//     </div>
//     </Container>
//     </Container>
//   )
// }


import React, { useState } from 'react'
// import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
// import sumago1 from '../Images/sumago1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login_page_Admin() {

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
    axios.post("http://localhost:5000/hrms/login", xyz)
      .then(res => {
        console.log(res.data)
        alert("Form submitted sucessfully")
        navigate('/')
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
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Login
          </button>
        
        <p className='mt-3'>Don't Have an Account
          <Link to="/register_by_admin">
            Register
          </Link></p>
          </form>
      </div>
    </div>
   
  )
}
