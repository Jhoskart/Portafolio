import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/PsicoApp.jpg';
import IMG2 from '../../assets/pokemonapp.jpg';
import IMG3 from '../../assets/movieapp.jpg';
import IMG4 from '../../assets/weatherapp.jpg';
import IMG5 from '../../assets/design.jpg';
import IMG6 from '../../assets/tabla.jpg';
import { useTranslation } from 'react-i18next'


const Portfolio = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section id='portfolio'>
      <h5>{t("portfolio.my")}</h5>
      <h2>{t("portfolio.port")}</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="PsicoApp" />
          </div>
          <h3>{t("portfolio.pro1")}</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jhoskart/PF-psicoApp" className='btn ' target='_blank'>Github</a>
            <a href="https://psico-app.vercel.app/" className='btn btn-primary' target="_blank">Deploy</a>
          </div>
        </article>
        <article className='portfolio__item '>
          <div className="portfolio__item-image grande">
            <img src={IMG5} alt="landgin3d" className='grande'/>
          </div>
          <h3>{t("portfolio.pro3")}</h3>
          <div className='portfolio__item-cta '>
            <a href="https://github.com/Jhoskart/curso3d" className='btn ' target='_blank'>Github</a>
            <a href="https://3design-three.vercel.app/" className='btn btn-primary' target="_blank">Deploy</a>
          </div>
        </article>
        <article className='portfolio__item '>
          <div className="portfolio__item-image grande">
            <img src={IMG2} alt="pokemonapp" className='grande'/>
          </div>
          <h3>{t("portfolio.pro2")}</h3>
          <div className='portfolio__item-cta '>
            <a href="https://github.com/Jhoskart/Project-Pokemon" className='btn ' target='_blank'>Github</a>
            <a href="https://project-pokemon-ten.vercel.app/" className='btn btn-primary' target="_blank">Deploy</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image grande">
            <img src={IMG3} alt="movieapp" className='grande'/>
          </div>
          <h3>MoviesApp</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jhoskart/project-movies" className='btn ' target='_blank'>Github</a>
            {/* <a href="https://github.com/" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image ">
            <img src={IMG4} alt="weatherapp" className='grande'/>
          </div>
          <h3>WeatherApp</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jhoskart/Project-Weather" className='btn ' target='_blank'>Github</a>
            {/* <a href="https://github.com/" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="tablapoke" className='grande'/>
          </div>
          <h3>{t("portfolio.pro4")}</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jhoskart/Tabla-Pokemon" className='btn ' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
