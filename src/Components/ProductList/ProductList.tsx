import React from "react";
import Card from "../Card/Card";

export default function ProductList(props: any) {
  // console.log("props - ", props);
  return (
    <div>
      {props.information.list.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Card item={item} onAdd={props.onAdd} />
          </div>
        );
      })}
    </div>
  );
}
