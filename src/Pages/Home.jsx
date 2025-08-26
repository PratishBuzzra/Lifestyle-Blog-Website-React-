import React from "react";
import Hero from "../Components/HomeComponents/Hero";
import HomeAbout from "../Components/HomeComponents/HomeAbout";
import HomeCategory from "../Components/HomeComponents/HomeCategory";
import HomePhilosophy from "../Components/HomeComponents/HomePhilosophy";
import Message from "../Components/MessageForm/Message";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeCategory />
      <HomePhilosophy />
      <h3 className="msg-title">Subscribe</h3>
      <Message />
    </div>
  );
};

export default Home;
