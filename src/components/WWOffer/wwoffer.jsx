import "./wwoffer.scss";
import Offercard from "../OfferCards/offercard";
import dress from "../../assets/dress.svg";
import camera from "../../assets/camera.svg";
import gender from "../../assets/gender.svg";
import socialCamera from "../../assets/socialCamera.svg";

import Carousel from "react-elastic-carousel";

function Wwoffer() {
  return (
    <div className="wwoffer-container section-padding">
      <h1>What We Offer</h1>
      <Carousel
        pagination={true}
        breakPoints={[
          { width: 0, itemsToShow: 1 },
          { width: 640, itemsToShow: 2 },
          { width: 768, itemsToShow: 3 },
          { width: 1211, itemsToShow: 4 },
        ]}
      >
        <Offercard
          icon={dress}
          title="Training"
          paragraph="We train actors for commercials, campaigns, stores, showrooms, and retail outlets."
        />
        <Offercard
          icon={camera}
          title="Coaching"
          paragraph="We get the most out of our talents through coaching, private discussions, and trainings."
        />
        <Offercard
          icon={gender}
          title="Selection"
          paragraph="ModelKos is by your side during the selection and casting process. We plan efficient processes for you and your customers."
        />
        <Offercard
          icon={socialCamera}
          title="Social Media"
          paragraph="Other services include social media, influencer marketing, castings, and switching at top photographers and videographers."
        />

        <Offercard
          icon={dress}
          title="Training"
          paragraph="We train actors for commercials, campaigns, stores, showrooms, and retail outlets."
        />
        <Offercard
          icon={camera}
          title="Coaching"
          paragraph="We get the most out of our talents through coaching, private discussions, and trainings."
        />
        <Offercard
          icon={gender}
          title="Selection"
          paragraph="ModelKos is by your side during the selection and casting process. We plan efficient processes for you and your customers."
        />
        <Offercard
          icon={socialCamera}
          title="Social Media"
          paragraph="Other services include social media, influencer marketing, castings, and switching at top photographers and videographers."
        />
      </Carousel>
      <button className="wwoffer-button">See all</button>
    </div>
  );
}

export default Wwoffer;
