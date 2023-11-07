// import React, { useState } from 'react'
// import Sumago from '../Images/sumago1.jpg'
// import StateDropdown from './StateDropdown';
// import CityDropdown from './CityDropdown';

// export default function Registration() {
//   const [fname, setFname] = useState("")
//   const [lname, setLname] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [employer, setEmployer] = useState("")

//   const states = [
//     "Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal", ];
//     const cities = {
//       "Andaman and Nicobar Islands": ["Port Blair", "Car Nicobar", "Hut Bay"],
//       "Andhra Pradesh": ["Hyderabad", "Vishakhapatnam", "Tirupati"],
//       "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang"],
//       "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
//       "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
//       "Chandigarh": ["Chandigarh"],
//       "Chhattisgarh": ["Raipur", "Bilaspur", "Durg"],
//       "Dadra and Nagar Haveli": ["Silvassa"],
//       "Daman and Diu": ["Daman", "Diu"],
//       "Delhi": ["New Delhi", "Noida", "Gurgaon"],
//       "Goa": ["Panaji", "Vasco da Gama", "Margoa"],
//       "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
//       "Haryana": ["Chandigarh", "Faridabad", "Gurugram"],
//       "Himachal Pradesh": ["Shimla", "Mandi", "Dharamshala"],
//       "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
//       "Karnataka": ["Bangalore", "Mysore", "Hubli"],
//       "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
//       "Lakshadweep": ["Kavaratti", "Agatti", "Andrott"],
//       "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
//       "Maharashtra": ["Mumbai", "Pune", "Nashik"],
//       "Manipur": ["Imphal", "Thoubal", "Bishnupur"],
//       "Meghalaya": ["Shillong", "Tura", "Jowai"],
//       "Mizoram": ["Aizawl", "Lunglei", "Saiha"],
//       "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
//       "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
//       "Puducherry": ["Puducherry", "Karaikal", "Mahe"],
//       "Punjab": ["Chandigarh", "Ludhiana", "Amritsar"],
//       "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
//       "Sikkim": ["Gangtok", "Namchi", "Mangan"],
//       "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
//       "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
//       "Tripura": ["Agartala", "Udaipur", "Dharmanagar"],
//       "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"],
//       "Uttarakhand": ["Dehradun", "Haridwar", "Nainital"],
//       "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
//     };
    
//     const handleStateChange = (event) => {
//       const state = event.target.value;
//       setSelectedState(state);
//       setSelectedCity(''); // Clear city when state changes
//     };
  
//     const handleCityChange = (event) => {
//       setSelectedCity(event.target.value);
//     };
//   const handleSubmit = (e) => {

//   }
//   return (
//     <>
//       <div className="container-fluid loginpage">
//         <div className="container">
//           <div className="row fluid">
//             <div className="col-md-5 sm-12">
//               <img src={Sumago} className='img-fluid rounded-circle' style={{height:"340px"}}  alt="" />
//             </div>
//             <div className="col-md-7 sm-12">
//               <form class="row g-3 " onSubmit={handleSubmit}>
//                 <div className='d-flex justify-content-center'>
//                   <div class="col-md-5">
//                   {/* <label for="validationDefault01" class="form-label">First name</label> */}
//                   <input type="text" class="form-control" id="validationDefault01" placeholder='First name' value={fname} onChange={(e) => setFname(e.target.value)} className='border border-dark border-2 bg-transparent text-dark border-top-0 border-start-0 border-end-0' required />
//                 </div>
//                 <div class="col-md-5">
//                   {/* <label for="validationDefault02" class="form-label">Last name</label> */}
//                   <input type="text" class="form-control" id="validationDefault02" placeholder='Last name' value={lname} onChange={(e) => setLname(e.target.value)} className='border border-dark border-2 bg-transparent text-dark border-top-0 border-start-0 border-end-0' required />
//                 </div>
//                 </div>
//                 <div className='d-flex justify-content-center'>
                
