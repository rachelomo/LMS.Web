import React from "react";

const DownBar = () => {
  return (
    <div className="DownBar">
      <footer className="footer">
        <div className="default-footer">
          <img className="image" src="logo-dark.png" alt="logo-dark" />
          <div className="left">
            <a href="/">About</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms and condition</a>
            <a href="/">Login</a>
          </div>
        </div>
        <div className="foot-color"></div>
      </footer>
    </div>
  );
};

export default DownBar;
