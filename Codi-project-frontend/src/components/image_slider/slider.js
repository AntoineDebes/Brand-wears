import React, { useState } from "react";
import imagesData from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Slider() {
  const [image, setImage] = useState(0);
  const length = imagesData.length;

  const nextImage = () => {
    setImage(image === length - 1 ? 0 : image + 1);
  };

  const prevImage = () => {
    setImage(image === 0 ? length - 1 : image - 1);
  };
  return (
    <>
      {/* Image slider section */}
      <div className="main__image-slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevImage} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextImage} />
        {imagesData.map((item, index) => {
          return (
            <div
              className={index === image ? "slide active" : "slide"}
              key={index}
            >
              {index === image && (
                <img
                  className="main__image-slider--image"
                  src={item.image}
                  alt=""
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Slider;
