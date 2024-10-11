import Carousel from "react-elastic-carousel";

import "./modeling.scss";

import model3 from "../../assets/model3.webp";
import kida from "../../assets/kida.webp";
import arrowCircle from "../../assets/arrowText.svg";

const breakPoints = [
  { width: 640, itemsToShow: 1, itemsToScroll: 1},
  { width: 768, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1024, itemsToShow: 2, itemsToScroll: 1 }
];

function Modeling() {
  return (
    <div className="modeling-container">
      <div className="modeling-title">
        <h1 className="modeling-titleOne">The Day Of</h1>
        <h1 className="modeling-titleTwo">Modeling</h1>
        <h1 className="modeling-titleThree"> Modelkos</h1>
      </div>
      <Carousel breakPoints={breakPoints}>
        <img src={model3} alt="ModelPhoto" className="model-photo" />
        
        <div className="modeling-image-two">
          <img src={kida} alt="ModelPhoto" className="model-photo" />
          <img
            src={arrowCircle}
            alt="arrowCircle"
            className="modeling-arrowCircle"
          />
        </div>
        <img src={model3} alt="ModelPhoto" className="model-photo" />
        
        <div className="modeling-image-two">
          <img src={kida} alt="ModelPhoto" className="model-photo" />
          <img
            src={arrowCircle}
            alt="arrowCircle"
            className="modeling-arrowCircle"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Modeling;
