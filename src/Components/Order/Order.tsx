import React from "react";
import "./Order.css";
import { calculator } from "../Calculator/Calculator";
export default function Order(props: any) {
  return (
    <div style={{ width: "960px", margin: "0 auto" }}>
      <h2 className="order__title">Your Order:</h2>
      <hr style={{ background: "gray" }} />
      <table className="table">
        <thead className="thead">
          <tr className="tr__main">
            <th className="order__item">#</th>
            <th className="order__item">Item</th>
            <th className="order__item">Count</th>
            <th className="order__item">Price</th>
            <th className="order__item">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.information.basket.map((item: any, index: number) => {
            return (
              <tr key={index} className="tr__main">
                <td>{index + 1}</td>
                <td className="order__item">{item.name}</td>
                <td>{item.counter}</td>
                <td>${item.cost}</td>
                <td>
                  <button
                    className="order__btn green"
                    onClick={() => props.onAdd(item.id)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                  <button
                    className="order__btn orange"
                    onClick={() => props.onRemove(item.id)}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <button
                    className="order__btn red"
                    onClick={() => props.onDelete(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="calculator">Total cost ${calculator(props)}</div>
    </div>
  );
}
