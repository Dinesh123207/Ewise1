import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../images/logo.png";
import Modal from "../Modal";
import Cart from "../screens/Cart";

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-static-top" >
        <Link className="navbar-brand me-5 ms-5" to="/">
          <img src={logo} />
        </Link>
        <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active ms-5 me-3">
              <Link className="nav-link active" to="/" style = {{color: "#305242"}}>
                <strong>Home <span className="sr-only"></span></strong>
              </Link>
            </li>
            <li className="nav-item active ms-5 me-3">
              <Link className="nav-link active" to="/marketplace"  style = {{color: "#305242"}}>
              <strong>Shop</strong>
              </Link>
            </li>
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link active" to="/education" style = {{color: "#305242"}}>
              <strong>Education</strong>
              </Link>
            </li>
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link active" to="/contact" style = {{color: "#305242"}}>
              <strong>Contact</strong>
              </Link>
            </li>
            <li className="nav-item ms-5 me-3">
              <Link className="nav-link active" to="/about" style = {{color: "#305242"}}>
              <strong>About</strong>
              </Link>
            </li>
          </ul>
          <div className="mr-3">
            {!localStorage.getItem("authToken") ? (
              <div>
                <Dropdown className="ms-5" style = {{marginRight: "20px"}}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Are You A User/Facility?
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-success mt-2" style = {{width: "210px"}}>
                    <Dropdown.Item className="nav-item">
                      <Link className="nav-link" to="/createbuyer" style = {{color: "white"}}>
                        User
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="nav-link" to="/createseller"  style = {{color: "white"}}>
                        Facility
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <div style = {{ marginRight: "20px"}}>
                <div
                  className="btn bg-info mx-1" onClick={()=>setCartView(true)}
                  style={{ textDecoration: "none", color: "white", marginRight: "20px", paddingBottom: "30px" }}>
                  Cart
                </div>
                {cartView? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>: null}
                <Link to="/UserDetailsReward" className="btn bg-info mx-1" style={{ textDecoration: 'none', color: 'white' }}>
                  <div>User
                  </div>
               </Link>
                <div
                  className="btn bg-danger mx-1"
                  style={{ textDecoration: "none", color: "white", paddingBottom: "30px" }}
                  onClick={handleLogout}
                >
                  Logout
                </div>
                <div className = "btn" style = {{border: "2px solid #325343", borderRadius: "20px"}}>
                  <a  style = {{textDecoration: "none"}} href = "http://localhost:5174/">Chat</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* <nav classNameNameName="navbar navbar-expand-lg bg-body-tertiary">
        <div classNameNameName="container-fluid">
          <Link classNameNameName="navbar-brand" to="../screens/home.js">
            <img src = {logo} alt = "logo"/>
          </Link>
          <div classNameNameName="collapse navbar-collapse" id="navbarNav">
            <ul classNameNameName="navbar-nav">
              <li classNameNameName="nav-item">
                <Link classNameNameName="nav-Link" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/getsellers">
                  List
                </Link>
              </li>
            </ul>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Are you Link Seller/Buyer?
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item to="../screens/home.js">Buyer</Dropdown.Item>
              <Dropdown.Item to="#/seller">Seller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav> */}
    </div>
  );
}
