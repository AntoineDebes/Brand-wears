import React from "react";
import "./Admin.css";
import AdminNavbar from "../../components/admin components/AdminNavbar";
import AdminProducts from "../../components/admin components/AdminProducts";
import AdminUsers from "../../components/admin components/AdminUsers";
import { BrowserRouter as  Route } from "react-router-dom";
import AddUser from "../../components/admin components/AddUser";
import UpdateUser from "../../components/admin components/UpdateUser";
import AddProduct from "../../components/admin components/AddProduct";

export default function Admin() {
  return (
    
    <div className="admin--container">
     
          <AdminNavbar />
      
        <Route path="/admin/products">
        <AdminProducts />
        </Route>
        <Route path="/admin/add-product">
        <AddProduct />
        </Route>
        <Route path="/admin/users">
          <AdminUsers />
        </Route>
        <Route path="/admin/add-user">
          <AddUser />
        </Route>
        <Route path="/admin/update-user/:id" >
          <UpdateUser />
        </Route>
    </div>
  );
}
