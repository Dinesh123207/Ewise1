import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserDetails from '../components/UserDetails';
import profile from "../images/profile.png"

const UserDetailsReward = () => {
  const [approvedProducts, setApprovedProducts] = useState([]);
  const userEmail = localStorage.getItem('userEmail');

  useEffect(() => {
    const fetchApprovedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getprices');

        if (response.data.success) {
          const filteredProducts = response.data.prices.filter(
            product => product.email === userEmail
          );

          setApprovedProducts(filteredProducts);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (userEmail) {
      fetchApprovedProducts();
    }
  }, [userEmail]);

  return (
    <div>
      <Navbar />
      <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
        {approvedProducts.map((product) => (
          <div
            key={product._id}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              margin: '20px',
              padding: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'box-shadow 0.3s ease-in-out',
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'}
          >
            <div style={{ flex: 1 }}>
              <img
                src={profile} // Replace with your actual image URL
                alt={product.name}
                style={{
                  width: '200px', // Adjust the width as needed
                  height: '150px', // Adjust the height as needed
                  borderRadius: '8px',
                }}
              />
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
              <p style={{ color: 'Green', fontSize: '20px', textAlign: 'center' }}>
                Reward Points: {product.rewardPoints}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='details'>
      <UserDetails />
      </div>
      
      <Footer />
    </div>
  );
};

export default UserDetailsReward;