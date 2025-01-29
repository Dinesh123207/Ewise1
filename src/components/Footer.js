import React from "react";
import VerticalLine from "../styles/VerticalLine.css"
import { Link } from "react-router-dom";
import img from "../images/logo.png";
export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <img
          className="col-md-4 mb-0 text-muted"
          style={{ height: 50, width: 180 }}
          src={img}
        ></img>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          style = {{marginLeft: "20px"}}
        >
          <svg className="bi me-2" width="40" height="32"></svg>
        </Link>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              <strong style = {{color: "#325242"}}>Home</strong>
            </Link>
          </li>
          <div className="vertical-line" style = {VerticalLine}></div>
          <li className="nav-item">
            <Link to="/getSellers" className="nav-link px-2 text-muted">
              <strong style = {{color: "#325242"}}>Shop</strong>
            </Link>
          </li>
          <div className="vertical-line" style = {VerticalLine}></div>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link px-2 text-muted">
              <strong style = {{color: "#325242"}}>Blog</strong>
            </Link>
          </li>
          <div className="vertical-line" style = {VerticalLine}></div>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-muted">
              <strong style = {{color: "#325242"}}>About</strong>
            </Link>
          </li>
          <div className="vertical-line" style = {VerticalLine}></div>
          <li className="nav-item">
            <Link to="/contact" className="nav-link px-2 text-muted">
              <strong style = {{color: "#325242"}}>Contact</strong>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}