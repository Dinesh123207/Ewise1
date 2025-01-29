import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const ApprovedProducts = () => {
  const [approvedProducts, setApprovedProducts] = useState([]);
  const userEmail = localStorage.getItem('userEmail');

  useEffect(() => {
    const fetchApprovedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getprices');

        if (response.data.success) {
          // Log the fetched products to the console
          console.log('Fetched Products:', response.data.prices);

          // Filter products by approved status and user's email
          const filteredProducts = response.data.prices.filter(
            // product => product.Status === 'Approved' && product.email === userEmail
            product => product.email === userEmail
          );

          console.log('Filtered Products:', filteredProducts); // Log the filtered products

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


  const sendEmail = async (email, type) => {
    try {
      const res = await axios.post('http://localhost:5001/name', { name: email, type });
      console.log(res);
      console.log("hogaya");  
  
    } catch (error) {
      console.error(error, "Error updating reward points");
    }
    console.log("Sending email...");
  };
  


  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <h1 style = {{color: "black"}}><strong>Do You Want To Book a Pickup?</strong></h1>
      <div className='container'>
        {approvedProducts.map((product) => (
          <div key={product._id}>
            <div className = "card">
              <h3 style = {{color: "black"}}><strong>Name: {product.name}</strong></h3>
              <p style = {{color: "black"}}>Price: {product.price}</p>
              <div className = "btn btn-info" style = {{margin: "10px"}}>

              <div type="submit" onClick={(e) => { e.preventDefault(); sendEmail(product.email, "pickup"); }}>Yes</div>
              </div>
              <Link to = "/pickup">Done</Link>
              <Link to ="/selectitems">
                <div className = "btn btn-info" style = {{margin: "10px", marginLeft: "30px"}}>
                  No
                </div>
              </Link>
              
              
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default ApprovedProducts;
