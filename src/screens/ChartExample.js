import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import cardStyle from "../styles/cardStyle.css"
import recycle from "../images/recycle.png";
import repair from "../images/repair.png";
import donate from "../images/donate.png";
import Navbar from "../components/Navbar"
const ChartExample = () => {
  const recycleCounter = useRef(0);
  const repairCounter = useRef(0);
  const donateCounter = useRef(0);

  useEffect(() => {
    const updateInterval = setInterval(updateChart, 1000);

    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  const updateCount = (buttonType) => {
    switch (buttonType) {
      case 'recycle':
        recycleCounter.current++;
        break;
      case 'repair':
        repairCounter.current++;
        break;
      case 'donate':
        donateCounter.current++;
        break;
      default:
        break;
    }
  };

  const updateChart = () => {
    const ctx = document.getElementById('clickChart');

    if (window.chart) {
      window.chart.data.datasets[0].data = [
        recycleCounter.current,
        repairCounter.current,
        donateCounter.current,
      ];
      window.chart.update();
    } else {
      window.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Recycle', 'Repair', 'Donate'],
          datasets: [
            {
              label: 'Button Clicks',
              data: [
                recycleCounter.current,
                repairCounter.current,
                donateCounter.current,
              ],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  };

  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <br/>
        <br/>
        <br/>
      <h2><strong style = {{color: "black"}}>Visualizing how many clicks does our site gets</strong></h2>
      <div id="chartContainer" style = {{backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1", padding: "20px"}}>
        <canvas id="clickChart" width="800" height="600" style = {{display: "block", margin: "0 auto", overflow: "hidden"}}></canvas>
      </div>
      <div className="card" style = {{backgroundColor: "#A15A00", cursor: "pointer"}}>
            <img src={donate} alt="Blog Image" />
            <br/>
            <br/>
            <button  onClick={() => updateCount('donate')} style = {{color: "white", backgroundColor: "white", color: "black", border: "none", outline: "none", borderRadius: "10px"}}>Donate</button>
        </div>
      <div className="card" style = {{backgroundColor: "#457777", cursor: "pointer"}}>
            <img src={repair} alt="Blog Image" />
            <br/>
            <br/>
            <button  onClick={() => updateCount('repair')} style = {{color: "white", backgroundColor: "white", color: "black", border: "none", outline: "none", borderRadius: "10px"}}>Repair</button>
        </div>
      <div className="card" style = {{backgroundColor: "#4B7255", cursor: "pointer"}}>
            <img src={recycle} alt="Blog Image" />
            <br/>
            <br/>
            <button  onClick={() => updateCount('recycle')} style = {{color: "white", backgroundColor: "white", color: "black", border: "none", outline: "none", borderRadius: "10px"}}>Recycle</button>
        </div>

      
    </div>
  );
};

export default ChartExample;
