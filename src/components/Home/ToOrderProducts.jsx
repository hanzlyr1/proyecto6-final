import React from "react";
import { useDispatch } from "react-redux";
import {
  ascendingOrder,
  desendingOrder,
} from "../../store/slices/products.slice";
import "./styles/toOrderProduct.css";

const ToOrderProducts = () => {
  const dispatch = useDispatch();

  const handleAscending = () => {
    dispatch(ascendingOrder());
  };
  const handleDesending = () => {
    dispatch(desendingOrder());
  };

  return (
    <div className="orden">
      <button className="order__button" onClick={handleAscending}>
        Ascending Order
      </button>
      <button className="order__button" onClick={handleDesending}>
        Descending Order
      </button>
    </div>
  );
};

export default ToOrderProducts;
