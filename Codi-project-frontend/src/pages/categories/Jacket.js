import React from "react";
import ShopHeader from "../../components/card/shopheader";
import Filter from "../../components/card/filter";
import JacketCard from "../../components/categories/Jackets";

export default function Jackets(props) {
  return (
    <>
      <div className="shopmen_section">
       <ShopHeader title="Shoes" />
        <div className="shop_men--container">
          <Filter />
          <div className="products_container">
            <JacketCard />
          </div>
        </div>
      </div>
    </>
  );
}