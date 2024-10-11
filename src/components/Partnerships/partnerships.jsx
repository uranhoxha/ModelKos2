import "./partnerships.scss";
import plis from "../../assets/plis.svg";
import model from "../../assets/partnerships-model.webp";

function partnerships() {
  return (
    <div className="partnerships-container section-padding">
      <h1>Our Partnerships</h1>
      <div className="partnerships-content">
        <div className="partnerships-first">
          <div className="partnerships-first-logo">
            <img src={plis} alt="logo" />
            <h2>MediaKos</h2>
          </div>
          <h1>Manage your social media</h1>
          <p>
            MediaKos assists all influencers, models, and artists in managing
            their social media accounts, as well as creating content and much
            more.
          </p>
          <button>Learn More</button>
        </div>
        <div className="partnerships-second">
          <img src={model} alt="" />
        </div>
      </div>
    </div>
  );
}

export default partnerships;
