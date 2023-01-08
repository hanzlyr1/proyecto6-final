import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../store/slices/cart.slice";
import getConfig from "../../utils/getConfig";
import "../Home/styles/productDescription.css";
import SliderImg from "./SliderImg";

const ProductDescription = ({ product }) => {
  const [counter, SetCounter] = useState(1);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  //logica
  const [imagenActual, SetimagenActual] = useState(0);
  const cantidad = product?.productImgs.length;

  const siguiente = () => {
    SetimagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anterior = () => {
    SetimagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  const handlePlus = () => {
    SetCounter(counter + 1);
  };
  const handleminus = () => {
    if (counter - 1 > 0) {
      SetCounter(counter - 1);
    }
  };

  const handleCart = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const data = {
      id: product.id,
      quantity: counter,
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getUserCart());
      })
      .catch((err) => {
        const URLPatch = "https://e-commerce-api.academlo.tech/api/v1/cart";
        const prevQuantity = cart.filter((e) => e.id === product.id)[0]
          .productsInCart.quantity;
        const data = {
          id: product.id,
          newQuantity: prevQuantity + counter,
        };
        if (err.response.status === 400) {
          axios
            .patch(URLPatch, data, getConfig())
            .then((res) => {
              console.log(res.data);
              dispatch(getUserCart());
            })
            .catch((err) => console.log(err));
        }
      });
  };

  console.log(product);
  return (
    <>
      <article className="article">
        {/* <div className="article__slider">
          <div className="slider__img">
            {product?.productImgs.map(
              (i, index) =>
                imagenActual === index && (
                  <img className="img__img" key={index} src={i} alt="" />
                )
            )}
            <button className="slider__icons  right" onClick={siguiente}>
              <i className="fa-sharp fa-solid fa-chevron-right icons"></i>
            </button>
            <button className="slider__icons left" onClick={anterior}>
              <i className="fa-sharp fa-solid fa-chevron-left icons"></i>
            </button>
          </div>
        </div> */}
        <SliderImg listImg={product?.productImgs} />
        <div className="article__description">
          <h2 className="product__title">{product?.title}</h2>
          <p className="product__description">{product?.description}</p>
          <div className="flex">
            <section className="product__price">
              <h3 className="product__h3">Price</h3>
              <span className="product__span">{product?.price}</span>
            </section>
            <section className="product__quantity">
              <h3 className="product__h3">Quantity</h3>
              <div className="product__handle">
                <button className="product__button" onClick={handleminus}>
                  -
                </button>
                <div className="product__counter">{counter}</div>
                <button className="product__button" onClick={handlePlus}>
                  +
                </button>
              </div>
            </section>
          </div>
          <button onClick={handleCart} className="description__button">
            Add to Cart <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </article>
    </>
  );
};

export default ProductDescription;
