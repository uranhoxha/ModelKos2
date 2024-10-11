import { CiMail } from "react-icons/ci";
import "./newsletter.scss";

function newsletter() {
  return (
    <div className="newsletter-container section-padding">
      <h1>Subscribe To Our Newsletter</h1>
      <p>
        Subscribe to pour newsletter t receive the latest news and updates about
        ModelKos
      </p>
      <div className="newsletter-form">
        <div className="newsletter-input">
          <CiMail />
          <input placeholder="Type mail here" />
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default newsletter;
