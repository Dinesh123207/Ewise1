import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const NotificationPopup = ({ message, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        backgroundColor: "#FFFCF6 ",
        color: "black",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        zIndex: 999,
        opacity: "0",
        animation: "fadeIn 0.5s forwards",
      }}
    >
      <p style={{ margin: "0" }}>{message}</p>

      <Link to="/blogs">
        <button
          style={{
            backgroundColor: "#325242",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "10px",
            
          }}
        >
          Know More
        </button>
      </Link>
      <button
        style={{
          backgroundColor: '#325242',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px',
          marginLeft: "10px"
        }}
        onClick={onClose}
      >

          Close
        </button>
    </div>
  );
};

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessages, setPopupMessages] = useState([
    "E-waste contains valuable metals like gold and silver.",
    "Globally, 50+ million tons of e-waste are generated annually.",
    "70% of toxic waste in landfills comes from discarded electronics.",
    "Recycling one million laptops saves energy equal to 3,657 homes annual use.",
    "UN predicts a 21% increase in e-waste by 2030.",
    "Rare metals like neodymium and indium are found in cell phones.",
    "Only a small fraction of e-waste is formally recycled.",
    "E-waste is the fastest-growing waste globally.",
    "E-waste contains hazardous materials, posing health risks.",
    "Recycling electronics is more energy-efficient than extracting raw materials.",
    'E-waste is a goldmine in "urban mining" for valuable materials.',
    "US e-waste annually could fill 1,000 football stadiums.",
    "Old smartphones contain more gold per ton than gold ore.",
    "China tops the list as the largest generator of e-waste.",
    "Discarded electronics create hazards in developing countries.",
    "E-waste makes up about 4% of the worlds total waste.",
    "Mobile phones often outlive their two-year contracts.",
    "E-waste can transform into park benches and car parts.",
    '"Right to repair" fights for easier electronic device fixes.',
    "The worlds first e-waste recycling started in Switzerland in the 70s.",
    // Add the new strings here
    "Your new message 1.",
    "Your new message 2.",
    // ...
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const closePopup = () => {
    setShowPopup(false);
    setCurrentMessageIndex((prevIndex) => prevIndex + 1);

    if (currentMessageIndex === popupMessages.length - 1) {
      setCurrentMessageIndex(0);
    }
  };

  useEffect(() => {
    const showNotification = () => {
      setShowPopup(true);
      setPopupMessages((prevMessages) => [...prevMessages]);
    };

    const notificationInterval = setInterval(showNotification, 10000);

    return () => clearInterval(notificationInterval);
  }, [popupMessages]);

  return (
    <div>
      {showPopup && (
        <NotificationPopup
          message={popupMessages[currentMessageIndex]}
          onClose={closePopup}
        />
      )}
      {/* Your main app content goes here */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
