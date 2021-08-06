import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const SwiperWrapper = styled.div`
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-wrapper {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }

  .swiper-slide img {
    display: block;
    object-fit: cover;
  }
`;
