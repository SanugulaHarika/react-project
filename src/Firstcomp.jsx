import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Update from "./Update";
import { useNavigate } from "react-router";

function Firstcomp() {

    const[details,setdetails]=useState([])
    const navigation = useNavigate()

    useEffect(()=>{
    axios.get("https://69b12b8aadac80b427c435fb.mockapi.io/students").then((res)=>{
        setdetails(res.data)
    })
    },[])

  const remove = (id) => {
  if (window.confirm("are you sure to delete")) {
    axios.delete(`https://69b12b8aadac80b427c435fb.mockapi.io/students/${id}`)
      .then((res) => {
        alert("Successfully deleted")
      })
  }
}

    const update = (mid)=>{
       navigation(`/update/${mid}`);
    }

    return (  
    <>
    <Navbar/>
    <div className="container mt-4">
      <h1 className="text-center py-4">Student details page</h1>
    </div>
    <div className="table-responsive">
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">phoneno</th>
      <th scope="col">email</th>
      <th scope="col pe-5 me-5">Gender</th>
      <th scope="col pe-5 me-5">actions</th>
    </tr>
  </thead>
  <tbody>
    {details.map((item)=>{
        return(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.phoneno}</td>
                <td class="email-column">{item.email}</td> 
                <td>{item.gender}</td>
                <td>
                  <button className="btn btn-success me-1" onClick={()=>update(item.id)}>Update</button>
                  <button className="btn btn-danger" onClick={()=>remove(item.id)}>Delete</button>
                </td>
            </tr>
        )
    })}
  </tbody>
</table>
</div>
    </>
    );
}


export default Firstcomp;
