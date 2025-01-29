import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import ProductNames from "../components/ProductNames"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Stats() {
  const [repairCount, setRepairCount] = useState(0);
  const [recycleCount, setRecycleCount] = useState(0);
  const [donateCount, setDonateCount] = useState(0);

  const fetchItemCounts = async () => {
    try {
      const repairResponse = await fetch("http://localhost:5000/api/getprices");
      if (repairResponse.ok) {
        const repairData = await repairResponse.json();
        setRepairCount(repairData.prices.length);
      } else {
        throw new Error("Failed to fetch repair data");
      }

      const recycleResponse = await fetch("http://localhost:5000/api/getpricesRecycle");
      if (recycleResponse.ok) {
        const recycleData = await recycleResponse.json();
        setRecycleCount(recycleData.prices.length);
      } else {
        throw new Error("Failed to fetch recycle data");
      }

      const donateResponse = await fetch("http://localhost:5000/api/getpricesDonate");
      if (donateResponse.ok) {
        const donateData = await donateResponse.json();
        setDonateCount(donateData.prices.length);
      } else {
        throw new Error("Failed to fetch donate data");
      }
    } catch (error) {
      console.error("Error fetching item counts:", error);
    }
  };

  useEffect(() => {
    fetchItemCounts();
  }, []);

  const data = {
    labels: ["Repair", "Recycle", "Donate"],
    datasets: [
      {
        label: "Items Count",
        data: [repairCount, recycleCount, donateCount],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
    <div style = {{marginBottom: "30px"}}>
        <Navbar/>
    </div>
    <div style = {{width: "1280px", height: "200px", backgroundColor: "#325242", paddingTop: "30px", marginBottom: "30px"}}>
        <h1><strong style = {{color: "white"}}>Stats</strong></h1>
    </div>
    <div style = {{height: "130vh"}}>
        <div style ={{display: "flex", flexDirection: "column"}}>
            <div className = "card" style = {{display: "flex", flexDirection: "row", width: "800px", marginLeft: "200px"}}>
                <div>
                    <h2 style = {{color: "black"}}><strong>Repair Vs Recycle Vs Donate</strong> </h2>
                </div>
                <div>
                    <Pie data={data} />
                </div>
            </div>
            <div className = "card" style = {{display: "flex", flexDirection: "row", width: "auto"}}>
                <div>
                <h2 style = {{color: "black", marginLeft: "50px"}}><strong>Count of Unique Products</strong></h2>
                </div>
                <div>
                    <ProductNames/>
                </div>
            </div>
        </div>
      <div>
      {/* <div style = {{display: "flex"}}>
        <div style={{ width: "400px", margin: "20px auto" }}>
            <h2 style = {{color: "black"}}>Repair Vs Recycle Vs Donate </h2>
            <Pie data={data} />
        </div>    
        <div>
            <ProductNames/>
        </div>

      </div> */}
    </div>
    </div>
    <div>
        <Footer />
    </div>
    </>
  );
}

export default Stats;
