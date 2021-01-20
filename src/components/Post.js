import React from "react";

function Post(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="post-header">
            <img
              className="border border-white"
              src={props.pic}
              alt=""
              width="50px"
              height="50px"
            ></img>
          </div>
          <div className="col-8">
            <p>{props.name}</p>
            <p>{props.date}</p>
          </div>
          <div className="row">
            <div className="col-12">
              <p>{props.post}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button>Like</button>
              <button>Comment</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                className="border border-white"
                src={props.pic}
                alt=""
                width="50px"
                height="50px"
              ></img>
            </div>
            <div className="col-8">
              <input type="text"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
