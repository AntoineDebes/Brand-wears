import React from "react";

export default function CollectionThree(props) {
  return (
      <div className="collection_three--container">
        <div className="collections_image_T">
          <img src={props.shoes} alt="" />
        </div>

        <div className="collections_text_T">
          <span className="collections_for_T">SHOES</span>
        </div>
      </div>
  );
}
