import "./productInCart.css";
import { useState, useContext } from "react";
import StoreContext from "../state/storeContext";

const productInCart = (props) => {
    const getTotal = () => {
        return (props.data.price * props.data.quantity);
    };

    return <div className="prod-cart">
       
        <img src={"/images/" + props.data.image} height={75} width={75}alt="" />

        <div>
            <div className="info">
            <h5>{props.data.title}</h5>
            <p>{props.data.category}</p>
            </div>

            <label>{props.data.quantity}</label>
            <label>{getTotal()}</label>
        
        </div>
    </div>
};

export default productInCart; 