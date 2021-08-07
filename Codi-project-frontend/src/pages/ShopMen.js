import React from "react";
import MenCard from "../components/card/MenCard";
import ShopHeader from "../components/card/shopheader";
import Filter from "../components/card/filter";

export default function ShopMen(props) {
  return (
    <>
      <div className="shopmen_section">
       <ShopHeader title="Men" />
        <div className="shop_men--container">
          <Filter />
          <div className="products_container">
            <MenCard />
          </div>
        </div>
      </div>
    </>
  );
}
