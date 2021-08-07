import React from "react";
import PantsCard from "../../components/categories/Pants";
import ShopHeader from "../../components/card/shopheader";
import Filter from "../../components/card/filter";

export default function Pants(props) {
  return (
    <>
      <div className="shopmen_section">
       <ShopHeader title="Shoes" />
        <div className="shop_men--container">
          <Filter />
          <div className="products_container">
            <PantsCard />
          </div>
        </div>
      </div>
    </>
  );
}