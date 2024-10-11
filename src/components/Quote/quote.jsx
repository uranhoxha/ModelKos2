import React from "react";
import "./quote.scss";
import logo from "../../assets/logo.svg";
import arrowCircle from "../../assets/arrowText.svg";

function Quote() {
  return (
    <div className="quote-container section-padding">
      <img src={logo} alt="logo" className="quote-logo" />
      <div className="quote-text">
        <h1>BEING CLASSY IS BENEFICIAL</h1>
        <h1 className="second-text">BEING PROFESSIONAL IS INVALUABLE</h1>
      </div>
      <img src={arrowCircle} alt="arrow-circle" className="arrow-circle" />
    </div>
  );
}

export default Quote;
