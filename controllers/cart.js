import expressAsyncHandler from "express-async-handler";
import User from "../models/user.model.js";

export const removeUserCart = expressAsyncHandler(async (req, res) => {
  const user = req.username;
  console.log({ username: user });

  console.log(req.body);

  let { product_id, quantity } = req.body;
  console.log(product_id, quantity);

  await User.updateMany(
    { username: user },
    {
      $pull: {
        cart: {
          product_id: product_id,
        },
      },
    },
    (e, doc) => {
      console.log({ doc: doc });
      if (e) {
        console.log(e);
        res.status(401);
      } else {
        console.log("delete worked");
        res.json(doc);
      }
    }
  );
});

export const updateUserCart = expressAsyncHandler(async (req, res) => {
  const user = req.username;
  console.log(user);
  console.log(req.body);

  let { product_id, quantity } = req.body;
  console.log(product_id, quantity, user);

  const pushCart = () => {
    User.findOneAndUpdate(
      { username: user },
      {
        $push: {
          cart: {
            product_id: product_id,
            quantity: quantity,
          },
        },
      },
      (e, doc) => {
        console.log({ doc: doc });
        if (e) {
          console.log({ function: "didnt work" });
          res.json(e);
        } else {
          console.log({ function: "worked" });
          res.json(doc);
        }
      }
    );
  };

  await User.updateMany(
    { username: user },
    {
      $set: {
        "cart.$[el]": {
          product_id: product_id,
          quantity: quantity,
        },
      },
    },
    { arrayFilters: [{ "el.product_id": product_id }] },
    (e, doc) => {
      console.log({ doc: doc });
      if (e) {
        console.log(e);
        res.status(401);
      } else if (doc.nModified === 0) {
        console.log("didnt work");
        pushCart();
      } else {
        console.log("worked");
        res.json(doc);
      }
    }
  );
});

export const addUserCart = expressAsyncHandler(async (req, res) => {
  const user = req.username;

  let { product_id, quantity } = req.body.cart[0];

  await User.find({ username: user }).updateMany(
    { "cart.product_id": product_id },
    {
      $set: {
        "cart.$.product_id": product_id,
        "cart.$.quantity": quantity,
      },
    },
    (e, doc) => {
      console.log({ doc: doc });
      if (e) {
        console.log({ e });
        res.json(e);
      } else {
        res.json(doc);
      }
    }
  );
});
