import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Navigation,
  Scrollbar,
  EffectCoverflow,
  Autoplay,
} from 'swiper/core';
import { SwiperWrapper } from './Styles';
import { InformationArray } from '../utils/types';
import { Power4, gsap } from 'gsap';
import Card from '../cards';
import HOC from '../hoc/hoc';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCoverflow, Autoplay]);

const Index = ({ animeList }: InformationArray): JSX.Element => {
  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onTransitionStart={() => {
          gsap.to('.swiper-slide-next', 2, {
            scale: 0.9,
            opacity: 0.4,
            ease: Power4.easeIn,
          }),
            gsap.to('.swiper-slide-active', 2, {
              scale: 1.1,
              opacity: 1,
              ease: Power4.easeIn,
            }),
            gsap.to('.swiper-slide-prev', 2, {
              scale: 0.9,
              opacity: 0.4,
              ease: Power4.easeIn,
            });
        }}
        navigation={true}
        className='mySwiper'>
        {animeList.map((anime) => (
          <SwiperSlide key={anime.id}>
            <Link
              to={`/anime/${anime.id}`}
              className='item text-reset text-decoration-none'>
              <Card anime={anime.attributes} cardWidth='2xl' />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default HOC(Index);
