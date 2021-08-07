import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import MessageBox from "../components/loading/MessageBox";
import Loading from "../components/loading/Loading";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setCart(props.cartInfos);
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/product`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError({ message: error.message });
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, [props.cartInfos]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error.message} />
      ) : (
        <ProductContext.Provider
          value={{
            value1: [products, setProducts],
            value2: [cart, setCart],
            value3: [loading, setLoading],
          }}
        >
          {props.children}
        </ProductContext.Provider>
      )}
    </>
  );
};
