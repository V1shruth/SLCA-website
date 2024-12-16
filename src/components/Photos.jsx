import { useState } from "react";

import photo1 from "../assets/photos/photo1.jpeg";
import photo2 from "../assets/photos/photo2.jpeg";
import photo3 from "../assets/photos/photo3.jpeg";
import photo4 from "../assets/photos/photo4.jpeg";
import photo5 from "../assets/photos/photo5.jpeg";
import photo6 from "../assets/photos/photo6.jpeg";
import photo7 from "../assets/photos/photo7.jpeg";
import photo8 from "../assets/photos/photo8.jpeg";
import photo9 from "../assets/photos/photo9.jpeg";

import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./Photos.css";

const PHOTOS = [
  { url: photo1 },
  { url: photo2 },
  { url: photo3},
  { url: photo4},
  { url: photo5},
  { url: photo6},
  { url: photo7},
  { url: photo8},
  { url: photo9},
];

function Photos() {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((imageIndex) => {
      if (imageIndex === 0) {
        return PHOTOS.length - 1;
      }
      return imageIndex - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((imageIndex) => {
      if (imageIndex === PHOTOS.length - 1) {
        return 0;
      }
      return imageIndex + 1;
    });
  };

  return (
    <section
      aria-label="Photos Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {PHOTOS.map((logo, index) => (
          <img
            key={logo.url}
            src={logo.url}
            alt={logo.alt}
            aria-hidden={imageIndex !== index}
            className= "photos-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="photos-slider-button"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="photos-slider-button"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {PHOTOS.map((_, index) => (
          <button
            key={index}
            className="photos-slider-dot-button"
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden={true} />
            ) : (
              <Circle aria-hidden={true} />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Photos;
