import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [setError] = useState(false);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/user/users")
      .then((res) => {
        setUsers(res.data.user);
        console.log(res.data.user);
      })
      .catch((error) => {
        setError({ message: error.message });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  
  

  const deleteUser = (id) =>{
  
    const endpoint = `http://localhost:4000/user/${id}`;

    fetch(endpoint, {
      method:"DELETE"
    })
    .then(data => console.log(data))
    .catch(err => {
     setError({
       message : err.message
     })
    })
    window.location.reload()
  }

  return (
      <>
      <Link to="/admin/add-user">
      <button className="add--user"> <i class="fas fa-plus"></i> New User</button>
      </Link>
     
    <table className="user--page">
        <tr className="table--header">
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>

      {users.map((item) => {
        return (
         <tr className="table--data">
             <td>{item.name}</td>
             <td>{item.username}</td>
             <td>{item.email}</td>
             <td>{item.admin}</td>
             <td> <Link to={`/admin/update-user/${item._id}`} className="link"><i class="fas fa-pen"></i></Link> </td>
             <td><Link onClick={() => deleteUser(item._id)} to="/admin/users" className="link"><i class="fas fa-trash-alt"></i></Link></td>
         </tr>
        );
      })}
    </table>
    </>
  );
}
