import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Secondcomp() {

    const[firstname,setFname]=useState("")
    const[lastname,setLname]=useState("")
    const[phoneno,setphnno]=useState("")
    const[email,setemail]=useState("")
    const[gender,setgender]=useState("")
    
    const navigate=useNavigate()
    
    // Old way: axios.post('http://localhost:3000/students', data)

// New way:
const API_URL = "https://69b12b8aadac80b427c435fb.mockapi.io/students";

const submithandler = (e) => {

  e.preventDefault();

  axios.post(API_URL, {
    firstname: firstname,
    lastname: lastname,
    phoneno: phoneno,
    email: email,
    gender: gender,
  })
  .then(() => {
    alert("Data saved to the cloud!");
    navigate('/'); // Go back to the main list
  })
  .catch(err => console.error("Error saving data:", err));
        
    }
    return ( 
        <>
        <Navbar/>
       

  <div class="container mt-5">
     <form onSubmit={submithandler}>
  <div class="row justify-content-center">
    <div class="col-md-6 col-sm-12">

      <div class="card shadow">
        <div class="card-header bg-dark text-white text-center">
          <h4>Student Details</h4>
        </div>

        <div class="card-body">

          <h5 class="text-center mb-4">Add Student Details</h5>

          <div class="mb-3">
            <label class="form-label">Firstname</label>
            <input type="text" class="form-control" onChange={e=>{setFname(e.target.value)}} />
          </div>

          <div class="mb-3">
            <label class="form-label">Lastname</label>
            <input type="text" class="form-control" onChange={e=>{setLname(e.target.value)}}/>
          </div>

          <div class="mb-3">
            <label class="form-label">Phone No</label>
            <input type="text" class="form-control" onChange={e=>{setphnno(e.target.value)}}/>
          </div>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" onChange={e=>{setemail(e.target.value)}}/>
          </div>

          <div class="mb-3">
            <label class="form-label">Gender</label>
            <select class="form-control" onChange={e=>{setgender(e.target.value)}}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <button class="btn btn-info w-100">Submit</button>

        </div>
      </div>

    </div>
  </div>
  </form>
</div>
  
        </>
     );
}

export default Secondcomp;