import React from "react";

function InnerItem(props) {
  return (
    <>
      <li onClick={props.popupOpen} className={props.className}>
        <a href="#">{props.children}</a>
      </li>
    </>
  );
}

export default InnerItem;
