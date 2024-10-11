import "./waterfall.scss";
import model1 from "../../assets/models/model1.webp";
import model2 from "../../assets/models/model2.webp";
import model3 from "../../assets/models/model3.webp";
import model4 from "../../assets/models/model4.webp";
import model5 from "../../assets/models/model5.webp";
import model6 from "../../assets/models/model6.webp";
import model7 from "../../assets/models/model7.webp";
import model8 from "../../assets/models/model8.webp";
import model9 from "../../assets/models/model9.webp";
import model10 from "../../assets/models/model10.webp";
import model11 from "../../assets/models/model11.webp";
import arrowCircle from "../../assets/text.svg";
import ImageHover from "./ImageHover";

function waterfall() {
  return (
    <div className="waterfall-container">
      <div className="waterfall-columnOne">
        <div className="modelsCard">
          <img src={model1} alt="model1" />
          <ImageHover name="Anida Lleshi"/>
        </div>
        <div className="modelsCard">
          <img src={model2} alt="model1" />
          <ImageHover name="Anila Xhaferi"/>
        </div>
        <div className="modelsCard">
          <img src={model3} alt="model1" />
          <ImageHover name="Blerta Salihu"/>
        </div>
      </div>

      <div className="waterfall-columnTwo">
      <div className="modelsCard">
          <img src={model4} alt="model1" />
          <ImageHover name="Driada Lakna"/>
        </div>
        <div className="modelsCard">
          <img src={model5} alt="model1" />
          <ImageHover name="Albina Myrtezaj"/>
        </div>
        <div className="modelsCard">
          <img src={model6} alt="model1" />
          <ImageHover name="Iliada Sadriu"/>
        </div>
      </div>

      <div className="waterfall-columnThree">
        <div className="modelsCard">
          <img src={model7} alt="model1" />
          <ImageHover name="Klea Gashi"/>
        </div>
        <div className="modelsCard">
          <img src={model8} alt="model1" />
          <ImageHover name="Drenusha Qaza"/>
        </div>
        <div className="waterfall-info modelsCard">
          <h3>Want to be here?</h3>
          <p>
            ModelKos is seeking for new talent, so join the largest modeling
            agency in Kosovo and show off your skills. Be a model!
          </p>
          <img src={arrowCircle} alt="arrowCircle" />
        </div>
      </div>
      <div className="waterfall-columnFour">
        <div className="modelsCard">
          <img src={model9} alt="model1" />
          <ImageHover name="Arta Kalludra"/>
        </div>
        <div className="modelsCard">
          <img src={model10} alt="model1" />
          <ImageHover name="Klesta Trifoni"/>
        </div>
        <div className="modelsCard">
          <img src={model11} alt="model1" />
          <ImageHover name="Melinda Ademi"/>
        </div>
      </div>
    </div>
  );
}

export default waterfall;
