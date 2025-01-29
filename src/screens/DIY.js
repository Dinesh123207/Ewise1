
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';
import React from 'react';

import diy1 from "../images/diy1.jpg";
import diy2 from "../images/diy2.jpg";
import diy3 from "../images/diy3.jpg";
import diy4 from "../images/diy4.jpg";
import diy5 from "../images/diy5.jpg";
import diy6 from "../images/diy6.jpg";
import diy7 from "../images/diy7.jpg";
// import diy8 from "../images/diy8.jpg";
import diy9 from "../images/diy9.jpg";
import diy10 from "../images/diy10.jpg";
import diy11 from "../images/diy11.jpg";
import diy12 from "../images/diy12.jpg";
import diyBanner from "../images/diyBanner.jpg";
// import diy7 from "../images/diy7.jpg";



const cardContent = [
  {
    title: 'Old Blender Into a Lamp',
    description: 'If you have a dead blender, why not give it an honorable afterlife and turn it into a stunning lamp? You’ll need to re-wire the blender such that the original switch controls the new lights.',
    image: diy1, 
    youtubeLink: 'https://www.youtube.com/shorts/SrCr-7AyJgc',
  },
  {
    title: 'Computer Parts Into Jewelry',
    description: 'The final destination for dead computer parts does not have to the scrapheap. Here we have cool unique jewelry made from resistors, wires, circuit boards, and more. ',
    image: diy2, 
    youtubeLink: 'https://www.youtube.com/shorts/DJIcT_EqtSM',
  },
  {
    title: 'Recycled Materials Into a Robotic Arm',
    description: 'This robotic arm would not fully serve as your own private butler, but it will still make things simpler for you—and it will be really fun.',
    image: diy3, 
    youtubeLink: 'https://youtu.be/Etow1QnrANg',
  },
  {
    title: 'Old Computer Into an Aquarium',
    description: 'If you were thinking about buying an aquarium to add an exclusive touch to your home, do not rush out and spend your cash—because you might already have one sitting around.',
    image: diy4, 
    youtubeLink: 'https://youtu.be/D-Qy3KybFrg',
  },
  {
    title: 'Old Computer Into a Home Theater',
    description: 'Your old workhorse may not be the best choice to keep up with your current daily needs, but it can be an excellent dedicated video hub.',
    image: diy5, 
    youtubeLink: 'https://youtu.be/QSU7DQiKrFo',
  },
  {
    title: 'Old Computer Into a Jukebox',
    description: 'If your old PC is not quite reliable at handling video playback, you can still use it a dedicated audio server.',
    image: diy6, 
    youtubeLink: 'https://youtu.be/D-Qy3KybFrg',
  },
  {
    title: 'Old Computer Into a Pet Bed',
    description: 'You can repurpose those iconic computers into cool pet beds for cats and small dogs.',
    image: diy7, 
    youtubeLink: 'https://youtu.be/xCRQvZmprJU',
  },
  {
    title: 'Old iPod Into a Portable Drive',
    description: 'Your old iPod could still serve as an extra backup drive.',
    image: diy6, 
    youtubeLink: 'https://youtu.be/GUjIJNHXg5k',
  },
  {
    title: 'Old Webcam Into a Home Security System',
    description: 'Webcams will serve the purpose of home security system when paired with the right software.',
    image: diy9, 
    youtubeLink: 'https://youtu.be/YntmlWeWsAo',
  },
  {
    title: 'Old Phone Into a Security Camera',
    description: 'You do not have to break the bank to set up a security system for your home. If you have an old smartphone, it is time to put it to good use.',
    image: diy10, 
    youtubeLink: 'https://youtu.be/YntmlWeWsAo',
  },
  {
    title: 'Old CDs Into Art',
    description: 'Do you still have some old CDs gathering dust in your room. Here is a great way to turn them into eye-catching pieces of art.',
    image: diy11, 
    youtubeLink: 'https://youtu.be/s2qsroLbFlM',
  },
  {
    title: 'Old TV Into Storage',
    description: 'You may be tempted to toss your old TV, but this enchanting project idea will inspire you to change your mind.',
    image: diy12, 
    youtubeLink: 'https://youtu.be/zr3CZs1AHGs',
  },
];

const DIY = () => {
  const getRandomSize = () => {
    const minWidth = 150;
    const maxWidth = 300;
    return Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  };

  return (
    <>
    <div>
      <TopBanner/>
    </div>
        <div>
            <Navbar/>
        </div>

        <div style ={{boxShadow: "2px 5px 4px rgba(0, 0, 0, 0.7)", marginBottom: "50px"}}>
          <img src = {diyBanner}/>
        </div>
        <div className="cards-container">
            {cardContent.map((card, index) => (
                <div
                key={index}
                className="card"
                style={{ width: `${getRandomSize()}px` }}
                >

                <a href={card.youtubeLink} target="_blank" rel="noopener noreferrer" style = {{textDecoration: "none", color: "#325242", textAlign: "left"}}><h4><strong>{card.title}</strong></h4></a>
                <br/>
                <img src={card.image} alt={`Image for ${card.title}`} style = {{borderRadius: "20px"}} />
                {/* <br/>
                <br/>
                <p style = {{color: "black", textAlign: "left"}}>{card.description}</p> */}
                {/* <a href={card.youtubeLink} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                </a> */}
                </div>
            ))}
        </div>
        <div>
            <Footer />
        </div>
    </>
  );
};

export default DIY;
