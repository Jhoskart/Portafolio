import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/Pablo.jpg'
import IMG2 from '../../assets/Tomas.png'
import IMG3 from '../../assets/jessi.jfif'
import IMG4 from '../../assets/Miguel.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
   <section id='testimonials'>
    <h5>Referencias</h5>
    <h2>Recomendaciones</h2>

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
          Jhoskar es un excelente compañero, sabe desenvolverse en el Backend y en el Frontend,
          conoce muy en la lógica de ambos sectores. Luego de compartir equipo con él puedo decir que maneja una buena comunicación dentro del equipo,
          le gusta aportar ideas, investigar nuevas tecnologías y ser pro-activo
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={IMG3} alt="jessi" />
        </div>
        <h5>Jessica Longo</h5>
          <small className='client__review'>
          Jhoskar es un excelente programador, tiene una increíble capacidad para resolver problemas y explicarlos sencillamente y con rapidez.
          Al mismo tiempo fomenta la construcción de buenas prácticas en su entorno. 
          Destacó su habilidad de trabajar en equipo y brindar ayuda a quien lo necesite, 
          con su humildad, humanidad y respeto característicos.
          </small>
      </SwiperSlide>
      <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={IMG4} alt="Miguel" />
        </div>
        <h5>Miguel Tovar</h5>
          <small className='client__review'>
            Jhoskar fue una persona comprometida con el proyecto buscando dar lo mejor de sí. Sabe trabajar en equipo, colaborando, comunicando bien sus ideas y siempre mostrándose empático con sus compañeros. 
            Fue de mucho aporte. con su iniciativa, para el equipo,
            tanto en el frontend como en el backend. un gusto trabajar con él.
          </small>
      </SwiperSlide>
    </Swiper>
   </section>
  )
}

export default Testimonials
