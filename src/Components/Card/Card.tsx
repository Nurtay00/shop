import React from "react";

import "./Card.css";

export default function Card(props: any) {
  return (
    <div className="card__warp">
      <img src={props.item.src} alt="" className="card__img" />
      <div className="card__content">
        <div className="title">{props.item.name}</div>
        <div className="author">Author: {props.item.author}</div>
        <div>Price: ${props.item.cost}</div>
        <button
          className="card__btn"
          onClick={() => props.onAdd(props.item.id)}
        >
          Add card
        </button>
      </div>
    </div>
  );
}
