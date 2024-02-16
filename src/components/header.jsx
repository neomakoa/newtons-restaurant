import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black mb-2">
        <div className="container">
          <a className="navbar-brand display-6 text-secondary" href="/">
            Newton's
          </a>
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
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/#about-us"
                >
                  About Us
                </a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link text-white" href="/menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/locations">
                  Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
