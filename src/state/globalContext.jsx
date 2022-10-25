import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalContext = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ id: 1, name: "Brandon" });

  const addToCart = (prod) => {
    let cartCopy = [...cart];
    let found = false;

    for (let i = 0; i < cartCopy.length; i++) {
      let item = cartCopy[i];
      if (item._id == prod.id) {
        //found it
        item.quantity += prod.quantity;
        found = true;
      }
    }

    if(!found){
      cartCopy.push(prod);
    }

    setCart(cartCopy);
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
