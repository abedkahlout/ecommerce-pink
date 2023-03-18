import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./ProductDetails.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SliderProd() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="prod">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/images/comp.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/comp.webp" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/images/comp.webp" />
        </SwiperSlide>
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="/images/comp.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/comp.webp" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/images/comp.webp" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
