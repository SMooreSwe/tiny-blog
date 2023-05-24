import React from 'react'
import nounProject from '../Assets/nounProject.png'

const Footer = () => {
  return (
    <div className='app__footer'>
        <div className='footer__text'>Icons Provided By The Noun Project</div>
        <a href="https://thenounproject.com/">
            <img src={nounProject} alt="logo for the Noun Project" className='footer__image'/>
        </a>
    </div>
  )
}

export default Footer