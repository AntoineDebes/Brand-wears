import React, { useState } from "react";
import { useParams } from "react-router";
import "./Product.css";
import ShopHeader from "../card/shopheader";
import Rating from "../rating/Rating";
import Loading from "../loading/Loading";
import MessageBox from "../loading/MessageBox";
import { ProductContext } from "../../contexts/ProductContext";
import axios from "axios";

export default function Product(props) {
  const { id } = useParams();
  const { value1, value2, value3 } = React.useContext(ProductContext);
  const [cart, setCart] = value2;
  const [products] = value1;
  const [error] = useState(false);
  const [loading] = value3;

  const addToCart = (product) => {
    let localToken = localStorage.getItem("token");
    console.log(cart, product._id);
    let letItBe = false;
    cart.map((item) => {
      if (item.product_id.match(product._id)) {
        letItBe = true;
        return letItBe;
      }
    });
    if (letItBe === true) {
      console.log("working");
      return setCart([...cart]);
    } else {
      setCart([...cart, { product_id: product._id }]);
      axios
        .put(`${process.env.REACT_APP_API_URL}/user/cart`, {
          token: localToken,
          product_id: product._id,
          quantity: 1,
        })
        .then((res) => {
          console.log({ putResponse: res });
        })
        .catch();
    }
  };

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error} />
      ) : (
        <>
          {products &&
            products
              .filter((item) => item._id === id)
              .map((item, index) => (
                <>
                  <ShopHeader title={item.category} />
                  <div className="product_screen--container">
                    <div className="product_screen--image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="product_screen--details">
                      <ul className="screen--details">
                        <li> {item.name}</li>
                        <li>
                          {" "}
                          <span>{item.brand}</span> Brand
                        </li>
                        <li>{item.description}</li>
                        <li className="reviews">
                          <span>
                            <Rating rating={item.rating} />
                          </span>
                          <span className="num">
                            {" "}
                            {item.numReviews} reviews
                          </span>
                        </li>
                        <li>
                          <span>Price :</span>
                          <span className="price">
                            {formatter.format(item.price)}
                          </span>
                        </li>
                        <li>
                          <div>Status :</div>
                          <div>
                            {item.stock > 0 ? (
                              <span className="success"> In Stock</span>
                            ) : (
                              <span className="fail">Unavailable</span>
                            )}
                          </div>
                        </li>

                        {item.stock > 0 ? (
                          <li className="add_to_cart_li">
                            <div>
                              <button
                                onClick={() => addToCart(item)}
                                className="add_to_cart_btn"
                              >
                                Add to <i className="far fa-shopping-cart"></i>
                              </button>
                            </div>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </>
              ))}
        </>
      )}
    </>
  );
}
