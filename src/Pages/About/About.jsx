import React from "react";
import HomeAboutData from "../../Components/HomeComponents/HomeAboutData";
import pb from "../../assets/pb.jpg";
import touch from "../../assets/touch.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './AboutStyles.css'
const About = () => {
  return (
    <div className="about-container">
      <div className="homeabout">
        <HomeAboutData
          title="My name is Pratish Bajracharya"
          textContent="Hello! I’m Pratish Bajracharya — a creative soul with a love for simplicity, intentional living, and capturing the beauty of everyday moments.
This blog is my personal space to share pieces of my life — from peaceful routines and thoughtful reflections to cozy comforts, good food, and quiet travels.

I believe life is made meaningful through the small things: a slow morning, a handwritten journal, meaningful conversations, and mindful pauses. My goal is to inspire a life that feels grounded, clear, and true — not just busy.

I’m glad you’re here. Whether you're seeking inspiration, calm, or connection, I hope you find something in these pages that resonates with you."
          image={pb}
          classname="home-abt-img"
        />
      </div>
      <div className="about-touch">
      
          <img src={touch} alt="img" className="about-touch-img"/>
          <div className="touch-description">
            <h3 className="about-touch-title">Lets be in touch</h3>
            <div className='touch-icons'>
                        <FaFacebookSquare className="touch-icon"/>
                        <FaInstagramSquare className="touch-icon"/>
                        <FaSquareXTwitter className="touch-icon"/>
                        
                  
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default About;
