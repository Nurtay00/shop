import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";
import counter from "../Counter/Counter";
import { calculator } from "../Calculator/Calculator";

export default function Header(props: any) {
  return (
    <div className="header">
      <Link to="/" className="header__title">
        Book Shop
      </Link>
      <Link to="/basket" className="header__title basket">
        <div>
          <i className="fas fa-cart-plus"></i> {counter(props)} items ($
          {calculator(props)})
        </div>
      </Link>
    </div>
  );
}
