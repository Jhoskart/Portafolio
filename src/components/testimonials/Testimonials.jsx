import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/Pablo.jpg'
import IMG2 from '../../assets/Tomas.png'
import IMG3 from '../../assets/jessi.jfif'
import IMG4 from '../../assets/Miguel.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  const [t, i18n] = useTranslation("global")

  return (
   <section id='testimonials'>
    <h5>{t("references.review")}</h5>
    <h2>{t("references.recom")}</h2>

    <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={IMG1} alt="pablo" />
        </div>
        <h5>Pablo Causa</h5>
          <small className='client__review'>
          Jhoskar showed excellent logical and strategical thinking.
          He was part of the Back End team, and he addresed any required
          task not matter how difficult it could be. Also, he worked very well in the team,
          cooperating with all the members, even fron the Front End. 
          I highly recommend him to any company.
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={IMG2} alt="tomas" />
        </div>
        <h5>Tomas Ledesma</h5>
          <small className='client__review'>
            {t("references.text1")}
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={IMG3} alt="jessi" />
        </div>
        <h5>Jessica Longo</h5>
          <small className='client__review'>
            {t("references.text2")}
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={IMG4} alt="Miguel" />
        </div>
        <h5>Miguel Tovar</h5>
          <small className='client__review'>
            {t("references.text3")}
          </small>
      </SwiperSlide>
    </Swiper>
   </section>
  )
}

export default Testimonials
