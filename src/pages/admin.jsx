import "./admin.css";
import { useState } from "react";
import Dataservice from "../Services/dataService";
import { useEffect } from "react";

const Admin = () => {
  //create an array
  const [coupon, setcoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  useEffect(() => {
    loadCoupons();
    loadProducts();
  }, []);

  const loadCoupons = async () => {
    let service = new Dataservice();
    let list = await service.getCoupons();
    setAllCoupons(list);
  };

  const loadProducts = async () => {
    let service = new Dataservice();
    let prods = await service.getCatalogue();
    setAllProducts(prods);
  };

  //product exercise done solo
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const handleProductChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;

    let coppy = { ...product };
    coppy[name] = text;
    setProduct(coppy);
  };

  const saveProduct = async () => {
    let copy = { ...product };
    copy.price = parseFloat(copy.price);

    //save on server
    let service = new Dataservice();
    let p = await service.saveProduct(copy);
    console.log(p);

    let productList = [...allProducts];
    productList.push(copy);
    setAllProducts(productList);
    console.log(productList);
  };

  //coupon exercise done with instructor
  const handleCouponChange = (e) => {
    console.log(e.target.value);
    const text = e.target.value;
    const name = e.target.name;

    let copy = { ...coupon };
    copy[name] = text;
    setcoupon(copy);
  };

  const saveCoupon = async () => {
    // fix discount to be a number
    let copy = { ...coupon };
    copy.discount = parseFloat(copy.discount);
    //send to the server
    let service = new Dataservice();
    let c = await service.saveCoupon(copy);
    console.log(c);

    //add to list

    let couponList = [...allCoupons];
    couponList.push(copy);
    setAllCoupons(couponList);
    console.log(couponList);
  };

  return (
    <div className="admin">
      <h1>Admin Page</h1>
      <div className="parent">
        <section className="sec-products">
          <h3>Products</h3>

          <div className="form">
            <div className="my-controls">
              <label>Title: </label>
              <input name="title" onChange={handleProductChange} type="text" />
            </div>
          </div>

          <div className="my-controls">
            <label>Price: </label>
            <input name="price" onChange={handleProductChange} type="number" />
          </div>

          <div className="my-controls">
            <label>Image: </label>
            <input name="image" onChange={handleProductChange} type="text" />
          </div>

          <div className="my-controls">
            <label>Category: </label>
            <input name="category" onChange={handleProductChange} type="text" />
          </div>

          <div className="my-control">
            <button onClick={saveProduct} className="btn btn-dark">
              Save
            </button>
          </div>
          <ul>
            {allProducts.map((c) => (
              <li key={c.title}>
                {c.title}, {c.category}, {c.price}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div>
        <section className="sec-discounts">
          <h3>Coupon Code</h3>
          <div className="form">
            <div className="my-controls">
              <label>Code</label>
              <input name="code" onChange={handleCouponChange} type="text" />
            </div>

            <div className="my-controls">
              <label>Discount</label>
              <input
                onChange={handleCouponChange}
                name="discount"
                type="number"
              />
            </div>
            <div className="my-control">
              <button onClick={saveCoupon} className="btn btn-dark">
                Save
              </button>
            </div>
          </div>
          <ul>
            {allCoupons.map((c) => (
              <li key={c.code}>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
          <ul>
            {allProducts.map((p, index) => (
              <li key={index}>
                {p.code} - {p.discount}
              </li>
            ))}
          </ul>
        
        </section>
      </div>
    </div>
  );
};

export default Admin;
