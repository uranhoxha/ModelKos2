import "./wpsay.scss";
import WPSayCard from "../WPSayCard/wpdaycard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function wpsay() {
  return (
    <div className="wpsay-container">
      <h1 className="wpsay-title">What People Say</h1>
      <div className="wpsay-content section-padding">
        <div className="wpsay-first">
          <div className="wpsay-content-title">
            <h1>What</h1>
            <h1>People</h1>
            <h1>Say</h1>
          </div>
        </div>
        <div className="wpsay-second">
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <WPSayCard isActive={true} />
            </SwiperSlide>
            <SwiperSlide>
              <WPSayCard isActive={false} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default wpsay;
