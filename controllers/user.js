import expressAsyncHandler from "express-async-handler";
import express from "express";
import User from "../models/user.model.js";
import { jwtCreate } from "../middleware/jwt.js";
import bcrypt from "bcrypt";
import { hashPassword } from "./bcrypt.js";

export const getUser = expressAsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  User.find({ username: username }, async (e, doc) => {
    if (doc.length === 0 || e) {
      return res.status(400).json(e);
    } else if (await bcrypt.compare(password, doc[0].password)) {
      const token = jwtCreate(username);
      console.log({ doc });
      return res.status(200).json({ doc, token });
    } else {
      return res.json({ message: "wrong password" }).status(401);
    }
  });
});

export const addUser = expressAsyncHandler(async (req, res) => {
  console.log("here");
  let { name, username, password, email, address, phone } = req.body;

  await User.insertMany(
    {
      name: name,
      username: username,
      password: await hashPassword(password),
      email: email,
      isAdmin: false,
      address: address,
      phone: phone,
    },
    (err, docs) => {
      if (err) {
        let e = err.writeErrors[0].errmsg.split(":")[3].split(" ")[2];
        return res.json({ error: e }).status(400);
      } else {
        const token = jwtCreate(docs[0].username);
        console.log("working");
        return res.status(200).json({
          success: true,
          message: "Sign-up successfull",
          data: docs,
          token,
        });
      }
    }
  );
});

export const showUsers = expressAsyncHandler(async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user });
});

export const updateUser = (req, res) => {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.send(404).send({ message: "cannot update this user" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error update",
      });
    });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;

  User.findOneAndDelete({ _id: id })
    .then((result) => {
      return res.redirect("http://localhost:3000/admin");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Cannot add empty fields",
    });
    return;
  }
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin,
    address: req.body.address,
  });

  user
    .save(user)
    .then((data) => {
      // res.send(data)
      return res.redirect("http://localhost:3000/admin/add-user");
    })
    .catch((err) => {
      // res.status(500).send({
      //   message: err.message
      // })
      res.redirect("http://localhost:3000/admin/add-user/error");
    });
};
