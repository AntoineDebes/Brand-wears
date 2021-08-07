import React from "react";

export default function CollectionTwo(props) {
  return (
    <div className="collection_two--container">
      <div className="collections_image_T">
        <img src={props.image} alt="" />
      </div>

      <div className="collections_text_T">
        <span className="collections_for_T">ACCESSORIES</span>
      </div>
    </div>
  );
}
