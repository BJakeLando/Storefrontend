import QuantityPicker from "../components/quantityPicker";
import "./product.css";
import { useState, useContext } from "react";
import StoreContext from "../state/storeContext";
import "font-awesome/css/font-awesome.min.css";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(StoreContext).addToCart;

  const handleQuantityChange = (qty) => {
    console.log("QuantityPicker Changed", qty);
    setQuantity(qty);
  };

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");
  };
  
  const handleAdd = () => {
    let pForCart = {...props.data, quantity: quantity};
    addToCart(pForCart); // call the context function
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
        <button onClick={handleAdd} className="cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
