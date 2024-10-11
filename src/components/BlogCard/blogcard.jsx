import { FaArrowRightLong } from "react-icons/fa6";
import "./blogcard.scss";

function blogcard(props) {
  return (
    <div className="blogCard-container">
      <div className="blogCard-imageContainer">
        <img src={props.image} alt="" />
        <p>{props.date}</p>
      </div>

      <div className="blogCard-text">
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
      </div>
      <div className="blogCard-readMore">
        <h4>Read More</h4>
        <FaArrowRightLong />
      </div>
    </div>
  );
}

export default blogcard;
