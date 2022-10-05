import QuantityPicker from "../components/quantityPicker";
import "./product.css";

const Product = (props) => {
    return (
        <div className="product">
            <img src={"/images/" + props.data.image} height={150} alt ="" />
            <h1>Product Title</h1>
            <h5>{props.data.title}</h5>

            <QuantityPicker />
            <button className="cart-btn">Add to Cart</button>
            
        </div>
    )
}

export default Product;