//                 <div class="col-md-5">
//                   {/* <label for="validationDefaultUsername" class="form-label">Username</label> */}
//                   {/* <div class="input-group"> */}
//                     {/* <span class="input-group-text" id="inputGroupPrQepend2">@</span> */}
//                     <input type="email" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-dark border-2 bg-transparent text-dark border-top-0 border-start-0 border-end-0' required />
//                   {/* </div> */}
//                 </div>
//                 <div class="col-md-5">
//                   {/* <label for="validationDefault05" class="form-label">Password</label> */}
//                   <input type="password" class="form-control" id="validationDefault05" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-dark border-2 bg-transparent text-dark border-top-0 border-start-0 border-end-0' required />
//                 </div>
//                 </div>
//                 {/* <div class="col-md-6">
//                   <label for="validationDefault03" class="form-label">City</label>
//                   <input type="text" class="form-control" id="validationDefault03" required />
//                 </div>*/}
//                 <div class="col-md-7">
//                   {/* <label for="validationDefault04" class="form-label">Position</label> */}
//                   <select class="form-select" id="validationDefault04" required>
//                     <option selected disabled value="">Position</option>
//                     <option value="HR">Human resource HR</option>
//                     <option value="head">Head of employee</option>
//                     <option value="User">Employee</option>
//                   </select>
//                 </div> 
//                 <div className=' col-md-7 border border-dark border-2 bg-transparent text-dark border-top-0 border-start-0 border-end-0'>
//       <StateDropdown
//         states={states}
//         selectedState={selectedState}
//         handleStateChange={handleStateChange}
//       />
//       <CityDropdown
//         cities={cities[selectedState] || []}
//         selectedCity={selectedCity}
//         handleCityChange={handleCityChange}
//       />
//     </div>
                
//                 <div className='col-md-12'>Already have an Account Login</div>
//                 <div class="col-md-12">
//                   <button class="btn btn-primary" type="submit">Submit</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }



import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Register() {
    
        
    
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
const handlesubmit = (e) =>{
    e.preventDefault();
    const xyz = {fname,lname,email,password}
    axios.post('http://localhost:5000/hrms/add',xyz)
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

                {/* <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Indian State
  </a>

  <ul class="dropdown-menu scrollable-menu">
    <li><a class="dropdown-item" href="#">Andaman and Nicobar Islands</a></li>
    <li><a class="dropdown-item" href="#">Andhra Pradesh</a></li>
    <li><a class="dropdown-item" href="#">Arunachal Pradesh</a></li>
    <li><a class="dropdown-item" href="#">Assam</a></li>
    <li><a class="dropdown-item" href="#">Bihar</a></li>
    <li><a class="dropdown-item" href="#">Chandigarh</a></li>
    <li><a class="dropdown-item" href="#">Chhattisgarh</a></li>
    <li><a class="dropdown-item" href="#">Dadra and Nagar Haveli</a></li>
    <li><a class="dropdown-item" href="#">Daman and Diu</a></li>
    <li><a class="dropdown-item" href="#">Delhi</a></li>
    <li><a class="dropdown-item" href="#">Goa</a></li>
    <li><a class="dropdown-item" href="#">Gujarat</a></li>
    <li><a class="dropdown-item" href="#">Haryana</a></li>
    <li><a class= "dropdown-item" href="#">Himachal Pradesh</a></li>
    <li><a class="dropdown-item" href="#">Jharkhand</a></li>
    <li><a class="dropdown-item" href="#">Karnataka</a></li>
    <li><a class="dropdown-item" href="#">Kerala</a></li>
    <li><a class="dropdown-item" href="#">Lakshadweep</a></li>
    <li><a class="dropdown-item" href="#">Madhya Pradesh</a></li>
    <li><a class="dropdown-item" href="#">Maharashtra</a></li>
    <li><a class="dropdown-item" href="#">Manipur</a></li>
    <li><a class="dropdown-item" href="#">Meghalaya</a></li>
    <li><a class="dropdown-item" href="#">Mizoram</a></li>
    <li><a class="dropdown-item" href="#">Nagaland</a></li>
    <li><a class="dropdown-item" href="#">Odisha</a></li>
    <li><a class="dropdown-item" href="#">Puducherry</a></li>
    <li><a class="dropdown-item" href="#">Punjab</a></li>
    <li><a class="dropdown-item" href="#">Rajasthan</a></li>
    <li><a class="dropdown-item" href="#">Sikkim</a></li>
    <li><a class="dropdown-item" href="#">Tamil Nadu</a></li>
    <li><a class="dropdown-item" href="#">Telangana</a></li>
    <li><a class="dropdown-item" href="#">Tripura</a></li>
    <li><a class="dropdown-item" href="#">Uttar Pradesh</a></li>
    <li><a class="dropdown-item" href="#">Uttarakhand</a></li>
    <li><a class="dropdown-item" href="#">West Bengal</a></li>
  </ul>
</div> */}

                
                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Register
                </button>
                </form>
                <p className='mt-3'>Already Have an Account
                <Link to="/login_by_admin">
                    Login
                </Link></p>
            
        </div>
    </div>
    </>
  )
}