import React from "react";

import ProductList from "../../Components/ProductList/ProductList";
import "./Mainpage.css";
import Order from "../../Components/Order/Order";

export default function Mainpage(props: any) {
  return (
    <div className="warp">
      <ProductList {...props} />
      <Order {...props} />
    </div>
  );
}
