import React, { useEffect, useRef } from "react";
import "./../css/main.css";
import "./../css/noscript.css";

const Project = ({ name, desc, link, image, animationClass }) => {
  const sectionRef = useRef(null);

  //   useEffect(() => {
  //     if (sectionRef.current) {
  //       sectionRef.current.classList.add(animationClass);
  //     }
  //   }, []);

  return (
    <section ref={sectionRef}>
      {/* Uncomment and use this if have images */}
      {/* <a href="#" className="image">
        <img src={image} alt="" data-position="center center" />
      </a> */}
      <div className="content">
        <div className="inner">
          <h2>{name}</h2>
          <p>{desc}</p>
          <ul className="actions">
            <li>
              <a href={link} className="button">
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;
