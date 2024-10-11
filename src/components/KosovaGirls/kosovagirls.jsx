import "./kosovagirls.scss";
import fashion from "../../assets/fashion.webp";
import hairStyling from "../../assets/hairstyling.webp";
import photography from "../../assets/photography.webp";
import acting from "../../assets/acting.webp";
import butterfly from "../../assets/butterfly.svg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function kosovagirls() {
  return (
    <div className="kosovagirls-container section-padding">
      <div className="kosovagirls-first">
        <div className="kosovagirls-item">
          <h2>Fashion</h2>
          <HiOutlineArrowLongRight className="arrow-icon"/>
        </div>
        <div className="kosovagirls-item">
          <h2>Hair Styling</h2>
          <HiOutlineArrowLongRight className="arrow-icon"/>
        </div>
        <div className="kosovagirls-item">
          <h2>Photography</h2>
          <HiOutlineArrowLongRight className="arrow-icon"/>
        </div>
        <div className="kosovagirls-item">
          <h2>Acting</h2>
          <HiOutlineArrowLongRight className="arrow-icon"/>
        </div>
      </div>
      <div className="kosovagirls-second">
        <div className="kosovagirls-second-logo">
          <img src={butterfly} alt="" />
          <h2>KosovaGirls</h2>
        </div>
        <h1>Free Education for Everyone</h1>
        <p>
          ModelKos, in collaboration with KosovaGirls, provides women with
          support and free training in fashion, design, hair styling,
          photography, video shooting, modeling, acting and other areas.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default kosovagirls;
