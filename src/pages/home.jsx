import "./home.css";
import React from "react";
import { Navigate } from "react-router-dom";

function home() {
  // const [goToContact, setGoToContact] = React.useState(false);

  // if (goToContact) {
  //   return <Navigate to="/catalogue" />;
  // }

  return (
    <div>
      <h1 className="homeBanner">Karla's Portraits Homepage</h1>
      <div className="homeImg">
        <img src="/images/homepage.jpg" alt="" />
      </div>
      <link className="btn btn-lg btn dark" to="/.catalogue"></link>
      {/* /* <button
        onClick={() => {
          setGoToContact(true);
        }}
      >
        Check out my art catalogue!
      </button> */ }
    </div>
  );
}

export default home;
