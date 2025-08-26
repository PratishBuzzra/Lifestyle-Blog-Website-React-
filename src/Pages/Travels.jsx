import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import { travelImg } from "../Datas/GalleryData";
import { travelData } from "../Datas/TravelContentDB";
import BlogsData from "../Components/BlogCard/BlogsData";

const Travels = () => {
  return (
    <div>
      <Carousel data={travelImg} />
      <div className="blogs-contents">
        <h3 className="travel-title">Travels</h3>
        <div className="blog-card">
          {travelData.map((data, index) => (
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

export default Travels;
