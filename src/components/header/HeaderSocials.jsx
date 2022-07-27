import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/jhoskartoro-fullstackdeveloper/" target="_blank">
        <BsLinkedin className='styleicon2' />
      </a>
      <a href="https://github.com/Jhoskart" target="_blank">
        <BsGithub className='styleicon' />
      </a>
    </div>
  )
}

export default HeaderSocials
