import React from "react";

const PurchasesCard = ({ purchase }) => {
  const datePurchase = new Date(purchase.createdAt);

  return (
    <article className="purchase__container">
      <div className="purchase_div-title">
        <h3 className="purchase__title">{datePurchase.toLocaleDateString()}</h3>
      </div>
      <section className="purchase__container-section">
        <ul className="purchase__ul">
          {purchase.cart?.products.map((prod) => (
            <li className="purchase__li" key={prod.id}>
              <h4 className="purchase__prod-title">{prod.title}</h4>
              <span className="purchase__prod-quantity">
                {prod.productsInCart.quantity}
              </span>
              <span className="purchase__prod-price">{prod.price}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PurchasesCard;
