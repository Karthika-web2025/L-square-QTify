import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import styles from "./Carousel.module.css";

const Carousel = ({ data, renderItem }) => {
  return (
    <div className={styles.carouselWrapper}>
      <LeftArrow />

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <RightArrow />
    </div>
  );
};

export default Carousel;
