// Stats.js
import { Pie } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
function ProductNames() {
  const [uniqueItemData, setUniqueItemData] = useState([]);

  const fetchRepairItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getprices");
      if (response.ok) {
        const repairData = await response.json();
        return repairData.prices.map((item) => item.name);
      } else {
        throw new Error("Failed to fetch repair data");
      }
    } catch (error) {
      console.error("Error fetching repair items:", error);
      return [];
    }
  };
  
  const fetchRecycleItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getpricesRecycle");
      if (response.ok) {
        const recycleData = await response.json();
        return recycleData.prices.map((item) => item.name);
      } else {
        throw new Error("Failed to fetch recycle data");
      }
    } catch (error) {
      console.error("Error fetching recycle items:", error);
      return [];
    }
  };
  
  const fetchDonateItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getpricesDonate");
      if (response.ok) {
        const donateData = await response.json();
        return donateData.prices.map((item) => item.name);
      } else {
        throw new Error("Failed to fetch donate data");
      }
    } catch (error) {
      console.error("Error fetching donate items:", error);
      return [];
    }
  };
  
  // Function to get unique names and their counts from all datasets
  const getUniqueItemData = async () => {
    try {
      const repairItems = await fetchRepairItems();
      const recycleItems = await fetchRecycleItems();
      const donateItems = await fetchDonateItems();
  
      // Combine all items
      const allItems = [...repairItems, ...recycleItems, ...donateItems];

      // Calculate counts for unique items
      const uniqueItems = {};
      allItems.forEach((item) => {
        uniqueItems[item] = (uniqueItems[item] || 0) + 1;
      });

      // Convert uniqueItems object to an array of objects for easier rendering
      const uniqueItemArray = Object.keys(uniqueItems).map((name) => ({
        name,
        count: uniqueItems[name],
      }));

      return uniqueItemArray;
    } catch (error) {
      console.error("Error fetching item data:", error);
      return [];
    }
  };
  
  useEffect(() => {
    getUniqueItemData().then((data) => {
      setUniqueItemData(data);
    });
  }, []);

  // Extracting labels and counts for chart
  const labels = uniqueItemData.map((item) => item.name);
  const counts = uniqueItemData.map((item) => item.count);

  // Data for the bar chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Count of Unique Products',
        data: counts,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      
      <div style={{ width: '600px', margin: '20px auto' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default ProductNames;