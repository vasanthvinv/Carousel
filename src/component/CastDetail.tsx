
  import "./Cast.css";
import { data } from "./ScrollView";
import React, { useRef } from "react";

const CastDetail = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="header">The Greatest of All Time / Cast</div>
      <div className="Casts">
      <button className="left-arrow"  onClick={scrollLeft}>{"<"}</button>
      <button className="right-arrow" onClick={scrollRight}>{">"}</button>
        <div className="CastContainer" ref={carouselRef} >
          {data.map((item) => (
            <div className="CastCard" key={item.link}>
              <a href={item.link} target="_blank" rel="noreferrer" >
                <img src={item.image} alt={item.name} />
                <div>{item.name}</div>
                <div>{item.cast}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default CastDetail;
