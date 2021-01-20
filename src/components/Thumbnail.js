import React from "react";
import "./Thumbnail.css";

function Thumbnail(props) {
  return (
    <div>
      <div className="thumbnail">
        <img
          className="border border-white"
          src={props.pic}
          alt=""
          width="80px"
          height="80px"
        ></img>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Thumbnail;
