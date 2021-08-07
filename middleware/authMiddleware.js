import Jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const requireAuth = (req, res, next) => {
  const token = req.body.token;
  if (token) {
    Jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, decodedToken) => {
        // console.log(decodedToken.value);
        if (err) {
          console.log(err);
        } else {
          await User.findOne({ username: decodedToken.value }, (e, doc) => {
            if (e) {
              return res.json({ error: e }).status(401);
            } else {
              console.log({ sexy: decodedToken, doc: doc });
              res.json({ Token: decodedToken, doc: doc });
            }
          });
        }
      }
    );
  } else {
    next();
  }
};

//check current user

export const checkUser = (req, res, next) => {
  const token = req.body.token;

  if (token) {
    Jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, decodedToken) => {
        if (err) {
          console.log(err);
          res.locals.user = null;
          next();
        } else {
          console.log(decodedToken);
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      }
    );
  } else {
    res.locals.user = null;
    next();
  }
};

export const cartRequireAuth = (req, res, next) => {
  const token = req.body.token;
  if (token) {
    Jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, decodedToken) => {
        // console.log(decodedToken.value);
        if (err) {
          console.log(err);
        } else {
          await User.findOne({ username: decodedToken.value }, (e, doc) => {
            if (e) {
              console.log({ auth: e });
              return res.json({ error: e }).status(401);
            } else {
              // res.json({ Token: decodedToken, doc: doc.cart });
              req.username = decodedToken.value;
              next();
            }
          });
        }
      }
    );
  } else {
    next();
  }
};
