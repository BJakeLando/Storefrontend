import "./cart.css";
import StoreContext from "./../state/storeContext";
import { useContext } from "react";
import { useState } from "react";

const Cart = () => {
    const cart = useContext(StoreContext).cart;
    
    return(
        <div className="cart">
        <h1>We have {cart.length} products waiting for you!</h1>
            <div>
                <ul>
                <ul>
            {cart.map((p) => <li key={p._id}>{p.title} - {p.quantity}</li>)}
          </ul>
                </ul>
            </div>
        </div>
    )
}

export default Cart;

