import Carousel from "react-elastic-carousel";

import model1 from "../../assets/models/model12.webp";
import model2 from "../../assets/models/model13.webp";
import model3 from "../../assets/models/model14.webp";
import model4 from "../../assets/models/model15.webp";
import modelsCustomArrow from "./modelsCustomArrow";

import Card from "../Card/card";
import "./modelsSlider.scss"

function ModelsSlider() {
  return (
    <div className="modelsSlider-container">
      <Carousel
        itemsToShow={4}
        breakPoints={[
          { width: 0, itemsToShow: 1},  
          { width: 640, itemsToShow: 2 }, 
          { width: 768, itemsToShow: 3}, 
          { width: 1211, itemsToShow: 4}, 
        ]}
        renderArrow={modelsCustomArrow}
      >
        <Card image={model1} name="Anila Canolli" />
        <Card image={model2} name="Klea Gashi" />
        <Card image={model3} name="Ari Berisha" />
        <Card image={model4} name="Jon Klaiqi" />
      </Carousel>
    </div>
  );
}

export default ModelsSlider;
