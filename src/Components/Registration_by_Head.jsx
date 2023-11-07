import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Registration_by_Head() {
    
        
    
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
const handlesubmit = (e) =>{
    e.preventDefault();
    const xyz = {fname,lname,email,password}
    axios.post('http://localhost:5000/hrmshead/addhead',xyz)
    .then(res=>{
        console.log(res.data)
        alert("Form submitted sucessfully")
    }).catch(err=>{
        console.log(err)
        alert("Something went wrong")
    })

    setFname("")
    setLname("")
    setEmail("")
    setPassword("")
    
};
  return (
    <>
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
            <form onSubmit={handlesubmit} action="">
                <div className="mb-3">
                    <label htmlFor="email">
                        <h6>First Name</h6>
                    </label>
                    <input
                     type="text" 
                     placeholder='Enter your Name'
                     autoComplete='off'
                     value={fname}
                     className='form-control rounded-0'
                     onChange={(e)=>setFname(e.target.value)}
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <h6>Last Name</h6>
                    </label>
                    <input
                     type="text" 
                     placeholder='Enter your Last Name'
                     autoComplete='off'
                     value={lname}
                     className='form-control rounded-0'
                     onChange={(e)=>setLname(e.target.value)}
                     />
                </div>
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
                     onChange={(e)=> setEmail(e.target.value)}
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
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                </div>


                
                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Register
                </button>
                </form>
                <p className='mt-3'>Already Have an Account
                <Link to="/login_by_head">
                    Login
                </Link></p>
            
        </div>
    </div>
    </>
  )
}