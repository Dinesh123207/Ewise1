import React from 'react';
import scooterdelivery from "../images/Video.mp4";

export default function Pickup() {
  return (
    <div>
      <h1>Your Delivery in Progress!</h1>
      <video width="640" height="500" controls autoPlay loop style={{margin:"0 0 0 0 "}}>
        <source src={scooterdelivery} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 style={{ margin:"0 0 20px 100px"  ,color: 'black',fontSize:"15", fontStyle: 'italic' }}>
        Fact: "China, the US, and India produce the most E-Waste"
      </h2>
    </div>
  );
}