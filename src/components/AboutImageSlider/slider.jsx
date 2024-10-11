import AboutCard from "../AboutCard/aboutcard";
import Carousel from "react-elastic-carousel";

import "./slider.scss";

function Slider() {
  return (
    <Carousel
      className="about-carousel"
      itemPadding={[85, 40]}
      pagination={true}
    >
      <AboutCard cardType="first" />
      <AboutCard cardType="second" />
    </Carousel>
  );
}

export default Slider;
