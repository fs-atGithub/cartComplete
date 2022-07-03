import { useState } from "react";

export function Product(props) {
  const [disabled, setDisabled] = useState(false);

  const disableButton = () => {
    setDisabled(true);
    props.onAddToCart();
  };

  return (
    <div key={props.id} className="product">
      <div className="product-description">
        <div className="product-name">{props.name}</div>
        <div className="product-price">
          {props.price} HRK
        </div>
      </div>
      <div className="product-button">
        <button
          className="button"
          type="button"
          disabled={disabled}
          onClick={disableButton}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
