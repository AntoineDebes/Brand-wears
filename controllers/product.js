import expressAsyncHandler from "express-async-handler";
import Product from "../models/product.model.js";

export const getProducts = expressAsyncHandler(async (req, res) => {
  await Product.find({}, (e, doc) => {
    // console.log(doc)
    if (doc.length === 0 || e) {
      console.log({ e });
      return res.json({ message: "123" });
    } else {
      // console.log({ doc });
      return res.send(doc);
    }
  });
});


export const addProducts = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    sex: req.body.sex,
    category: req.body.category,
    brand: req.body.brand,
    price: req.body.price,
    description: req.body.description,
    rating: req.body.rating,
    stock: req.body.stock,
    size: req.body.size,
    numReviews : req.body.numReviews,
    image: req.body.image
  });

  product
    .save()
    .then((data) => {
      res.send({message : data})
     
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message
      })
    });
};




