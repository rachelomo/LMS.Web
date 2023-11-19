import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/Register/SignUp";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Navbar/Menu";
import Responsive from "./components/Navbar/Responsive";
import Backdrop from "./components/Navbar/Backdrop";
import Home from "./Home";
import DownBar from "./pages/DownBar/DownBar";

class App extends Component {
  state = {
    MenuOpen: false,
  };
  handleOpen = () => {
    this.setState({ MenuOpen: true });
  };

  handleClose = () => {
    this.setState({ MenuOpen: false });
  };
  render() {
    return (
      <BrowserRouter>
        {this.state.MenuOpen ? (
          <div>
            <Menu close={this.handleClose} />
            <Backdrop />
            {""}
          </div>
        ) : null}
        <Responsive open={this.handleOpen} MenuOpen={this.state.MenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign up" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <DownBar />
      </BrowserRouter>
    );
  }
}

export default App;
