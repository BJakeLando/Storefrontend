import "./home.css";
import React from "react";
import { Link } from "react-router-dom";

function home() {
  // const [goToContact, setGoToContact] = React.useState(false);

  // if (goToContact) {
  //   return <Navigate to="/catalogue" />;
  // }

  return (
    <div className="homeContainer"> 
    <div>
      <h1 className="homeBanner">Homepage</h1>
      <img src="./public/images/self.jpg" alt="" />
      <Link to="/catalogue">
      <button className="galBtn" >The Gallery</button></Link> 
      {/* /* <button
        onClick={() => {
          setGoToContact(true);
        }}
      >
        The Gallery
      </button> */ }
    </div>
   </div>
  );
}

export default home;
