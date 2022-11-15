import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'



function User() {
  const [users, setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect( () => {
     fetchData()
  }, [])


let fetchData  = async () => {
  try {
    setIsLoading(true)
    
   const users = await axios.get("https://636bc9417f47ef51e13a6884.mockapi.io/user")
   console.log(users)
   setUsers(users.data)
   setIsLoading(false)
} catch(error) {
  alert("Error")
}
}


let deleteUser = async (user1) =>{
  try{
    setIsLoading(true)
    const user = await axios.delete(`https://635fff92ca0fe3c21aaa41e9.mockapi.io/user/${user1}`)
   alert("User Deleted Successfully")
   fetchData()
   setIsLoading(false)
  }
  catch (error){
    alert("User Can't Deleted")
  }
}






  return (

    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User</h1>
        <Link
          to={"/user_create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create User
        </Link>
      </div>

      {
        isLoading ? <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div> :
        <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Action</th>
                </tr>
              </tfoot>

              <tbody>
                {users.map((user) => {
                  return <tr >
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.country}</td>
                      <td>{user.state}</td>
                      <td>{user.city}</td>
                      <td>{user.gender}</td>
                      <td>{user.phone}</td>
                      <td>{user.dob}</td>
                       
                      <td>
                       
                        <Link to={`/user_create/${user.id}`} className="btn btn-warning mt-1">
                          Create
                        </Link>
                        <Link to={`/view/${user.id}`} className="btn btn-info mt-1">
                          Profile
                        </Link>
                        <Link to={`/edit/${user.id}`} className="btn btn-primary mt-1">
                          Edit
                        </Link>
                        <button onClick={() => deleteUser(user.id)}
                         className="btn btn-danger mt-1 ">Delete</button>
                        
                      </td>
                    </tr>
                  
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      } 
    </div>
  );
}

export default User;
