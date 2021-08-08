import React from "react";
import "./Cover.css";
import cover from "../../assets/cover.png";

function Cover(props) {
  return (
    <div className="cover col-md">
      <img src={cover} alt="adobe" className="left-side" />
    </div>
  );
}

export default Cover;
