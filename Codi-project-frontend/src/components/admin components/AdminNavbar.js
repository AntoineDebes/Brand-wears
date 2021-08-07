import React from 'react'
import { Link } from 'react-router-dom'


export default function AdminNavbar() {


    return (
        <div className="admin--navbar">
                <h1 className="admin--header">
                    Admin Dashboard
                </h1>
                <div className="admin--nav-links">
                    <ul className="nav-links">
                        <Link to="/admin/home" className="link">
                        <li>Home</li>
                        </Link>
                        <Link to="/admin/users" className="link">
                        <li>Users</li>
                        </Link>
                        <Link to="/admin/products" className="link">
                        <li>Products</li>
                        </Link>
                    </ul>
                </div>
                <div className="admin--signin">
                    <button className="admin--signin-btn">
                        Signin
                    </button>
                </div>
            </div>
    )
}
