import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PurchasesCard from "../../components/Purchases/PurchasesCard";
import getConfig from "../../utils/getConfig";
import "./style/purchases.css";

const Purchases = () => {
  const [purchasesList, setPurchasesList] = useState();

  useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    axios
      .get(URL, getConfig())
      .then((res) => setPurchasesList(res.data.data.purchases))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="purchase__container-principal">
      <h2>
        <Link className="purchase__link" to="/">
          Home <i class="fa-solid fa-circle circle"></i> Purchases
        </Link>
      </h2>
      <h2 className="purchase__title-principal">My Purchases</h2>
      <div>
        {purchasesList?.map((purchase) => (
          <PurchasesCard key={purchase.id} purchase={purchase} />
        ))}
      </div>
    </section>
  );
};

export default Purchases;
