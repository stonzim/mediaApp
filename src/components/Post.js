import React, { useState, useEffect } from "react";

import "./Post.css";

function Post(props) {
  const date = new Date(props.date);
  const [likes, setLikes] = useState(props.likes);
  const [commentBool, setCommentBool] = useState(false);
  const [reply, setReply] = useState();

  useEffect(() => {
    if (props.reply === 0) setReply(false);
    else setReply(true);
  }, [props.reply]);

  function addLike() {
    setLikes(likes + 1);
    props.function();
  }

  function toggle() {
    setCommentBool(!commentBool);
  }

  return (
    <div className="wrapper">
      <div className="header">
        <div className="profile-pic">
          <img
            className="border border-white"
            src={props.pic}
            alt=""
            width="50px"
            height="50px"
          ></img>
        </div>
        <div className="username">
          {props.name}
          <br />
          {date.toLocaleDateString()}
        </div>
      </div>

      <div className="post">
        {props.post}
        <img
          className="like-icon"
          src="http://localhost:3001/images/heart.png"
          alt=""
          width="15px"
          height="15px"
        />
        <span className="like-count">{likes}</span>
      </div>
      <hr />
      <div>
        <div className={commentBool ? "input" : "disappear"}>
          <input placeholder="Enter comment..." />
        </div>
        <div className="buttons">
          <button
            className={commentBool ? "red" : "post-btn"}
            onClick={commentBool ? toggle : addLike}
          >
            {commentBool ? "Cancel" : "Like"}
          </button>
          <button className="post-btn" onClick={toggle}>
            {commentBool ? "Submit" : "Comment"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
