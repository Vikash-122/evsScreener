import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./images/evs_logo.png";
import {Link, useLocation} from "react-router-dom";

function Navbar({link}) {
  const location = useLocation().pathname; 
  return (
    <nav
      className="navbar navbar-expand-lg px-3 blurred"
      style={{
        minHeight: "100px",
        backgroundColor:`${location === "/"? "white":"rgba(99, 73, 130, 1)"}`,
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 5
      }}
      >
      <div className="container-fluid">
        {/* Brand on the left */}
        <Link to ="/" className="link">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Company Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top" // spacing between logo & text
            />
          <div id="nav-title">
            <span className="fw-bold me-2"   style={{color:`${location === "/"? "black": "white"}`, fontSize: "25px" }} >EVALUESERVE</span>
            <span style={{color:`${location === "/"? "black": "white"}`}}>{`IndexElevate${location ==="/Screener"? " - Backtesting and Rebalancing Framework": ""}`}</span>
          </div>
        </div>
        </Link>
          </div>
    </nav>
  );
}

export default Navbar;
