import React from "react";
import { Link } from "react-router-dom";
import cardStyle from "../styles/cardStyle.css";
import Navbar from "../components/Navbar";
import blog from "../images/blog.jpg";
import diy from "../images/diy.jpg";
import Footer from "../components/Footer";
export default function Education() {
  const styles = `
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #325343;
            color: #FFFFFF;
            font-size: 1em;
            font-weight: bold;
        }

        main {
            padding: 20px;
            text-align: center;
        }

        h1 {
            color: #FFFFFF;
        }

        .card-container {
            text-align: center;
        }

        .card {
            display: inline-block;
            width: 30%;
            margin: 10px;
            border: 1px solid #F7F0E6;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            background-color: #FFFFFF;
            padding: 15px;
        }

        .card:hover {
            transform: scale(1.05);
        }

        .card img {
            width: 100%;
            height: auto;
            transition: transform 0.3s ease-in-out;
            opacity: 0.8;
            background-color: #FFFCF6;
        }

        .card-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 1;
        }

        .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.7);
            z-index: 0;
        }

        .card p {
            margin: 0;
            font-size: 1.2em;
            color: #000000;
        }

        .arrow-container {
            margin-top: 10px;
        }

        .arrow {
            display: block;
            text-decoration: none;
            color: #000000;
        }
    `;
  return (
    <>
      <div style={{ height: "120vh" }}>
        <div>
          <Navbar />
        </div>
        <div style={{ backgroundColor: "#325242" }}>
          <div style={{ height: "50px" }}></div>
          <h1 style={{ color: "white" }}>
            <strong>Education</strong>
          </h1>

          <div className="card-container">
            <div className="card">
              <img src={blog} alt="Blog Image" />
              <div className="card-content" style={{ cursor: "pointer" }}>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                  <p>Blog</p>
                </Link>
                <div className="arrow-container">
                  <Link to="/blogs" className="arrow">
                    &#8594;
                  </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={diy} alt="DIY Image" />
              <div className="card-content" style={{ cursor: "pointer" }}>
                <Link to="/diy" style={{ textDecoration: "none" }}>
                  <p>DIY</p>
                </Link>
                <div className="arrow-container">
                  <Link to="/diy" className="arrow">
                    &#8594;
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "50px" }}></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
