import React from "react";
import "./Thumbnail.css";

// function Photo(props) {
//   return (
//     <div>
//       <div className="thumbnail">
//         <img
//           className="border border-white"
//           src={props.pic}
//           alt=""
//           width="80px"
//           height="80px"
//         ></img>
//       </div>
//     </div>
//   );
// }
const Photo = React.forwardRef((ref, props) => (
  // <div ref={ref} {...props} className="thumbnail">
  <img
    ref={ref}
    className="border border-white"
    src={props.pic}
    alt=""
    width="80px"
    height="80px"
  ></img>
  // </div>
));

export default Photo;

// function FancyButton(props) {
//   return (
//     <button className="FancyButton">
//       {props.children}
//     </button>
//   );
// }
// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ));
