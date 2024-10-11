import Carousel from "react-elastic-carousel";
import model1 from "../../assets/megamenuModel.webp";
import model2 from "../../assets/megamenuModel2.webp";
import "./megamenu.scss"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 480, itemsToShow: 2 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

function megamenu() {
  return (
    <div className="megamenu-container">
      <div className="megamenu-listContainer">
        <div className="megamenu-list">
          <ul>
            <h2>City</h2>
            <li>Prishtina</li>
            <li>Peja</li>
            <li>Prizren</li>
            <li>Gjakove</li>
            <li>Gjilan</li>
            <li>Ferizaj</li>
            <li>Mitrovice</li>
          </ul>
        </div>
        <div className="megamenu-list">
          <ul>
            <h2>Female</h2>
            <li>Main</li>
            <li>Direct</li>
            <li>B Plus</li>
          </ul>
        </div>
        <div className="megamenu-list">
          <ul>
            <h2>Male</h2>
            <li>Main</li>
            <li>Direct</li>
            <li>Big & Tall</li>
          </ul>
        </div>
        <div className="megamenu-list">
          <ul>
            <h2>Kids</h2>
            <li>Babies</li>
            <li>Todlers</li>
            <li>Preschool</li>
            <li>Gradeschooler</li>
            <li>Teen</li>
          </ul>
        </div>
        <div className="megamenu-list">
          <ul>
            <h2>Elderly</h2>
            <li>Old Female</li>
            <li>Old Male</li>
          </ul>
        </div>
      </div>
      <div className="megamenu-slider">
        <div className="megamenu-title">
          <h3>Models</h3>
          <p>View All→</p>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="megamenu-card one">
            <img alt="model" src={model1} />
            <h3>Blina Beka</h3>
            <div className="megamenu-card-content">
              <p>Model</p>
              <p>Photography</p>
              <p>Artist</p>
            </div>
            <h3>19 May 2022</h3>
          </div>
          <div className="megamenu-card two">
            <img alt="model" src={model2} />
            <h3>Alora Gojani</h3>
            <div className="megamenu-card-content">
              <p>Model</p>
              <p>Photography</p>
              <p>Artist</p>
            </div>
            <h3>19 May 2022</h3>
          </div>
          <div className="megamenu-card one">
            <img alt="model" src={model1} />
            <h3>Blina Beka</h3>
            <div className="megamenu-card-content">
              <p>Model</p>
              <p>Photography</p>
              <p>Artist</p>
            </div>
            <h3>19 May 2022</h3>
          </div>
          <div className="megamenu-card two">
            <img alt="model" src={model2} />
            <h3>Alora Gojani</h3>
            <div className="megamenu-card-content">
              <p>Model</p>
              <p>Photography</p>
              <p>Artist</p>
            </div>
            <h3>19 May 2022</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default megamenu;
