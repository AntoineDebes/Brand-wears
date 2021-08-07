import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  product_id: {
    type: String,
    unique: true,
  },
  quantity: {
    type: Number,
  },
});

const Cart = cartSchema;

export default Cart;
