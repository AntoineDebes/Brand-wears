import React from "react";
import ShirtCard from "../../components/categories/Shirts";
import ShopHeader from "../../components/card/shopheader";
import Filter from "../../components/card/filter";

export default function Shirt(props) {
  return (
    <>
      <div className="shopmen_section">
       <ShopHeader title="Shoes" />
        <div className="shop_men--container">
          <Filter />
          <div className="products_container">
           <ShirtCard />
          </div>
        </div>
      </div>
    </>
  );
}