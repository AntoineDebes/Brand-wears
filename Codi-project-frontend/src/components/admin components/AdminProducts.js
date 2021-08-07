import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [setError] = useState(false);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/product`)
      .then((res) => {
        setProducts(res.data);
        console.log(res);
      })
      .catch((error) => {
        setError({ message: error.message });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Link to="/admin/add-product">
        <button className="add--user">
          {" "}
          <i class="fas fa-plus"></i> New Product
        </button>
      </Link>
      {products.map((item) => {
        return (
          <>
            <div className="admin--product--view">
              <img src={item.image} alt="" />
              <div>
                <ul>
                  <li>{item.name}</li>
                  <li>{item.sex}</li>
                  <li> ${item.price}</li>
                  <li>
                    {" "}
                    <Rating rating={item.rating} />
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li> {item.size}</li>
                  <li> {item.brand}</li>
                  <li> {item.category}</li>
                  <li>{item.description}</li>
                </ul>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
