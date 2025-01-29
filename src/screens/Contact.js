import React from 'react';
import location_contact from "../images/location_contact.png";
import contact_contact from "../images/contact_contact.png";
import email_contact from "../images/email_contact.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
const Contact = () => {
  const containerStyle = {
    textAlign: 'center',
    color: "black"
  };

  const titleStyle = {
    fontWeight: 'bold',
    color: "black"
  };

  const descriptionStyle = {
    marginTop: '10px',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '300px',
    height: '400px',
    margin: '0 10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const cardImageStyle = {
    width: '100%',
    height: '50%',
    objectFit: 'cover',
  };

  const cardTextContainerStyle = {
    padding: '10px',
    background: '#fff',
  };

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contact Us</h1>
      <p style={descriptionStyle}>Get in touch with us for any inquiries or feedback.</p>

      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <img src={location_contact} alt="Card 1" style={cardImageStyle} />
          <div style={cardTextContainerStyle}>
            <h2>Email</h2>
            <p>ewise.one.stop.solution@gmail.com</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src={contact_contact} alt="Card 2" style={cardImageStyle} />
          <div style={cardTextContainerStyle}>
            <h2>Address</h2>
            <p>123 Main St, Cityville</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src={email_contact} alt="Card 2" style={cardImageStyle} />
          <div style={cardTextContainerStyle}>
            <h2>Contact</h2>
            <p>9871993294</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Contact;