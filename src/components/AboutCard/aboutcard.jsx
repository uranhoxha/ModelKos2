import { useEffect, useState } from "react";
import "./aboutcard.scss";
import model1 from "../../assets/aboutModel1.webp";
import model2 from "../../assets/aboutModel2.webp";
import arrowCircle from "../../assets/text.svg";

function AboutCard({ cardType }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for resize events
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="aboutCard-container">
      {(!isMobile || cardType === "first") && (
        <div className="aboutCard one">
          <img src={arrowCircle} alt="" className="arrowCircle" />
          <img src={model1} alt="Model 1" />
          <div className="aboutCard-content">
            <h3>Dea Gashi</h3>
            <div className="aboutCard-info">
              <p>Model</p>
              <p>•</p>
              <p>Photography</p>
              <p>•</p>
              <p>Artist</p>
            </div>
            <h3>19 May 2022</h3>
          </div>
        </div>
      )}

      {(!isMobile || cardType === "second") && (
        <div className="aboutCard two">
          <img src={model2} alt="Model 2" />
          <div className="aboutCard-content">
            <h3>BLERTA BERISHA</h3>
            <div className="aboutCard-info">
              <p>Model</p>
              <p>•</p>
              <p>Photography</p>
              <p>•</p>
              <p>Artist</p>
            </div>
            <h3>19 May 2022</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutCard;
