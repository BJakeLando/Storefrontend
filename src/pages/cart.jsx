import "./cart.css";
import StoreContext from "./../state/storeContext";
import { useContext } from "react";
import ProductsInCart from './../components/productInCart';
import Dataservice from './../Services/dataService';
import { useState } from "react";
import { useEffect } from "react";


const Cart = () => {
  const  [productInCart, setProductInCart] = useState([]); 
  useEffect(() => {
    let service = new Dataservice();
    let result = service.getCatalogue();
    setProductInCart(result);
  }, []);

  const cart = useContext(StoreContext).cart;

  const getCount = () => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      count += prod.quantity;
    }

    return count;
  };

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }

    return "$" + total.toFixed("2");
  };

  return (
    <div>
      <div className="cart">
    
        <div className="parent">
          <h1>We have {getCount()} products waiting for you!</h1>
          <div>
            <ul>
              <ul>
                {cart.map((p) => (
                  <li key={p._id}>
                    {p.title} - {p.quantity}
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>

        <div className="total">
          <h4>Your Total is: {getTotal()}</h4>
        </div>
      </div>
      {productInCart.map((prod) => (
          <ProductsInCart key= {prod._id} data={prod} />
        ))}
    </div>
  );
};

export default Cart;
