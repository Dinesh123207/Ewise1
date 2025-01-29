import React, { useState } from "react";
import cardImage1 from "../images/Chat.png"; // Replace with your actual image paths

export default function Contact2() {
  const [faqs, setFaqs] = useState(/* ... your FAQ data ... */);

  const toggleAnswer = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isExpanded = !updatedFaqs[index].isExpanded;
    setFaqs(updatedFaqs);
  };

  return (
    <div>
      <div className="mt-5 text-center">
        <h1 style={{ color: "black" }}>CONTACT US</h1>
        <p style={{ margin: "10px 0" }}>Your one-liner description here.</p>
      </div>

      {/* Contact Information Cards */}
      <div style={{ display: "flex", justifyContent: "space-around", margin: "20px" }}>
        <div style={contactCardStyle}>
          <p>Contact Information - 98XXXXXXXX</p>
        </div>
        <div style={contactCardStyle}>
          <p>Email ID - ewise.help@gmail.com</p>
        </div>
        <div style={contactCardStyle}>
          <p>Address - XX B, ABC Road, Delhi</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <div className="mt-5">
          <h1 style={{ color: "black", textAlign: "center" }}>FAQ</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index} style={{ margin: "10px" }}>
              <div
                className="faq-question"
                onClick={() => toggleAnswer(index)}
                style={faqQuestionStyle}
              >
                {faq.question}
              </div>
              <div>
                {faq.isExpanded && (
                  <div className="faq-answer" style={faqAnswerStyle}>
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards with Hover Effect */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} style={cardStyle}>
            <img src={cardImage1} alt={Card `${index + 1}`} style={cardImageStyle} />
            <div style={cardOverlayStyle}>Card {index + 1} Details</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline Styles
const contactCardStyle = {
  backgroundColor: "#323232",
  width: "250px",
  borderRadius: "20px",
  height: "40px",
  margin: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const faqQuestionStyle = {
  backgroundColor: "#323232",
  width: "600px",
  borderRadius: "20px",
  height: "35px",
  margin: "10px",
  paddingTop: "5px",
  cursor: "pointer",
};

const faqAnswerStyle = {
  marginRight: "250px",
};

const cardStyle = {
  position: "relative",
  width: "250px",
  height: "150px",
  overflow: "hidden",
  margin: "10px",
};

const cardImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s",
};

const cardOverlayStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  fontSize: "1.5em",
  opacity: 0,
  transition: "opacity 0.5s",
};

// Hover effect styles
const hoverEffectStyle = {
  ":hover": {
    img: {
      transform: "scale(1.1)",
    },
    ".card-overlay": {
      opacity: 1,
    },
  },
};