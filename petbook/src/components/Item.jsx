import React from "react";
import "../assets/styles/stylesItem.css"; 

function Item(props) {
  return (
    <div className="item-container">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="d-flex align-items-center">
            <span className="item-icon">{props.icon}</span>
            <a className="nav-link active item-title" aria-current="page" href="#">
              {props.title}
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Item;
