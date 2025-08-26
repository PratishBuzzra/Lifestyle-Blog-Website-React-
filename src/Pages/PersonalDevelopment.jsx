import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import { perosonalDevImg } from "../Datas/GalleryData";
import { PersonalityData } from "../Datas/PersonalDevContentDDB";
import BlogsData from "../Components/BlogCard/BlogsData";

const PersonalDevelopment = () => {
  return (
    <div>
      <Carousel data={perosonalDevImg} />
      <div className="blogs-contents">
        <h3 className="travel-title">Personal Development</h3>
        <div className="blog-card">
          {PersonalityData.map((data, index) => (
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

export default PersonalDevelopment;
