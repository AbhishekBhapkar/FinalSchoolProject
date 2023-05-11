import React from "react";

function popUp(props) {
  return ( props.trigger) ? (
    <div className="popUp">
      <button className="Close-btn">Close</button>
      {props.children}
    </div>
  ) : "";
}

export default popUp;
