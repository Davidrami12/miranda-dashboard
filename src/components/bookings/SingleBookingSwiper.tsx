// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

// Swiper Modules
import { Navigation } from "swiper";

// Images swiper for the rooms details page
const SingleBookingSwiper = (photos: any) => {
  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
    >
      {photos.photos.map((photo: any, index: number) =>
        photo !== "" || index === 0 ? (
          <SwiperSlide key={index} className="slider-container">
            <img
              src={
                photo === ""
                  ? "https://mktmarketingdigital.com/wp-content/plugins/elementor/assets/images/placeholder.png"
                  : photo
              }
              alt="Hotel Room"
            />
          </SwiperSlide>
        ) : null
      )}
    </Swiper>
  );
};

export default SingleBookingSwiper;