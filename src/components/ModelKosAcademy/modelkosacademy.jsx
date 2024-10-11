import "./modelkosacademy.scss";
import logo from "../../assets/academyLogo.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import customNextArrow from "../../assets/modeling-arrowNext.svg";
import customPrevArrow from "../../assets/modeling-arrowPrev.svg";

function modelkosacademy() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}" style="width: 13px; height: 13px;"></span>`;
    },
  };

  return (
    <div className="modelkosacademy-container section-padding">
      <div className="modelkosacademy-title">
        <h1>Be</h1>
        <h1>A</h1>
        <h1>Model</h1>
      </div>

      <Swiper
        pagination={pagination}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="academySlide">
          <div className="academySlide-logo">
            <img src={logo} alt="" />
            <h1>Modelkos Academy</h1>
          </div>
          <p>
            If you want to be a model then we are here to offer advice and
            create a platform for new aspiring models. We endeavor to work
            across a diverse range of talent and champion every individual
            regardless of their background or ability. We are a female led team
            of accomplished, diverse women.
          </p>
          <button>Join Academy</button>
        </SwiperSlide>
        <SwiperSlide className="academySlide">
          <div className="academySlide-logo">
            <img src={logo} alt="" />
            <h1>Modelkos Academy</h1>
          </div>
          <p>
            If you want to be a model then we are here to offer advice and
            create a platform for new aspiring models. We endeavor to work
            across a diverse range of talent and champion every individual
            regardless of their background or ability. We are a female led team
            of accomplished, diverse women.
          </p>
          <button>Join Academy</button>
        </SwiperSlide>
        <div className="custom-prev">
          <img src={customPrevArrow} alt="Prev Arrow" />
        </div>
        <div className="custom-next">
          <img src={customNextArrow} alt="Next Arrow" />
        </div>
      </Swiper>
    </div>
  );
}

export default modelkosacademy;
