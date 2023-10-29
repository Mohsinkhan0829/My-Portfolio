import React from 'react'
import { FaGit, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { wave } from '../../assets/Images';

const Footer = () => {
  return (
    <div>
      <div className='Footer'>
      <img src={wave} style={{width:'100%'}} />
      <div className='footer-content'>
      <h4>Research.Mohsinkhan@gmail.com</h4>
      <div className='footer-icons'>
        <a href="https://www.instagram.com/mr_khan0_/">
      <FaInstagram style={{color:"black" , background:"rgb(253, 197, 15)"}}/>
      </a>
      <a href="https://www.linkedin.com/in/mohsin-khan-ab5a75246">
      <FaLinkedin style={{color:"black" ,background:"rgb(253, 197, 15)"}}/>
      </a>
      <a href="https://github.com/Mohsinkhan0829">
      <FaGit style={{color:"black" , background:"rgb(253, 197, 15)"}}/>
      </a>

      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
