import React from "react";
import "./Homepage.css";
import Slider from "../components/image_slider/slider";
import Collections from "../components/collections/Collections";

function Homepage() {
  return (
    <>
      <main className="main">
        <Slider /> <br />
        <Collections />
      </main>
    </>
  );
}

export default Homepage;
