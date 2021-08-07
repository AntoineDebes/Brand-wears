import { Router } from "express";
import { requireAuth, cartRequireAuth } from "../middleware/authMiddleware.js";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
  showUsers,
  createUser,
} from "../controllers/user.js";
import { updateUserCart, removeUserCart } from "../controllers/cart.js";

const userRouter = Router();

// userRouter.get("/cart", requireAuth);

userRouter.post("/login", requireAuth, getUser);

userRouter.get("/users", showUsers);

userRouter.post("/add-user", createUser);

userRouter.post("/add", addUser);

// userRouter.put("/:id", requireAuth, updateUser);

userRouter.put("/cart", cartRequireAuth, updateUserCart);

userRouter.put("/cartremove", cartRequireAuth, removeUserCart);

userRouter.delete("/:id", deleteUser);

export default userRouter;
