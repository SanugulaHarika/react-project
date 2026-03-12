import { useNavigate, useParams } from "react-router";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

   
function Update() {
  const { mid } = useParams();
  const navigation = useNavigate(); // Move this up too

  // 1. Define State First
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [phoneno, setphnno] = useState("");
  const [email, setemail] = useState("");
  const [gender,setgender] = useState("");

  // 2. Then use useEffect to fetch data
  useEffect(() => {
    axios.get("https://69b12b8aadac80b427c435fb.mockapi.io/students/" + mid)
      .then((res) => {
        setFname(res.data.firstname);
        setLname(res.data.lastname);
        setphnno(res.data.phoneno);
        setemail(res.data.email);
        setgender(res.data.gender);
      });
  }, [mid]); 

  // 3. Then your handler
  const submithandler = (e) => {
    e.preventDefault(); // Don't forget this to stop the '?' in URL
    axios.put("https://69b12b8aadac80b427c435fb.mockapi.io/students/" + mid, {firstname, lastname, phoneno, email,gender})
      .then(() => {
        alert("Successfully updated");
        navigation("/");
      });
  };

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
            <input type="text" class="form-control" onChange={e=>{setFname(e.target.value)}} defaultValue={firstname}/>
          </div>

          <div class="mb-3">
            <label class="form-label">Lastname</label>
            <input type="text" class="form-control" onChange={e=>{setLname(e.target.value)}} defaultValue={lastname}/>
          </div>

          <div class="mb-3">
            <label class="form-label">Phone No</label>
            <input type="text" class="form-control" onChange={e=>{setphnno(e.target.value)}} defaultValue={phoneno}/>
          </div>

          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" onChange={e=>{setemail(e.target.value)}} defaultValue={email}/>
          </div>

          <div class="mb-3">
            <label class="form-label">Gender</label>
            <select class="form-control" onChange={e=>{setgender(e.target.value)}} defaultValue={gender}>
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
    </> );
}

export default Update;