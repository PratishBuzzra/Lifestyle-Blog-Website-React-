import React from "react";
import pb from "../../assets/pb.jpg";
import "./HomeAboutStyles.css";
import HomeAboutData from "./HomeAboutData";
const HomeAbout = () => {
  return (
    <div className="homeabout">
      <HomeAboutData
        title="What is this blog about?"
        textContent=" Welcome to my corner of the internet! This blog is where I share
             simple joys, routines, and reflections from my everyday life — whether
             it’s cozy mornings, favorite books, healthy recipes, or quiet travels.
             It’s all about slowing down, staying inspired, and living mindfully. I
             believe that life doesn’t have to be busy to be meaningful. Through
             this space, I explore the little things that bring comfort and joy — a
             fresh cup of coffee, a well-lit room, or a walk in the park. I write
             not just to document my experiences, but to connect with others who
             find beauty in simplicity. Whether you're here for inspiration,
             self-care ideas, or just a gentle pause in your day, I hope this blog
             feels like a warm, calming space — the kind where you can take a
             breath, feel understood, and maybe discover something new about
             yourself. Thanks for being here — I’m so glad you stopped by."
             image = {pb}
             classname="home-abt-img"
      />
    </div>
  );
};

export default HomeAbout;
