import QuantityPicker from "../components/quantityPicker";
import "./product.css";
import { useState } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (qty) => {
    console.log("QuantityPicker Changed", qty);
    setQuantity(qty);
  };

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");
  };

  return (

    <div className="product">
      <img src={"/images/" + props.data.image} height={150} alt="" />

      <h5>{props.data.title}</h5>

      <div className="prices">
      <label className="price">Price: ${props.data.price.toFixed("2")}</label><br></br>
        <label className="total">Total: ${getTotal()}</label>
      </div>

      <div className="controls">
        <QuantityPicker onChange={handleQuantityChange} />
        <button className="cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
