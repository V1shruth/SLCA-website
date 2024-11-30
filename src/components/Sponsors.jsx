import { useState } from "react";

import companyLogo1 from "../assets/company_logos/AOPS Academy Resized.jpg";
import companyLogo2 from "../assets/company_logos/Chess Kings & Queens Resized.jpg";
import companyLogo3 from "../assets/company_logos/Chess.com Resized.jpg";
import companyLogo4 from "../assets/company_logos/Chipotle Resized.jpg";
import companyLogo5 from "../assets/company_logos/Jane Street Resized.jpg";
import companyLogo6 from "../assets/company_logos/Minnie's Resized.jpg";
import companyLogo7 from "../assets/company_logos/Texas Chess Center Resized.jpg";
import companyLogo8 from "../assets/company_logos/The Pop Parlour Resized.jpg";
import companyLogo9 from "../assets/company_logos/US Chess Federation Resized.jpg";
import companyLogo10 from "../assets/company_logos/US Chess Women Resized.jpg";
import companyLogo11 from "../assets/company_logos/Z Resized.jpg";

import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./Sponsors.css";

const LOGOS = [
  { url: companyLogo1, alt: "AOPS Academy Logo" },
  { url: companyLogo2, alt: "Chess Kings & Queens Logo" },
  { url: companyLogo3, alt: "Chess.com Logo" },
  { url: companyLogo4, alt: "Chipotle Logo" },
  { url: companyLogo5, alt: "Jane Street Logo" },
  { url: companyLogo6, alt: "Minnie's Logo" },
  { url: companyLogo7, alt: "Texas Chess Center Logo" },
  { url: companyLogo8, alt: "The Pop Parlour Logo" },
  { url: companyLogo9, alt: "The US Chess Federation Logo" },
  { url: companyLogo10, alt: "The US Women's Chess Federation Logo" },
  { url: companyLogo11, alt: "The Z Logo" },
];

function Sponsors() {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((imageIndex) => {
      if (imageIndex === 0) {
        return LOGOS.length - 1;
      }
      return imageIndex - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((imageIndex) => {
      if (imageIndex === LOGOS.length - 1) {
        return 0;
      }
      return imageIndex + 1;
    });
  };

  return (
    <section
      aria-label="Sponsors Slider"
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
        {LOGOS.map((logo, index) => (
          <img
            key={logo.url}
            src={logo.url}
            alt={logo.alt}
            aria-hidden={imageIndex !== index}
            className="sponsor-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="sponsors-slider-button"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="sponsors-slider-button"
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
        {LOGOS.map((_, index) => (
          <button
            key={index}
            className="sponsors-slider-dot-button"
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

export default Sponsors;
