import "./marketing.scss";
import Marketingcard from "../Marketingcard/marketingcard";

function marketing() {
  return (
    <div className="marketing-container section-padding">
      <div className="marketing-first">
        <h1>MODEL MARKETING</h1>
        <p>
          With a network of over 200,000 active members, ModelKos is the top
          market place for models, photographers, and creative talents in
          fashion to look for work. Add your online modeling portfolio to
          ModelKos so that prospective clients can view and make direct
          bookings. Modeling profiles are completely customizable, allowing you
          to add your Instagram feed for potential clients to view. So far,
          thousands of members have been scouted by industry professionals for
          both castings and work. Join our community to get started!
        </p>
        <div className="marketing-stats">
          <div className="stats">
            <h2>500,000+</h2>
            <p>Portfolio Images</p>
          </div>
          <div className="stats">
            <h2>20,000+</h2>
            <p>Featured Talents</p>
          </div>
          <div className="stats">
            <h2>100M</h2>
            <p>Visits</p>
          </div>
        </div>
      </div>
      <div className="marketing-second">
      <Marketingcard/>
      </div>
    </div>
  );
}

export default marketing;
