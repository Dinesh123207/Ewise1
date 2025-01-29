import React, { useEffect, useRef, useState }  from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/PricesonMarketplace.css'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Notification() {
    const form = useRef();

  const [prices, setPrices] = useState([]);
  const { email } = useParams();

  const fetchPrices = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getprices`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch prices');
      }
  
      const data = await response.json();
      setPrices(data.prices);
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };
  
  const sendEmail = async (email, type) => {
    try {
      const res = await axios.post('http://localhost:5001/name', { name: email, type: "pickup" });
      console.log(res);
      console.log("hogaya");
  
      // Find the user by email in the prices array
      const updatedPrices = prices.map((price) => {
        if (price.email === email) {
          // Update the reward points for the specific user using immutability
          const updatedPrice = { ...price, rewardPoints: (price.rewardPoints || 0) + 2, sold: true };
          return updatedPrice;
        }
        return price;
      });
      setPrices(updatedPrices);

      // Update rewardPoints in the database
      await axios.post('http://localhost:5000/api/updatepoints', {
        email,
        points: 2,
      });
  
    } catch (error) {
      console.error(error, "Error updating reward points");
    }
    console.log("Sending email...");
  };
  

  useEffect(() => {
    fetchPrices();
  }, [email]);

  const handleApprove = async (email) => {
    try {
      await sendEmail(email, "pickup");
    } catch (error) {
      console.error(error, "Error sending email");
    }
  };

  const handleReject = (email) => {
    console.log(`Email to ${email} rejected.`);
    // Perform any action needed when rejecting the email, if necessary
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <h1>Orders Received</h1>

      <form ref={form}>
        <div className="container">
          {prices.map((price, index) => (
            <div
              key={price._id}
              style={{
                // Styles for each price item
              }}
            >
              {/* Displaying price details */}

              {!price.sold && (
                <>
                  <p style={{ color: 'green', fontSize: "25px" }}>Item Available</p>
                  {/* Approve and Reject buttons */}
                  <div>
                    <button
                      onClick={() => handleApprove(price.email)}
                      style={{ color: "black", fontSize: "20px", marginRight: "10px" }}
                    >
                      Yes
                    </button>

                    <button
                      onClick={() => handleReject(price.email)}
                      style={{ color: "black", fontSize: "20px" }}
                    >
                      No
                    </button>
                    <div>
                        {price.email}
                    </div>
                  </div>
                </>
              )}

              {/* Display reward points and sold status */}
              {/* ... */}
            </div>
          ))}
        </div>
      </form>

      <div>
        <Footer />
      </div>
    </div>
  );
}