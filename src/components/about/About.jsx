import React from 'react'
import './about.css'
import ME from '../../assets/lal.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
     <h5>Conoce un poco</h5>
     <h2>Acerca de mi</h2>
     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className="about__icon"/>
            <h5>Experiencia</h5>
            <small>1+ año</small>
          </article>
          <article className='about__card'>
            <FiUsers className="about__icon"/>
            <h5>Ingles</h5>
            <small>B1 intermedio</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className="about__icon"/>
            <h5>Proyectos</h5>
            <small>5+ proyectos completados</small>
          </article>
        </div>
        <div>
            <p className='parrafo'>
              __Soy un apasionado por la tecnologia y el mundo IT💻, 
              entusiasta de las diferentes metodologias de aprendizaje 
              aplicables para el crecimiento personal y profesional, 
              y de impulsar el desarrollo de la creatividad como herramienta 
              de trabajo.🤹 Me encanta desarrollar tanto en el front como en el back,
              trabajar en equipo y buscar la mejora continua.
            </p>
            <a href="#contact" className="btn btn-primary">Hablemos</a>
          </div>
      </div>
     </div>
    </section>
  )
}

export default About
