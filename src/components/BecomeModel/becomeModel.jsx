import "./becomeModel.scss";
import imageCircle from "../../assets/becomeModelCircle.webp";
import logoCircleText from "../../assets/logoCircleText.webp";

function becomeModel() {
  return (
    <div className="becomeModel-container section-padding">
      <img src={imageCircle} alt="Image_Circle" className="background-logo" />
      <img src={logoCircleText} alt="logo" className="becomeModel-logo" />
      <p>
        ModelKos is one of the most influential fashion news sites and creative
        resources within the fashion industry, with an extensive database,
        feature interviews of the creative stars of the industry, and its
        influential top model rankings.
      </p>
    </div>
  );
}

export default becomeModel;
