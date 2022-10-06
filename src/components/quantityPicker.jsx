import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    let value = quantity + 1;
    setQuantity(value);
    props.onChange(value);
  };

  const decrease = () => {
    //decrease but never go below 1
    if (quantity === 1) return;

    let value = quantity - 1;
    setQuantity(value);
    props.onChange(value);
  };

  return (
    <div className="quantityPicker">
      <button onClick={increase}>+</button>
      <label>{quantity}</label>
      <button disabled={quantity === 1} onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default QuantityPicker;
