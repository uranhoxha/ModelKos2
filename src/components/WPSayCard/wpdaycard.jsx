import "./wpsaycard.scss";
import modelImage from "../../assets/wpsay-model.webp";

function wpdaycard({ isActive }) {
  return (
    <div className="wpsayCard-container section-padding">
      <div className="pagination-dots">
        <div
          className={`pagination-dot ${isActive ? "pagination-active" : ""}`}
        ></div>
        <div
          className={`pagination-dot ${!isActive ? "pagination-active" : ""}`}
        ></div>
      </div>
      <div>
        <h1>The Best Agency</h1>
        <p>
          Sarah Doukas founded the agency in her home in 1987. With Richard
          Branson as her business partner, Sarah revolutionized the traditional
          modelling industry by launching the first UK agency to represent,
          worldwide, new faces Sarah had discovered herself and this became the
          hallmark of the agency. 1988 is remembered as the year Sarah changed
          the fashion industry when she spotted Kate Moss at JFK Airport in New
          York City.
        </p>
      </div>
      <div className="background-dots"></div>
      <div className="wpsay-smallCard">
        <div className="wpsay-smallCard-text">
          <h3>Xhensila Halimi</h3>
          <p>Social Media Manager</p>
          <div className="rating">
            <p>Rating</p>
            <div className="dots">
              <div className="dot active"></div>
              <div className="dot active"></div>
              <div className="dot active"></div>
              <div className="dot active"></div>
              <div className="dot"></div>
            </div>
            <p>(4.0)</p>
          </div>
        </div>
        <div className="wpsay-smallCard-image">
          <img src={modelImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default wpdaycard;
