import React from "react";
import "./Thumbnail.css";

function Photo(props) {
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
      </div>
    </div>
  );
}

export default Photo;
