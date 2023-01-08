import React from "react";
import "./styles/filterPrice.css";

const FilterPrice = ({ setinputPrice }) => {
  //acceder al form sin libreris
  const hableSubmit = (e) => {
    e.preventDefault();
    const inputFrom = +e.target.from.value;
    const inputTo = +e.target.to.value;

    if (inputFrom && inputTo) {
      setinputPrice({
        from: inputFrom,
        to: inputTo,
      });
    } else if (!inputFrom && inputTo) {
      setinputPrice({
        from: 0,
        to: inputTo,
      });
    } else if (inputFrom && !inputTo) {
      setinputPrice({
        from: inputFrom,
        to: Infinity,
      });
    } else {
      setinputPrice({
        from: 0,
        to: Infinity,
      });
    }
  };
  return (
    <section className="price">
      <form onSubmit={hableSubmit} className="price__form">
        <div className="price__from">
          <label htmlFor="from" className="form__label">
            From
          </label>
          <input className="price__input" type="number" id="from" />
        </div>
        <div className="price__from">
          <label htmlFor="to" className="form__label">
            To
          </label>
          <input className="price__input" type="number" id="to" />
        </div>
        <div className="price__buttons">
          <button className="price__button">Apply</button>
        </div>
      </form>
    </section>
  );
};

export default FilterPrice;
