import React from "react";
import "../styles/Stats.css"; // Import your CSS file for styling
const Stats = () => {
  return (
    <div className="container-stats" style = {{width: "1300px", padding: "50px"}}>
      <div className="left-div" style = {{paddingTop: "15vh"}}>
        <h2 style = {{color: "black"}}>Eco-friendly e-waste hub - connect, transact, and earn rewards -<p  style = {{color: "#325242"}}><strong> 100% online.</strong></p></h2>
      </div>
      <div className="right-div">

        <p>
          <h1 style = {{color: "#325242"}}><strong>53,600,041</strong></h1>
          <p  style = {{color: "black"}}>metric tonnes e-waste produced</p>
        </p>
        <hr /> 
        <p>
          <h1 style = {{color: "#325242"}}><strong>9,326,521</strong></h1>
          <p style = {{color: "black"}}>collected and recycled</p>
        </p>
        <hr />
        <p>
          <h1 style = {{color: "#325242"}}><strong>57,000,021,209</strong></h1>
          <p style = {{color: "black"}}>worth recoverable materials dumped and burned</p>
        </p>
      </div>
    </div>
  );
};

export default Stats;
