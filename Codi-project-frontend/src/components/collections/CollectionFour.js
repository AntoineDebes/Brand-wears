import React from "react";

export default function CollectionFour(props) {
  return (
    <div className="collection_four--container">
      <div className="collections_image">
        <img src={props.Four} alt="" />
      </div>

      <div className="collections_text">
        <span className="collections_title"> COLLECTION</span>
        <span className="collections_for">MEN'S OUTFITS</span>
      </div>
    </div>
  );
}
