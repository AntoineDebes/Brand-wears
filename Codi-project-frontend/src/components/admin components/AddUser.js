import React, { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    admin: "",
  });

  const { name, username, email, password, address, phone, admin } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="user--form--container">
      <form
        className="user--form"
        action={`${process.env.REACT_APP_API_URL}/user/add-user`}
        method="POST"
      >
        <div className="form--label--input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="example: Mhamad Safa"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="example: Mhamad08"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example: mhamad@gmail.com"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="User phone number"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="address">Address</label>
          <input
            type="address"
            name="address"
            id="address"
            placeholder="User address"
            value={address}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <label htmlFor="admin">Admin</label>
          <input
            type="text"
            name="admin"
            id="admin"
            placeholder=""
            value={admin}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form--label--input">
          <button type="submit" className="form--btn">
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}
