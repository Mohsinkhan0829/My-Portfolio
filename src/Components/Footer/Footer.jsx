import React from 'react'
import { FaFacebook, FaGit, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='Footer'>
      <img src="/src/img/wave.png" style={{width:'100%'}} />
      <div className='footer-content'>
      <h4>Research.Mohsinkhan@gmail.com</h4>
      <div className='footer-icons'>
      <FaInstagram />
      <FaFacebook/>
      <FaLinkedin/>
      <FaGit/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer