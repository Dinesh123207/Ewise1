import React from "react";
// import { FaArrowDown } from "react-icons/fa";
import flowpage from "../styles/Flowpage.css"; 
import education from "../images/Education.png";
import comprehension from "../images/Comprehension.png";
import chat from "../images/Chat.png";
import sustainability from "../images/Sustainability.png";

const FlowPaage = () => {
  return (
    <div className="flow-container" style = {flowpage}>
        <h1 style = {{color: "#325242"}}><strong>How Does It Work?</strong></h1>
        <br/>
      <div className="flow-step">
        <div style = {{display: "flex"}}>
            <div>
                <img src = {comprehension} style = {{width: "400px"}}/>
            </div>
            <div className = "flow-text" style = {{paddingTop: "80px"}}>
                <h2 style = {{color: "black"}}>Comprehensive E-Waste Platform</h2>
                <p style = {{color: "black"}}>Users can locate nearby recycling facilities, assess the recyclability of their products through a questionnaire, and connect with vendors for potential donations or sales.</p>
            </div>
        </div>
        {/* <FaArrowDown className="arrow-icon"  style = {{color: "black"}}/> */}
      </div>
      <div className="flow-step">
      <div style = {{display: "flex"}}>
            <div>
                <img src = {chat} style = {{width: "400px"}}/>
            </div>
            <div className = "flow-text" style = {{paddingTop: "80px"}}>
                <h2 style = {{color: "black"}}>Interactive User-Vendor Interaction</h2>
                <p style = {{color: "black"}}>Users can negotiate deals through — real time chat, accept or reject offers, and earn reward points for successful transactions, redeemable for government schemes.</p>
            </div>
        </div>
        {/* <FaArrowDown className="arrow-icon"  style = {{color: "black"}}/> */}
      </div>
      <div className="flow-step">
      <div style = {{display: "flex"}}>
            <div>
                <img src = {education} style = {{width: "400px"}}/>
            </div>
            <div className = "flow-text" style = {{paddingTop: "80px"}}>
                <h2 style = {{color: "black"}}>Educational Content Hub</h2>
                <p style = {{color: "black"}}>Users can access valuable information and educate themselves on sustainable practices and e-waste management through the provided blogs.</p>
            </div>
        </div>
        {/* <FaArrowDown className="arrow-icon" style = {{color: "black"}} /> */}
      </div>
      <div className="flow-step">
      <div style = {{display: "flex"}}>
            <div>
                <img src = {sustainability} style = {{width: "400px"}}/>
            </div>
            <div  className = "flow-text" style = {{display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "80px"}}>
                <h2 style = {{color: "black"}}>Sustainability Incentives</h2>
                <p style = {{color: "black"}}>Users are motivated to participate in eco-friendly practices by earning reward points through successful deals. These points can be redeemed for government schemes, creating an incentive for users to responsibly recycle their electronic products.</p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default FlowPaage;
