import React from "react";
import "./Wrapper2.css"

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
