import React from 'react'
import logo from '../src/images1/logofooter.png'
import {
  FaInstagramSquare,
  FaTiktok,
  FaFacebookSquare,
  FaWhatsappSquare,
} from 'react-icons/fa'
const Footer = () => {
 const current = new Date()
 const date = `${current.getFullYear()}`
  return (
    <div className='footer'>
      <div className='footer-container'>
        <article className='footer-details'>
          <img src={logo} alt='' className='logo-footer' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed
            et reiciendis repudiandae fugiat magnam maiores mollitia repellendus
            nisi perspiciatis!
          </p>
        </article>
        <article className='link-footer'>
          <ul>
            <li>
              <a href='/'>accueil</a>
            </li>
            <li>
              <a href='/femmes'>femmes</a>
            </li>
            <li>
              <a href='/hommes'>hommes</a>
            </li>
            <li>
              <a href='/contact'>contact</a>
            </li>
          </ul>
        </article>
        <article className='contact-footer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <h3>awagueye@gmail.com</h3>
          <h2>(+221) 772774672</h2>
        </article>
        <article className='map'>
          <iframe
            src='https://maps.google.com/maps?q=senegal%20tivaune%20peulh%20&t=&z=13&ie=UTF8&iwloc=&output=embed'
            title='myFrame'
          />
        </article>
      </div>
      <div className='footer-date'>
        <h3>
          &copy; {date}
          <span> adamadiouf2017@gmail.com </span>all rights reserved
        </h3>

        <div className='links-social'>
          <ul>
            <li>
              <a href='/'>
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaTiktok />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaInstagramSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='chat-box-1'>
        <button>
          <a href=' https://wa.me/221777081351'>
            <FaWhatsappSquare />
          </a>
        </button>
      </div>
    </div>
  )
}

export default Footer