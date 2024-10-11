import { IoEyeOutline, IoLocationOutline } from "react-icons/io5";

import "./card.scss";

function card(props) {
  return (
    <div className="card-container">
      <div className="card-imageContainer">
        <img src={props.image} alt="" />
        <button>View details</button>
      </div>
      <div className="card-content">
        <h4>Model</h4>
        <div className="card-model-name">
          <h3>{props.name}</h3>
          <p>$ 150 / hour</p>
        </div>
        <div className="card-info">
          <div className="card-info-item">
            <IoLocationOutline />
            <p>Prishtina, Kosova</p>
          </div>
          <div className="card-info-item">
            <IoEyeOutline />
            <p>290</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
