import React from 'react'
import cardStyle from "../styles/cardStyle.css";
import recycle from "../images/recycle.png";
import repair from "../images/repair.png";
import donate from "../images/donate.png";
import { Link } from 'react-router-dom';
export default function 
() {
  return (
    <div>
      
        <div className = "three-cards">
          <div style = {{backgroundColor: "#325242", height: "50px"}}>
          </div>
          <div className="card-container" style={cardStyle}>
            <div className="card" style = {{backgroundColor: "#A15A00", cursor: "pointer"}}>
              <img src={donate} alt="Blog Image" />
              <div className="card-content">
                <p style = {{color: "white"}}>Donate</p>
                <a to="blog.html" className="arrow"  style = {{color: "white"}}>
                  &#8594;
                </a>
                <Link to = "/ChartExample">
                  <p style = {{color: "white", marginLeft: "40px"}}>Show Stats</p>
                </Link>
              </div>
            </div>

            <div className="card" style = {{backgroundColor: "#457777", cursor: "pointer"}}>
              <img src={repair} alt="DIY Image" />
              <div className="card-content">
                <p style = {{color: "white"}}>Repair</p>
                <a  style = {{color: "white"}}to="diy.html" className="arrow">
                  &#8594;
                </a>
                <Link to = "/ChartExample">
                  <p style = {{color: "white", marginLeft: "40px"}}>Show Stats</p>
                </Link>
              </div>
            </div>

            <div className="card" style = {{backgroundColor: "#4B7255", cursor: "pointer"}}>
              <img src={recycle} alt="DIY Image" />
              <div className="card-content">
                <p style = {{color: "white"}}>Recycle</p>
                <a  style = {{color: "white"}} to="diy.html" className="arrow">
                  &#8594;
                </a>
                <Link to = "/ChartExample">
                  <p style = {{color: "white", marginLeft: "40px"}}>Show Stats</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
