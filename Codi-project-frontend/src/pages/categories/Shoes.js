import React from "react";
import ShoesCard from "../../components/categories/Shoes";
import ShopHeader from "../../components/card/shopheader";
import Filter from "../../components/card/filter";

export default function Shoes(props) {
  return (
    <>
      <div className="shopmen_section">
       <ShopHeader title="Shoes" />
        <div className="shop_men--container">
          <Filter />
          <div className="products_container">
            <ShoesCard />
          </div>
        </div>
      </div>
    </>
  );
}