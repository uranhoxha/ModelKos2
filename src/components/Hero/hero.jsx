import { GoTriangleDown } from "react-icons/go";
import imageCircle from "../../assets/imageCircle.svg";
import letterM from "../../assets/letterM.svg";
import model1 from "../../assets/heroModel.webp";
import model2 from "../../assets/heroModel2.webp";
import arrowText from "../../assets/arrowText.svg";
import "./hero.scss";
import { IoLocationOutline } from "react-icons/io5";

function Hero() {
  return (
    <div className="hero-container section-padding">
      <img src={imageCircle} alt="imageCircle" className="hero-circle" />
      <div className="hero-content">
        <div className="hero-content-one">
          <div className="hero-title">
            <h1 className="hero-title-first">Hire a model or</h1>
            <h1>become one</h1>
          </div>
          <div className="hero-form">
            <div className="hero-input">
              <div>
                <img src={letterM} alt="modelkosLogo" />
                <input placeholder="Female Models" />
              </div>
              <GoTriangleDown className="icon-color" />
            </div>

            <div className="hero-input">
              <div>
                <IoLocationOutline className="icon-color" />
                <input placeholder="Find Location" />
              </div>
              <GoTriangleDown className="icon-color" />
            </div>
            <button className="hero-button">Find Model</button>
          </div>
        </div>
        <div className="hero-content-two">
          <img src={arrowText} alt="arrowText" className="hero-arrow" />
          <img src={model1} alt="modelOne" className="hero-model1" />
          <img src={model2} alt="modelTwo" className="hero-model2" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
