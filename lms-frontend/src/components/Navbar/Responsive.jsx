import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const logo = "logo-dark.png";

function Responsive({ open }) {
  const inlineHeaderStyle = {
    fontWeight: "900",
    fontSize: "20px",
    color: "grey",
    position: "relative",
    left: "10px",
  };
  const [searchQuery, setSearchQuery] = useState("");
  const showCartPage = () => {};
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log();
  // };
  return (
    <nav className="SystemNav">
      <div className="navbar-icon" onClick={open}>
        <i class="fa-solid fa-bars" color="red"></i>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" height={40} />
      </div>
      <div className="Nav-items">
        <ul>
          <li className="causes">
            <a href>
              <i className="fas fa-th d-inline::before"></i>
              <span>Causes</span>
            </a>
          </li>
        </ul>
        <div className="All-causes">
          <ul>
            <li>
              <a href>
                <i className="fa-solid fa-address-book"></i>
                <span>FTC Beginner (A1) Courses</span>
                <span className="angle">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="bishop">
              <a href>
                <i class="fa-solid fa-chess-bishop"></i>
                <span>FTC Introduction Course</span>
                <span className="angle">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="accessible">
              <a href>
                <i className="fa-solid fa-wheelchair-move"></i>
                <span>FTC Intermediate (B1) Causes</span>
                <span className="angle">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="chess">
              <a href>
                <i className="fa-solid fa-chess"></i>
                <span>FTC Advanced (C1) Cause</span>
                <span className="angle">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="child">
              <a href>
                <i className="fa-solid fa-child"></i>
                <span>FTC one on one Coaching</span>
                <span className="angle">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="chess-2">
              <a href>
                <i class="fa-solid fa-chess"></i>
                <span>FTC Elite Pool</span>
                <span className="angle">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="file-archive">
              <a href>
                <i class="fa-solid fa-file-archive"></i>
                <span>FTC Material & Resources</span>
                <span className="angle">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="amazon">
              <a href>
                <i class="fa-solid fa-amazon"></i>
                <span>FTC Ebooks & Paperbacks</span>
                <span className="angle">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="asterisk">
              <a href>
                <i className="fa-solid fa-asterisk"></i>
                <span>FTC Elementary (A2) Courses</span>
                <span className="angle">
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="edit">
              <a href>
                <i className="fa-solid fa-edit"></i>
                <span>FTC Expert (C2) Courses</span>
                <span className="angle">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="key">
              <a href>
                <i className="fa-solid fa-key"></i>
                <span>FTC Independent (B2) Courses</span>
                <span className="angle">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="money">
              <a href>
                <i className="fa-solid fa-money-bill-alt"></i>
                <span>FTC Monthly Courses</span>
                <span className="angle">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className="justify">
              <a href>
                <i className="fa-solid fa-align-justify"></i>
                <span>FTC All Courses</span>
                <span className="angle">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="search for causes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i
          className="material-icons"
          style={{ color: "red", cursor: "pointer" }}
        >
          search
        </i>

        {/* <button type="submit">
        
        </button> */}
      </div>
      <div />
      <div className="cart-icon">
        <div className="cart">
          <Link to="/cart">
            <button type="button" className="show" onClick={showCartPage}>
              <i
                className="fa-solid fa-shopping-cart"
                style={inlineHeaderStyle}
              ></i>
              <span className="cart-count">0</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="log">
        <Link to="/Login">
          <p className="second-child">Login</p>
        </Link>

        <a href="/sign up" className="first-child">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Responsive;
