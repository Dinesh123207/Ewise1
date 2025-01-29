import React from "react";
import Nabvar from "../components/Navbar";
import { Link } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import Footer from "../components/Footer";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import blog4 from "../images/blog4.png";
import blog5 from "../images/blog5.png";
import blog6 from "../images/blog6.png";
import blog7 from "../images/blog7.png";
export default function Blogs() {
  const cardContent = [
    {
      title: "Unveiling the Truth: Busting Common E-Waste Myths",
      description:
        "In the era of rapidly evolving technology, electronic devices have become an integral part of our lives. However, with this technological surge comes a growing concern – electronic waste or e-waste. Unfortunately...",
      image: blog2,
      link: "/blog2"
    },
    {
      title: "Transforming Waste into Wealth: A Guide to Repurposing E-Waste for a Sustainable Lifestyle",
      description:
        "In the age of rapid technological innovation, our lives are enriched by an array of electronic devices. However, with this progress comes...",
      image: blog3,
      link: "/blog3",
    },
    {
      title: "Old Blender Into a Lamp",
      description:
        "As we navigate the digital age, the rapid evolution of electronic devices brings with it a pressing concern—electronic waste, or e-waste. However, the future of e-waste is not bleak; it's marked by innovation, sustainable practices, and a commitment to creating a circular economy...",
      image: blog4,
      link: "/blog4",
    },
    {
      title: "Old Blender Into a Lamp",
      description:
        "If you have a dead blender, why not give it an honorable afterlife and turn it into a stunning lamp? You’ll need to re-wire the blender such that the original switch controls the new lights.",
      image: blog5,
      link: "/blog5",
    },
    {
      title: "Old Blender Into a Lamp",
      description:
        "If you have a dead blender, why not give it an honorable afterlife and turn it into a stunning lamp? You’ll need to re-wire the blender such that the original switch controls the new lights.",
      image: blog6,
      link: "/blog6",
    },
    {
      title: "Old Blender Into a Lamp",
      description:
        "If you have a dead blender, why not give it an honorable afterlife and turn it into a stunning lamp? You’ll need to re-wire the blender such that the original switch controls the new lights.",
      image: blog7,
      link: "/blog7"
    },
  ];
  return (
    <>
    <div style = {{backgroundColor: "#FFFCF6"}}>
      <div>
        <Nabvar />
      </div>
      <div>
        <TopBanner />
      </div>
        <br/>
      <div style={{ display: "flex", flexDirection: "column", height: "230vh", marginTop: "20px" }}>
        <div style={{ display: "flex", width: "1160px", borderRadius: "20px", marginLeft: "50px"}}>
          <img src={blog1} style = {{marginLeft: "10px", boxShadow: "2px 5px 4px rgba(0, 0, 0, 0.7)"}}/>
          <div style={{ textAlign: "left", margin: "10px 20px", marginRight: "10px", color: "black"}}>
            <Link to = "/blog1" style = {{textDecoration: "none", color: "black"}}>
              <h1>
                <strong style = {{color: "black"}}>The Silent Threat: Unveiling the Environmental Impact of E-Waste</strong>
              </h1>
            </Link>
            <p>In a world where technological advancements are celebrated, a silent threat looms large – electronic waste, or e-waste. As our dependence on electronic devices grows, so does the environmental impact of improperly managed electronic waste. In this blog post, we will delve into the various ways in which e-waste is affecting the environment and explore the role of initiatives like E-Wise in mitigating these impacts...</p>
          </div>
        </div>
        <br/>
        <div className="cards-container">
            {cardContent.map((card, index) => (
                <div
                key={index}
                className="card"
                style={{textAlign: "left", height: "450px", color: "black" }}
                >

                <img src={card.image} alt={`Image for ${card.title}`} />
                <br/>
                <br/>
                <Link to = {card.link} style = {{textDecoration: "none", textAlign: "left", color: "black"}}>
                  <h4><strong>{card.title}</strong></h4>
                </Link>
                <p>{card.description}</p>
                </div>
            ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
      </div>
    </>
  );
}