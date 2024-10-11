import "./about.scss";
import Slider from "../AboutImageSlider/slider"

function about() {
  return (
    <div className="about-container ">
      <div className="about-first-content">
        <h1>About Us</h1>
        <p>
          ModelKos is the leading interactive fashion database connecting the
          world to models, creative talent, magazines, and luxury and commercial
          brands. With 1.1 million unique visits per month, the site stands as
          an essential tool to attribute credit and source new talent.
        </p>
      </div>
      <div className="about-second-content">
        <Slider/>
      </div>
    </div>
  );
}

export default about;
