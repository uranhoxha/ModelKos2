import "./marketingcard.scss";
import arrowCircle from "../../assets/whiteArrow.svg";
import model2 from "../../assets/marketingModel1.webp";
import model1 from "../../assets/marketingModel2.webp";
import { IoIosSearch } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { IoCalendarClearOutline } from "react-icons/io5";
import { TbBriefcase2Filled } from "react-icons/tb";

function marketingcard() {
  return (
    <div className="marketingcard-container">
      <img src={arrowCircle} alt="" className="arrow-circle" />
      <div className="marketingcard-card">
        <div className="marketingcard-imageContainer">
          <img src={model1} alt="" className="marketingcard-imageOne" />
          <img src={model2} alt="" className="marketingcard-imageTwo" />
        </div>
        <div className="marketingcard-infobar">
          <div className="marketingcard-info">
            <IoIosSearch />
            <p>Search</p>
          </div>

          <div className="marketingcard-info">
            <LuClock />
            <p>Book</p>
          </div>

          <div className="marketingcard-info">
            <IoCalendarClearOutline />
            <p>Schedule</p>
          </div>

          <div className="marketingcard-info">
            <TbBriefcase2Filled />
            <p>Work with us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default marketingcard;
