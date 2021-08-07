import React from "react";
import ShopHeader from "../../components/card/shopheader";
import Filter from "../../components/card/filter";
import ShortsCard from "../../components/categories/Shorts";

export default function Shorts(props) {
  return (
    <>
      <div className="shopmen_section">
       <ShopHeader title="Shoes" />
        <div className="shop_men--container">
          <Filter />
          <div className="products_container">
            <ShortsCard />
          </div>
        </div>
      </div>
    </>
  );
}