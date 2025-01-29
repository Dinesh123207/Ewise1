import React, { useEffect, useState } from 'react';

const UserDetails = () => {
 const [buyerDetails, setBuyerDetails] = useState(null);

 useEffect(() => {
   const fetchBuyerDetails = async () => {
     try {
       const response = await fetch('http://localhost:5000/api/getbuyers');
       const data = await response.json();
       if (data.success && data.buyers.length > 0) {
         setBuyerDetails(data.buyers[0]);
       }
     } catch (error) {
       console.error('Error fetching buyer details:', error);
     }
   };

   fetchBuyerDetails();
 }, []);

 return (
  <div>
      {buyerDetails ? (
        <div>
        <h2 style={{margin: "50px", color: '#325343 '}}>User Profile</h2>
        <p style={{ fontSize: '20px', color: 'black' }}>Name: {buyerDetails.name}</p>
        <p style={{ fontSize: '20px', color: 'black' }}>Email: {buyerDetails.email}</p>
        <p style={{ fontSize: '20px', color: 'black' }}>Password: {buyerDetails.password}</p>
        <p style={{ fontSize: '20px', color: 'black' }}>PhoneNum: {buyerDetails.PhoneNum}</p>
      </div>
      
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetails;