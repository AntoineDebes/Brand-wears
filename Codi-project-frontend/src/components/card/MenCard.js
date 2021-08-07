import React, { useState } from "react";
import "../card/Card.css";
import AllProducts from "./AllProducts";
import MessageBox from "../loading/MessageBox";
import Loading from "../loading/Loading";
import { ProductContext } from "../../contexts/ProductContext";

export default function MenCard() {
  const { value1, value3 } = React.useContext(ProductContext);
  const [products] = value1
  const [error] = useState(false);
  const [loading] = value3;

  return (
    
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox error={error}  />
      ) : (
        <>
          {products && products.map((product) => {
            if (product.sex === "male") {
              return <AllProducts product={product} />;
            }
            return null;
          })}
        </>
      )}
    </>
  );
}
