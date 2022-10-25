
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalogue from "./pages/catalogue";
import WishList from "./components/wishlist";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Admin from "./pages/admin";
import Cart from "./pages/cart";
import "font-awesome/css/font-awesome.min.css";
import GlobalContext from "./state/globalContext";


function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <div className="navBar">
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/wish" element={<WishList />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;

//https://git-scm.com/downloads
