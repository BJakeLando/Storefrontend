import "./home.css";
import Catalogue from "./catalogue";
import { Link } from "react-router-dom";

function home() {
  return (
    <div>
      <h1 className="homeBanner">Karla's Portraits Homepage</h1>
      
      <button>
        <img src="/images/homepage.jpg" alt="" />
        Check out my art catalogue!
      </button>
    </div>
  );
}

export default home;
