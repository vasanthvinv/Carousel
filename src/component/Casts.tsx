import "./Cast.css";
import { data } from "./ScrollView";
import React, { useState } from "react";

const Casts = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const scrollLeft = () => {
    const container = document.querySelector(".CastContainer") as HTMLElement;
setScrollPosition((prevIndex) => (prevIndex - 45) % 90);
      container.style.transform = `translateX(-${scrollPosition}%)`;
      console.log(scrollPosition);
      
  };

  const scrollRight = () => {
    const container = document.querySelector(".CastContainer") as HTMLElement;
    container.style.transform = `translateX(-${0 + scrollPosition }%)`;
    setScrollPosition( (prevIndex) => (prevIndex + 45 ) % 90);

    console.log(scrollPosition);
  };

  return (
    <div>
      <div className="header">The Greatest of All Time / Cast</div>
      <div className="Casts">
        <button className="left-arrow" onClick={scrollLeft}>
          {"<"}
        </button>
        <button className="right-arrow" onClick={scrollRight}>
          {">"}
        </button>
        <div className="CastContainer">
          {data.map((item) => (
            <div className="CastCard" key={item.link}>
              <a href={item.link} target="_blank" rel="noreferrer">
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

export default Casts;
