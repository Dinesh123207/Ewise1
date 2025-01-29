import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Plastic from "../images/plastic.png";
import Al from "../images/al.png";
import Cu from "../images/cu.png";
import Reward from "../images/Reward.png";
import TopBanner from '../components/TopBanner';
const CarbonFootprints = () => {
  const data = [
    {
      "name": "Kitchen Appliances",
      "copper": "8",
      "aluminum": "3",
      "plastic": "16",
      "weight":"1.61",
      "CO2": "1.78",
    },
    {
      "name": "Heating and Ventilation",
      "copper": "7",
      "aluminum": "350",
      "plastic": "133",
      "weight":"7",
      "CO2": "7.74",
    },
    {
      "name": "Microwave",
      "copper": "1278",
      "aluminum": "612",
      "plastic": "1904",
      "weight":"13.6",
      "CO2": "15.03",
    },
    {
      "name": "Vacuum Cleaner",
      "copper": "49",
      "aluminum": "365",
      "plastic": "2418",
      "weight":"4.05",
      "CO2": "4.48",
    },
    {
      "name": "Personal Care",
      "plastic": "174",
      "aluminum": "21",
      "copper": "44",
      "CO2": "0.44",
      "weight":"0.4",
    },
    {
      "name": "TV",
      "copper": "5300",
      "aluminum": "9",
      "plastic": "150",
      "weight":"63",
      "CO2": "18",
    },
    {
      "name": "Dishwasher",
      "copper": "10714",
      "aluminum": "101",
      "plastic": "404",
      "weight":"154",
      "CO2": "50.54",
    },
    {
      "name": "Washing Machine",
      "copper": "10709",
      "aluminum": "2168",
      "plastic": "920",
      "weight":"156",
      "CO2": "65.7",
    },
    {
      "name": "Clothes Dryer",
      "copper": "19710",
      "aluminum": "2431",
      "plastic": "3285",
      "weight":"156",
      "CO2": "65.7",
    },
    {
      "name": "Fridge",
      "copper": "13275",
      "aluminum": "945",
      "plastic": "765",
      "weight":"51",
      "CO2": "45",
    },
    {
      "name": "Freezer",
      "copper": "11970",
      "aluminum": "1890",
      "plastic": "765",
      "weight":"51",
      "CO2": "45",
    },
    {
      "name": "Air Conditioning",
      "copper": "6922",
      "aluminum": "2025",
      "plastic": "8285",
      "weight":"68",
      "CO2": "36.82",
    },
    {
      "name": "Water Boiler",
      "copper": "13001",
      "aluminum": "691",
      "plastic": "401",
      "weight":"24.65",
      "CO2": "22.3",
    },
    {
      "name": "Fluorescence Tube",
      "copper": "2",
      "aluminum": "0",
      "plastic": "0",
      "weight":"0.01",
      "CO2": "0.14",
    },
    {
      "name": "Lithium Battery",
      "copper": "0",
      "aluminum": "1",
      "plastic": "3",
      "weight":"0.073",
      "CO2": "0.015",
    },
    {
      "name": "Nickel Battery",
      "copper": "1",
      "aluminum": "0",
      "plastic": "0",
      "weight":"0.107",
      "CO2": "0.023",
    },
    {
      "name": "phone",
      "copper": "59",
      "aluminum": "3",
      "plastic": "13",
      "weight":"0.14",
      "CO2": "0.013",
    },
    {
      "name": "laptop",
      "copper": "1140",
      "aluminum": "682",
      "plastic": "122",
      "weight":"3.21",
      "CO2": "2.9",
    },
    {
      "name": "printer",
      "copper": "3666",
      "aluminum": "0",
      "plastic": "126",
      "weight":"15.69",
      "CO2": "6",
    },
    {
      "name": "router",
      "copper": "580",
      "aluminum": "0",
      "plastic": "0",
      "weight":"2.27",
      "CO2": "2.05",
    },

  ];

  const [inputName, setInputName] = useState('');
  const [productDetails, setProductDetails] = useState(null);

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

  const handleSearch = () => {
    const foundProduct = data.find(product => product.name.toLowerCase() === inputName.toLowerCase());
    if (foundProduct) {
      const sumCopperAluminum = parseInt(foundProduct.copper) + parseInt(foundProduct.aluminum);
  
      let rewardPoints = 0;
  
      if (sumCopperAluminum >= 0 && sumCopperAluminum<100) {
        rewardPoints = 1;
      } else if (sumCopperAluminum >= 100 && sumCopperAluminum <= 499) {
        rewardPoints = 3;
      } else if (sumCopperAluminum >= 500) {
        rewardPoints = Math.round((sumCopperAluminum * 0.1));
      }
  
      foundProduct.rewardPoints = rewardPoints;
      setProductDetails(foundProduct);
    } else {
      setProductDetails(null);
    }
  };
  

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <TopBanner/>
    </div>
    <div style = {{height: "130vh"}}>
    <div style = {{marginTop: "45px"}}>
      <input
        type="text"
        style ={{backgroundColor: "white", color: "black", borderRadius: "20px", border: "2px solid", padding: "8px", paddingLeft: "13px", width: "400px"}}
        placeholder="Enter product name"
        value={inputName}
        onChange={handleInputChange}
      />
      <button className = "btn" style = {{borderColor: "black", border: "2px solid", backgroundColor: "white", marginLeft: "20px", color: "black", borderRadius: "10px"}} onClick={handleSearch}>Search</button>
      <br/>
      <br/>
    </div>
    <div>
      {productDetails && (
        <div>
          <br/>
          <div style = {{backgroundColor: "#325242", padding: "20px",height: "650px"}}>
            {productDetails.rewardPoints !== undefined && (
              <h3 style = {{color: "white"}}>
                If you continue with this product, you will earn {" "}
                <span style={{ color: "yellow" }}>
                  {productDetails.rewardPoints} <span><img src = {Reward} style = {{marginBottom: "10px"}}/>s</span>
                </span>
              </h3>
            )}
            <br/>
            <div style = {{display: "flex", color: "white", marginLeft: "130px"}}>
              <div className='card' style = {{width: "250px", backgroundColor: "#457777", marginRight: "70px"}}>
                <img src = {Plastic} style = {{width: "200px"}}/>
                <br/>
                <br/>
                <h3><p style = {{margin: "0px"}}><strong>{productDetails.copper}g</strong></p></h3>
              </div>
              <div className='card' style = {{width: "250px", backgroundColor: "#457777", marginRight: "70px"}}>
                <img src = {Al} style = {{width: "200px"}}/>
                <br/>
                <br/>
                <h3><p style = {{margin: "0px"}}><strong>{productDetails.aluminum}g</strong></p></h3>
              </div>
              <div className='card' style = {{width: "250px", backgroundColor: "#457777", marginRight: "70px"}}>
                <img src = {Cu} style = {{width: "200px"}}/>
                <br/>
                <br/>
                <h3><p style = {{margin: "0px"}}><strong>{productDetails.plastic}g</strong></p></h3>
              </div>
            </div>
            <br/>
            <br/>
            <div style = {{color: "white"}}>
              <h3>You collected a total of <span style = {{color: "yellow"}}>{productDetails.weight} kg</span> of e-waste. </h3>
              <h3>If correctly recycled, this saved up to <span style = {{color: "yellow"}}> {productDetails.CO2} kg of CO2 equivalent.</span> </h3>
            </div>
            <br/>
             <div className = "btn btn-info" style = {{backgroundColor: "yellow"}}>
               <a style = {{textDecoration: "none", color: "black"}} href = "http://192.168.33.109:8501/">
                 Move To Questionnaire
               </a>
             </div>
          </div>
        </div>
      )}
    </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default CarbonFootprints;
