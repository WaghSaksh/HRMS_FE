import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-secondary  vh-100 ">
        <div className="bg-white p-3 rounded-5 w-25 border-3 ">
          <button type="button"className='btn btn-dark  w-100 rounded-0 my-5 rounded-pill' onClick={() => navigate("/login_by_admin")}>Login Via Admin</button>
          <button type="button" className='btn btn-dark  w-100 rounded-0 mb-5 rounded-pill' onClick={() => navigate("/login_by_head")}  >Login Via Head of Department</button>
          <button type="button" className='btn btn-dark  w-100 rounded-0 mb-5 rounded-pill' onClick={() => navigate("/login_by_user")}>Login Via User</button>
        </div>
        </div>
      </div>
      )
}

