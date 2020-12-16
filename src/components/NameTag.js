import React, { useState } from "react";

function NameTag(props) {
  const [likes, setLikes] = useState(0);
  const setLikesHandler = () => {
    setLikes(likes + 1);
  };
  const [editable, setEditable] = useState(false);

  function setEditableHandler() {
    setEditable(true);
  }
  function keyPressHandler(e) {
    if (e.key === "Enter") {
      setEditable(!editable);
    }
  }

  return (
    <div>
      {editable ? (
        <input
          type="text"
          defaultValue={props.children}
          onKeyPress={(e) => {
            keyPressHandler(e);
            props.onKeyPress(e, props.index);
          }}
        />
      ) : (
        <h3 className="name" onDoubleClick={setEditableHandler}>
          {props.children}
        </h3>
      )}
      <img
        className="rounded-circle"
        src={props.pic}
        alt=""
        width="100px"
        height="100px"
      ></img>
      <label>Likes {likes}</label>
      <br />
      <button
        className="btn btn-primary"
        name={props.children}
        onClick={(e) => {
          setLikesHandler();
          props.onClick(e);
        }}
      >
        Like
      </button>
    </div>
  );
}

export default NameTag;
