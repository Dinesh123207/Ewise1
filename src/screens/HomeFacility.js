import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavbarFacility";
import Footer from "../components/Footer";
import homeImg from "../images/home.png";
// import location from "../images/location.png";
// import homeImg from "../images/home.png";
import location from "../images/location.png";
import "../styles/bargain.css";
import TopBanner from "../components/TopBanner";
import Stats from "../components/Stats";
import ThreeCards from "../components/ThreeCards";
import FlowPaage from "../components/FlowPaage";

export default function HomeFacility() {
 
  const imgStyle = {
    position: "fixed",
    top: 100,
    right: 50,
  };
  // >>>>>>> c3252c614966df32e48f32112ef03f63e4f4a85b
  return (
    <>
    <div style = {{height: "550vh"}}>
      <TopBanner />
      <div>
        <Navbar />
      </div>
      <div>
        <div style = {{backgroundColor: "#325242"}}>
          <div style = {{height: "120px"}}>

          </div>
          <h1 style = {{marginBottom: "0px", color: "white"}}>Be Wise With E-Wise</h1>
          <br/>
          <p style = {{margin: "0px", fontSize: "18px"}}>Make Every Gadget Count!</p>
          <br/>
        </div>
        <div>
          <ThreeCards/>
        </div>
        <br />
        <br />
        <div>
          <Stats/>
        </div>
        <br />
        <div>
          <FlowPaage/>
        </div>
        
      </div>
      {/* <div style = {{display: "flex"}}>
        <div className="scrollable-container" style={{ height: "1000vh" }}>
          <div className="h-400" style={{ marginTop: 108, marginLeft: 100 }}>
            <form className="d-flex mt-5 ms-5" style={{ maxWidth: 600 }}>
              <input
                style={{
                  borderRadius: 20,
                  height: 50,
                  backgroundColor: "#f5f5f5",
                }} // Set height to desired value, for example, 40px
                className="form-control mr-2 flex-grow-1"
                type="search"
                placeholder="What Are You Looking For?"
                aria-label="Search"
              />
              <button
                style={{ borderRadius: 20, height: 50 }}
                className="btn btn-info ms-3"
                type="submit"
              >
                <Link
                  to="/getSellers"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "block",
                    width: "100%",
                    padding: "6px 12px",
                  }}
                >
                  Search
                </Link>
              </button>
            </form>
            <br />
            <br />
            <div style={{ fontFamily: "Plus Jakarta Sans", marginRight: 40 }}>
              <h1 style={{ color: "black" }}>Make Every</h1>
              <h1 style={{ color: "black" }}>Gadget Count!</h1>
            </div>
            <br />
            <div className="d-flex">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Location"
                aria-label="Search"
                style={{
                  width: 200,
                  marginLeft: 180,
                  backgroundColor: "#f5f5f5",
                }}
              />
              <div>
                <img
                  src={location}
                  style={{ height: 30 }}
                  className="ms-2"
                ></img>
              </div>
            </div>
            <br />
            <div style={{ marginRight: 480 }}>
              <button type="button" className="btn btn-info">
                <Link
                  to="/Option"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Explore E-Wise
                </Link>
              </button>
            </div>
          </div>
        </div>
        
      </div> */}
      </div>
      {/* <div style = {{backgroundColor: "#325242"}}>
          <div style = {{height: "300px"}}>
            <button>Tap to know more about us -</button>
          </div>
      </div> */}
      <div>
        <Footer/>
      </div>
    </>
  );
}