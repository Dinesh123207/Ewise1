import React from "react";
import topbanner from "../styles/topbanner.css";
import { Link } from "react-router-dom";
const TopBanner = () => {
  return (
    <div className="top-banner" variant="success" style = {{backgroundColor: "#305242"}}>
      <Link to = "/blogs"><p style = {{marginBottom: 0, color: "white", textDecoration: "none"}}>Explore and Discover Amazing E-Waste Facts</p></Link>
    </div>
  );
};

export default TopBanner;
