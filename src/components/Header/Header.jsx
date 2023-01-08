import React from "react";
import { Link } from "react-router-dom";
import FilterCategory from "../Home/FilterCategory";
import FilterPrice from "../Home/FilterPrice";
import "../Home/styles/header.css";
import ToOrderProducts from "../Home/ToOrderProducts";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navBar">
          <div className="navBar__container">
            <div className="navBar__logo">
              <Link to="/">
                <img className="logo" src="/logos.jpg" alt="logo" />
              </Link>
            </div>
            <Link to="/">
              <h1 className="header__title">E-ECOMMERCE</h1>
            </Link>
            {/*menu*/}

            <div className="btn-menu">
              <label htmlFor="btn-menu" className="icons__menu">
                <i class="fa-solid fa-bars"></i>
              </label>
            </div>

            <ul className="containers">
              <li className="cart__item">
                <Link to="/login">
                  <i className="fa-regular fa-circle-user icons"></i>
                </Link>

                <Link to="/login">
                  <span className="item__title">INICIA SESIÓN</span>
                </Link>
              </li>
              <li className="cart__item">
                <i className="fa-solid fa-cart-shopping  icons"></i>
                <Link to="/cart">
                  <span className="item__title">CARRITO</span>
                </Link>
              </li>
              <li className="cart__item">
                <i className="fa-solid fa-store icons"></i>
                <Link to="/purchases">
                  <span className="item__title">MIS PEDIDOS</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/*menu*/}
      <input type="checkbox" id="btn-menu" />
      <div className="container__menu">
        <div className="cont-menu">
          <div className="menuFilter">
            <details className="fixed__datails">
              <summary className="fixed__summary">Price</summary>
              <FilterPrice />
            </details>
            <details className="fixed__datails">
              <summary className="fixed__summary">Category</summary>
              <FilterCategory />
            </details>
            <ToOrderProducts />
            <label htmlFor="btn-menu" className="cont__menu-x">
              <i class="fa-solid fa-xmark icon"></i>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
