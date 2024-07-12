import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark w-100 h-auto align-items-center ">
        <div className="container-fluid">
          <a
            className="navbar-brand text-light"
            href="#"
            style={{ fontWeight: 700 }}
          >
            TO-DO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">
                TO-DO
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav  justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Contact Us
                  </a>
                </li>
                
              </ul>
              <form className="d-flex mt-3 justify-content-center align-items-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
