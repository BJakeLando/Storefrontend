import "./navBar.css";
import React from "react";
import { Link } from "react-router-dom";
import StoreContext from "./../state/storeContext";
import { useContext } from "react";

function NavBar() {
  const user = useContext(StoreContext).user;
  const cart = useContext(StoreContext).cart;
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/admin">
          Admin
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogue">
                Catalogue
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Wish">
                Wish List
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <Link className="btn btn-outline-light" to="/cart">View Cart
              <span class="badge text-bg-primary">
                <span class="badge text-bg-primary">{cart.length}</span>
              </span>
            </Link>
          </form>
          <label>{user.name}</label>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
