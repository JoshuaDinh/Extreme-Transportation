import React from "react";
import "./gallery.css";
import photo1 from "../../gallery/1.jpg";
import photo2 from "../../gallery/2.jpg";
import photo3 from "../../gallery/3.jpg";
import photo4 from "../../gallery/4.jpg";
import photo5 from "../../gallery/5.jpg";
import photo6 from "../../gallery/6.jpg";
import photo7 from "../../gallery/7.jpg";
import photo8 from "../../gallery/8.jpg";
import photo9 from "../../gallery/9.jpg";
import photo10 from "../../gallery/10.jpg";
import photo11 from "../../gallery/11.jpg";
import photo12 from "../../gallery/12.jpg";
import photo13 from "../../gallery/13.jpg";

export const Gallery = () => {
  return (
    <div className="gallery-container">
      <div class="container">
        <div class="gallery">
          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo1} />
          </div>

          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo2} />
          </div>

          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo3} />
          </div>

          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo4} />
          </div>

          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo5} />
          </div>

          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo6} />
          </div>
          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo10} />
          </div>
          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo8} />
          </div>
          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo9} />
          </div>
          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo7} />
          </div>
          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo11} />
          </div>
          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo12} />
          </div>
          <div class="gallery-item">
            <img alt="" class="gallery-image" src={photo13} />
          </div>
        </div>
      </div>
    </div>
  );
};
