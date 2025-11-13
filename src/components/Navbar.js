import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./images/evs_logo.png";

function Navbar({link, setLink}) {
  return (
    <nav
      className="navbar navbar-expand-lg px-3 blurred"
      style={{
        minHeight: "100px",
        backgroundColor:`${link === "Home"? "white":"rgba(99, 73, 130, 1)"}`,
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 5
      }}
      >
      <div className="container-fluid">
        {/* Brand on the left */}
        <a className="navbar-brand d-flex align-items-center" href="#" onClick={() => setLink("Home")}>
          <img
            src={logo}
            alt="Company Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top" // spacing between logo & text
            />
          <div id="nav-title">
            <span className="fw-bold me-2"   style={{color:`${link === "Home"? "black": "white"}`, fontSize: "25px" }} >EVALUESERVE</span>
            <span style={{color:`${link === "Home"? "black": "white"}`}}>IndexElevate</span>
          </div>
        </a>

        {/* Toggle button for mobile */}
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

        {/* Dropdowns aligned right */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* Indices */}
            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="indicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Indices
              </a>
              <ul className="dropdown-menu" aria-labelledby="indicesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* About */}
            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* Governance */}
            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="governanceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Governance
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="governanceDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* Qubits */}
            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="qubitsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Qubits
              </a>
              <ul className="dropdown-menu" aria-labelledby="qubitsDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
