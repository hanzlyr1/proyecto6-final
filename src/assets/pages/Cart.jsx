import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../../components/Cart/CartProduct";
import { getUserCart } from "../../store/slices/cart.slice";
import getConfig from "../../utils/getConfig";
import "./style/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const handleCheckout = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some referenc  es",
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cart-container">
      <div className="cart__container-total">
        <h2 className="cart__title">Shopping cart</h2>
        <div className="cart__div-total">
          <span className="cart__span">Total</span>
          <p className="cart__total-number">
            $.
            {cartProducts
              ? cartProducts.reduce((acc, cv) => {
                  return cv.price * cv.productsInCart.quantity + acc;
                }, 0)
              : 0}
          </p>
        </div>
        <button className="cart__btn-checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
      <div className="cart__product-container">
        {cartProducts?.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
