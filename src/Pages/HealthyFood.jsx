import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import { foodImg } from "../Datas/GalleryData";
import { HealthyFoodData } from "../Datas/HealthyFoodDB";
import BlogsData from "../Components/BlogCard/BlogsData";

const HealthyFood = () => {
  return (
    <div>
      <Carousel data={foodImg} />
      <div className="blogs-contents">
        <h3 className="travel-title">Healthy Food</h3>
        <div className="blog-card">
          {HealthyFoodData.map((data, index) => (
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

export default HealthyFood;
