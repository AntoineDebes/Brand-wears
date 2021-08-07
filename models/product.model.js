import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },

  sex: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  stock: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  size: {
    type: String,
    required: true,
  },

  numReviews: {
    type: Number,
  }

 
});

const Product = mongoose.model("Product", productSchema);

export default Product
