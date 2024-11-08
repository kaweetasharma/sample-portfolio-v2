import React from 'react';
import { services } from '../../../Data';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './services.css';

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">What I Do</h2>
      <p className="section__subtitle">
        My <span> Services</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="services__container container mySwiper"
      >
        {services.map(({ name, title, description, id }) => {
          return (
            <SwiperSlide className="services__item card card-one" key={id}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <a href="" className="link">
                See CV
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
