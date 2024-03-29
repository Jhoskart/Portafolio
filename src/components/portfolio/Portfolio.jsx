import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/PsicoApp.jpg';
import IMG2 from '../../assets/pokemonapp.jpg';
import IMG3 from '../../assets/movieapp.jpg';
import IMG4 from '../../assets/weatherapp.jpg';
import IMG5 from '../../assets/design.jpg';
import IMG6 from '../../assets/tabla.jpg';
import IMG7 from '../../assets/cursos.jpg';
import IMG8 from '../../assets/android.png';
import IMG9 from '../../assets/ios.png';
import IMG10 from '../../assets/nova2.png';
import IMG11 from '../../assets/E8Tienda.png';
import IMG12 from '../../assets/mkt.png';
import IMG13 from '../../assets/neogentech.png';
import { useTranslation } from 'react-i18next'


const Portfolio = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <section id='portfolio'>
      <h5>{t("portfolio.my")}</h5>
      <h2>{t("portfolio.port")}</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image grande">
            <img src={IMG10} alt="Nova" />
          </div>
          <h3>{t("portfolio.pro6")}</h3>
          <div className='portfolio__item-cta'>
            <a href="https://nova.jorgegas.cl" className='btn btn-primary' target="_blank">Web</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image grande">
            <img src={IMG11} alt="E8tienda" />
          </div>
          <h3>{t("portfolio.pro7")}</h3>
          <div className='portfolio__item-cta'>
            <a href="https://e8tienda.cl" className='btn btn-primary' target="_blank">Web</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image grande">
            <img src={IMG12} alt="mkt" />
          </div>
          <h3>{t("portfolio.pro8")}</h3>
          <div className='portfolio__item-cta'>
            <a href="https://mktdelfuturo.com/" className='btn btn-primary' target="_blank">Web</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image grande">
            <img src={IMG13} alt="neogentech" />
          </div>
          <h3>{t("portfolio.pro9")}</h3>
          <div className='portfolio__item-cta'>
            <a href="https://neogen.tech/" className='btn btn-primary' target="_blank">Web</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image grande">
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
          <div className="portfolio__item-image">
            <img src={IMG7} alt="tablapoke" className='grande'/>
          </div>
          <h3>Cursos app</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jhoskart/Cursos-Project" className='btn ' target='_blank'>Github</a>
            <a href="https://cursos-six.vercel.app/" className='btn btn-primary' target="_blank">Deploy</a>
          </div>
        </article>
        <article className='portfolio__item '>
          <div className="portfolio__item-image grande">
            <img src={IMG9} alt="calculadoraIOS" className='grande'/>
          </div>
          <h3>{t("portfolio.pro5")}</h3>
          <div className='portfolio__item-cta '>
            <a href="https://github.com/Jhoskart/Calculadora-IOS" className='btn ' target='_blank'>Github</a>
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
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG8} alt="clock app" className='grande'/>
          </div>
          <h3>Android Clock App</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Jhoskart/Clock-app" className='btn ' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
