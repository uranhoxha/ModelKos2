import "./partners.scss";
import chanel from "../../assets/chanel.svg";
import boohoo from "../../assets/boohoo.svg";
import mango from "../../assets/mango.svg";
import bershka from "../../assets/bershka.svg";
import ck from "../../assets/ck.svg";
import kosovagirls from "../../assets/kosovagirls.svg";
import braty from "../../assets/braty.svg";

function partners() {
  const partners = [
    { src: chanel, alt: "chanel" },
    { src: boohoo, alt: "boohoo" },
    { src: mango, alt: "mango" },
    { src: bershka, alt: "bershka" },
    { src: ck, alt: "ck" },
    { src: kosovagirls, alt: "kosovagirls" },
    { src: braty, alt: "braty" },
  ];

  return (
    <div class="partners-container">
      <h4>Our Partners</h4>
      <div class="partners-image-container">
        <div class="partners-slide">
          {partners.map((partner, index) => (
            <img key={index} src={partner.src} alt={partner.alt} />
          ))}
          {partners.map((partner, index) => (
            <img
              key={index + partners.length}
              src={partner.src}
              alt={partner.alt}
            />
          ))}
        </div>
      </div>
      <button>See All Partners</button>
    </div>
  );
}

export default partners;
