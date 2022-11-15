import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const params = useParams()
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
   fetchData()
  }, []);
  let fetchData = async () =>{
    try{
      setLoading(true)
      const user = await axios.get(`https://636bc9417f47ef51e13a6884.mockapi.io/user/${params.id}`)
      setUsers(user.data)
      setLoading(false)
      
    }
    catch (error){
      alert("Error")
    }
  }

  return (
    <div className="container-fluid">
      
      <div className="row p-5">
        <h1>Id:{users.id}</h1> <hr/>
        <div className="col-6">
           <h5>Username:{users.name}</h5> 
        </div>
        <div className="col-6">
        <h5>Email:{users.email}</h5> 
        </div>
        <div className="col-6">
        <h5>Country:{users.country}</h5>
        </div>
        <div className="col-6">
        <h5>State:{users.state}</h5>
        </div>
        <div className="col-6">
        <h5>City:{users.city}</h5>
        </div>
        <div className="col-6">
        <h5>Phone:{users.phone}</h5>
        </div>
        <div className="col-6">
        <h5>DOB:{users.dob}</h5> 
        </div>
        <div className="col-6">
        <h5>Gender:{users.gender}</h5>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;