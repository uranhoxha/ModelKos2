import "./offercard.scss";
import { HiMiniArrowLongRight } from "react-icons/hi2";

function offercard(props) {
  return (
    <div className="offercard-container">
      <div className="offercard-title">
        <img src={props.icon} alt="dress logo" />
        <h3>{props.title}</h3>
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>
          {props.paragraph}
        </p>
      </div>
      <div className="learn-more">
        <p>Learn More</p>
        <HiMiniArrowLongRight />
      </div>
    </div>
  );
}

export default offercard;
