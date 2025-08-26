import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import { technologyImg } from "../Datas/GalleryData";
import { technologyData } from "../Datas/TechnologyContentDB";
import BlogsData from "../Components/BlogCard/BlogsData";

const Technology = () => {
  return (
    <div>
      <Carousel data={technologyImg} />
      <div className="blogs-contents">
        <h3 className="travel-title">Technology</h3>
        <div className="blog-card">
          {technologyData.map((data, index) => (
            <BlogsData
              key={index}
               blogId={data.id}
               blogCategory={data.category}
              blogImg={data.src}
              blogTitle={data.title}
              blogDate={data.date}
              blogText={data.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
