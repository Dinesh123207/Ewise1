import React, { useState } from 'react';
import '../styles/YourComponent.css';
import Navbar from '../components/Navbar';
import SellerList from './SellerList';
import { useDispatchCart, useCart } from '../components/ContextReducer';
import { Link } from 'react-router-dom';
export default function SelectItems() {
  let dispatch = useDispatchCart();
  let data = useCart();
  const [itemDetails, setItemDetails] = useState({ itemName: "", price: "", email: ""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', itemDetails.itemName);
    formData.append('price', itemDetails.price);
    formData.append('email', itemDetails.email);

    const resp = await fetch("http://localhost:5000/api/recycleItems", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: itemDetails.itemName, price: itemDetails.price, email: itemDetails.email }),
    });
    const json = await resp.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Details");
    }
    else{
      alert("Succesfully added to cart!")
    }
  };

  const onChange = (event) => {
    if (event.target.name === 'image') {
      setItemDetails({ ...itemDetails, [event.target.name]: event.target.files[0] });
    } else {
      setItemDetails({ ...itemDetails, [event.target.name]: event.target.value });
    }
  };

  const handleAddtoCart = async () => {
    await dispatch({ type: "ADD", name: itemDetails.itemName, price: itemDetails.price, email: itemDetails.email });
    console.log(data);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ position: 'absolute', top: 90, right: 500 }}>
        <Link to ="/stats"><div className = "btn btn-white " style = {{border: "2px solid black", color: "black"}}>View Stats</div></Link>
      </div>
      <div style={{ position: 'absolute', top: 90, right: 630 }}>
        <Link to = "/approvedProducts"><div className = "btn btn-white " style = {{border: "2px solid black", color: "black"}}>Approved Products</div></Link>
      </div>
      <hr style={{ width: '100%', marginTop: '70px', color: "black" }} />

      <div style = {{height: "200px", backgroundColor: "#325242", padding: "20px"}}>
        <h1><strong style = {{color: "white"}}>Add Product That You Want To Recycle</strong></h1>
      </div>
      <div className="container" style = {{backgroundColor: "#FFFCF6 ", borderRadius: "20px", marginLeft: "170px", marginTop: "40px"}}>
        <form onSubmit={handleSubmit} className="row g-3 align-items-center">
          <div className="col-md-4">
            <label htmlFor="itemName" className="form-label" style={{ fontWeight: 'bold', color: 'black' }}>
              Item Name
            </label>
            <input
              type="text"
              className="form-control form-control-light"
              placeholder="Enter the item name"
              name="itemName"
              value={itemDetails.itemName}
              onChange={onChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="price" className="form-label" style={{ fontWeight: 'bold', color: 'black' }}>
              Price
            </label>
            <input
              type="number"
              className="form-control form-control-light"
              placeholder="Enter Price"
              name="price"
              value={itemDetails.price}
              onChange={onChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold', color: 'black' }}>
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-light"
              placeholder="Enter Email"
              name="email"
              value={itemDetails.email}
              onChange={onChange}
            />
          </div>
          
          {/* <div className="col-md-4">
            <label htmlFor="image" className="form-label" style={{ fontWeight: 'bold', color: 'black' }}>
              Image
            </label>
            <input
              type="file"
              className="form-control form-control-light"
              accept="image/*"
              name="image"
              onChange={onChange}
            />
          </div> */}
          <div className="col-md-4">
            <button type="submit" className="btn btn-primary" onClick={handleAddtoCart} style = {{marginLeft: "350px", width: "200px", backgroundColor: "#325343 "}}>Add To cart</button>
          </div>
        </form>
      </div>
      <div>
        <SellerList />
      </div>
    </div>
  );
}
