import React from "react";
import ShopHeader from "../../components/card/shopheader";
import Filter from "../../components/card/filter";
import AccessoriesCard from "../../components/categories/Accessories";

export default function Accessories(props) {
  return (
    <>
      <div className="shopmen_section">
       <ShopHeader title="Shoes" />
        <div className="shop_men--container">
          <Filter />
          <div className="products_container">
            <AccessoriesCard/>
          </div>
        </div>
      </div>
    </>
  );
}