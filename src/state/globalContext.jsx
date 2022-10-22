import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalContext = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ id: 1, name: "Brandon" });

  const addToCart = (prod) => {
    setCart([...cart,prod]);
    
        // let copy = [...cart, prod];
    // copy.push(prod); LONG WAY TO DO

  };

  const removeProd = () => {
    console.log("removing prod");
  };

  const clearCart = () => {
    console.log("clearing cart");
  };

  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeProd,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
export default GlobalContext;
