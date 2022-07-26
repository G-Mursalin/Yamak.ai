// React
import React from "react";
//Images
const sync = require("./../../images/synchronization.png");

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-2" href="/">
          <span className="text-primary">Yamak</span>.ai
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item ms-3">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="/">
                Marketing
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link active text-primary" href="/">
                Social Media
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="/">
                Sales Copy
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="/">
                Blogs
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="/">
                Others
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <div className="ms-3 position-relative">
            <img
              src={sync}
              role="button"
              alt="user_sync"
              className="rounded-circle"
              style={{ width: "26px", height: "26px" }}
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
              50 <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          <div className="ms-4">
            <img
              src="https://via.placeholder.com/40x40"
              alt="user_image"
              role="button"
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
