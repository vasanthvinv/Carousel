import "./Cast.css";
import { data } from "./ScrollView";
import React, {useRef } from "react";

const Casts = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 600;

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= scrollAmount;
    }
  };

  return (
    <div>
      <div className="header">The Greatest of All Time / Cast</div>
      <div className="Casts">
       {  <button className="left-arrow" onClick={scrollLeft}>
          {"<"}
        </button>}
        <button className="right-arrow" onClick={scrollRight}>
          {">"}
        </button>
        <div className="CastContainer" ref={containerRef}>
          {data.map((item) => (
            <div className="CastCard" key={item.link}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.name} className="image" />
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

export default Casts;
