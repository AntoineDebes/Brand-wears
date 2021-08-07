import React from "react";

export default function CollectionOne(props) {
  return (
      <div className="collection_one--container">
        <div className="collections_image">
          <img src={props.image} alt="" />
        </div>

        <div className="collections_text">
          <span className="collections_title"> COLLECTION</span>
          <span className="collections_for">JACKETS FOR WOMEN</span>
        </div>
      </div>
  );
}
