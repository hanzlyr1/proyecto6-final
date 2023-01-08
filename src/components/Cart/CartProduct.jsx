import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getUserCart } from "../../store/slices/cart.slice";

import getConfig from "../../utils/getConfig";
import "./styles/cartProduct.css";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`;
    axios
      .delete(URL, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };

  console.log(product);

  return (
    <div className="cart__product">
      <div className="cart__product-div">
        <h3 className="cart__product-title">{product.title}</h3>
        <button className="cart__product-btn" onClick={handleDelete}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <div className="cart__product-container-total">
          <div className="cart__product-quantity">
            <p>Amount</p>
            {product.productsInCart.quantity}
          </div>
          <div className="cart__product-div-price">
            <p className="cart__product-title">Price :</p>
            <span className="cart__product-price">{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
