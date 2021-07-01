import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';

//Swiper css
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

//Swiper
SwiperCore.use([Navigation, Autoplay]);

const MoviesSwiper = ({ children }) => {
  return (
    <>
      <Swiper
        spaceBetween={65}
        slidesPerView={5}
        navigation={{ nextEl: '.right-arrow', prevEl: '.left-arrow' }}
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          390: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          780: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          920: {
            slidesPerView: 5,
            spaceBetween: 65,
          },
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

export default MoviesSwiper;
