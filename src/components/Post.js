import React, { useState, useEffect } from "react";

import "./Post.css";

function Post(props) {
  const date = new Date(props.date);
  const [likes, setLikes] = useState(props.likes);
  const [commentBool, setCommentBool] = useState(false);
  const [reply, setReply] = useState();

  // function setSide() {
  //   if(props.reply === 0) setReply(false)

  // }

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
    <div className="container">
      <div className="row post-header">
        <div className="col-2 post-pic">
          <img
            className="border border-white"
            src={props.pic}
            alt=""
            width="50px"
            height="50px"
          ></img>
        </div>

        <div className="col-3 post-name text-left">
          {props.name}
          <br />
          {date.toLocaleDateString()}
        </div>
        <div className="col-7"></div>
      </div>
      <div className="row post-body">
        <div className="col-12 text-left">
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
        <div className="row">
          <div className={commentBool ? "comment-box" : "disappear"}>
            <input placeholder="Enter comment..." />
          </div>
          <div className="col-12 post-btn-wrapper">
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
      {/* <div className="row">
        <div className="col-2">
          <img
            className="border border-white"
            src={props.pic}
            alt=""
            width="50px"
            height="50px"
          ></img>
        </div>

        <div className="col-10">
          <input type="text" placeholder="Type comment here..."></input>
        </div>
      </div> */}
    </div>
  );
}

export default Post;
