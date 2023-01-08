import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import CardProduct from "../../components/Home/CardProduct";
import FilterCategory from "../../components/Home/FilterCategory";
import FilterPrice from "../../components/Home/FilterPrice";
import ToOrderProducts from "../../components/Home/ToOrderProducts";
import "./style/home.css";

const Home = () => {
  const products = useSelector((state) => state.products);

  //creacion de estado
  const [productFilter, setproductFilter] = useState();
  const [inputValue, setinputValue] = useState("");

  const [inputPrice, setinputPrice] = useState({
    from: 0,
    to: Infinity,
  });

  //fitrado de productos
  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const filter = products?.filter((pro) =>
      pro.title.toLowerCase().includes(inputValue)
    );
    setproductFilter(filter);
    setinputValue(e.target.value);
  };

  useEffect(() => {
    if (products) {
      setproductFilter(products);
    }
  }, [products]);

  console.log(productFilter);

  const filterCallback = (pro) =>
    +pro.price >= inputPrice.from && +pro.price <= inputPrice.to;
  //+ adelante es para convertir a numero un string
  return (
    <>
      {/*  */}
      <div className="home">
        <aside className="aside">
          <div className="fixed">
            <details className="fixed__datails">
              <summary className="fixed__summary">Price</summary>
              <FilterPrice setinputPrice={setinputPrice} />
            </details>
            <details className="fixed__datails">
              <summary className="fixed__summary">Category</summary>
              <FilterCategory setinputValue={setinputValue} />
            </details>
            <ToOrderProducts />
          </div>
        </aside>
        <div className="home__product">
          <div className="home__input">
            <input className="input" onChange={handleChange} type="text" />
            <i className="fa-solid fa-magnifying-glass iconInput"></i>
          </div>
          <div className="product__container">
            {productFilter?.filter(filterCallback).length !== 0 ? (
              productFilter
                ?.filter(filterCallback)
                .map((product) => (
                  <CardProduct key={product.id} product={product} />
                ))
            ) : (
              <h1 className="product__msg">
                Not exist products to this filter
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
