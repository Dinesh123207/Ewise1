import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/bargain.css";
import TopBanner from "../components/TopBanner";
import Stats from "../components/Stats";
import ThreeCards from "../components/ThreeCards";
import FlowPaage from "../components/FlowPaage";
import Popup from "../components/Popup";
export default function Home() {
  return (
    <>
    <div style = {{height: "560vh"}}>
      <TopBanner />
      <div>
        <Navbar />
      </div>
      <div>
        <div style = {{backgroundColor: "#325242"}}>
          <div style = {{height: "50px"}}>

          
          </div>
          <h1 style = {{marginBottom: "0px", color: "white"}}>Be Wise With E-Wise</h1>
          <br/>
          <p style = {{margin: "0px", fontSize: "18px"}}>Make Every Gadget Count!</p>
          <br/>
          <div className = "btn btn-white" style = {{paddingTop: "40px"}}>
            <h2><strong style = {{color: "white", backgroundColor: "white", color: "black", borderRadius: "20px", padding: "10px"}}><a style = {{textDecoration: "none", color: "black"}} href = "http://192.168.33.109:8502">Find Nearby Facilities</a></strong></h2>
          </div>
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
        <div>
          <Popup/>
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
