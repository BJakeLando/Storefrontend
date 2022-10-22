import { useEffect } from "react";
import Product from "../components/product";
import Dataservice from "../Services/dataService";
import { useState } from "react";
import "./catalogue.css";

function Catalogue() {
  const [products, setProducts] = useState([]);

  //use effect
  // to execute something when the component
  useEffect(() => {
    let service = new Dataservice();
    let result = service.getCatalogue();
    setProducts(result);
  }, []);

  return (
    <div className="catalogue">
      <h1>Gallery</h1>
      <h5>We have {products.length} products waiting for you</h5>

      <div className="list-container">
        {products.map((prod) => (
          <Product key= {prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
