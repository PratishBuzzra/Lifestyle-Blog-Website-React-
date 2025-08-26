import React from "react";
import pbpb from "../../assets/pbpbpb.png";
import "./HomeAboutStyles.css";
import HomeAboutData from "./HomeAboutData";
const HomePhilosophy = () => {
  return (
    <div className="homeabout">
      <HomeAboutData
        title="My philosophy"
        textContent="Life doesn’t have to be perfect to be beautiful.
I believe in embracing slow moments, finding joy in everyday routines, and appreciating the little things — a quiet morning, a favorite book, a meaningful conversation.

This space is a reflection of my journey toward a more mindful, intentional life — one that values depth over noise, calm over chaos, and simplicity over excess.
I don’t have all the answers, but I do believe that showing up honestly, listening deeply, and living gently can shape a more fulfilling world.

This blog is not just about sharing — it's about connecting, inspiring, and encouraging each other to live with purpose, kindness, and clarity."
image = {pbpb}
classname="home-philo-img"
      />
    </div>
  );
};

export default HomePhilosophy;
