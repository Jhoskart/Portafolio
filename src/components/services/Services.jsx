import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Te puedo ofrecer</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Diseño</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Creacion de paginas web con un estilo moderno y funcional.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Diseño responsivo, que se adapte a cualquier dispositivo.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Diseño de interfaces de usuario.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Animaciones y efectos en 2D
              </p>
            </li>
          </ul>
        </article>

        {/* END OF DISEÑO */}

        <article className='service'>
          <div className='service__head'>
            <h3>Desarrollo Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Desarrollo de 'Single Page Applications' (SPA) con React y Redux.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Desarrollo de aplicaciones con NodeJS y Express.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Aplicaciones que sean escalables y sean multiplataforma.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Algoritmos de búsqueda y almacenamiento de datos con Sequelize y PostgreSQL 
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Base de datos relacionales con MySQL y PostgreSQL. 
              </p>
            </li>
          </ul>
        </article>

        {/* END OF DESARROLLO WEB */}

        <article className='service'>
          <div className='service__head'>
            <h3>Creacion de contenido</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Creacion de contenido para redes sociales.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Creacion de contenido para blogs.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Creacion de contenido para paginas de noticias.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Creacion de contenido para paginas de productos.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Creacion de contenido para paginas de servicios.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
