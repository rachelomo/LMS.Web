import React from "react";
import "./Navbar.css";

function Menu({ open, close, MenuOpen }) {
  let Classes = "Menu";
  if (MenuOpen) {
    Classes = "Menu open";
  }
  return (
    <nav className={Classes}>
      <ul>
        <li onClick={close}>
          <i class="fa-solid fa-xmark"></i>
        </li>
        <div className="nab" onClick={open}>
          <ul>
            <li onClick={open}>
              <a href>
                <i className="fas fa-th d-inline::before"></i>
                <span marginTop="20px">Courses</span>
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
        <div className="logged">
          <a href="/sign up" className="first-child">
            Sign Up
          </a>
          <a href="/cart" className="second-child">
            Login
          </a>
        </div>
      </ul>
    </nav>
  );
}

export default Menu;
