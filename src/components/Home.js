import React from 'react'
import image1 from '../images1/new-categ-2.webp'
import image2 from '../images1/new-categ-1.webp'
import image3 from '../images1/banniere-taille-basse-1.webp'
import { DefaultPlayer as Video } from 'react-html5video'
import video1 from "../images1/banner1.mp4"
import video2 from '../images1/banner2.mp4'
import video3 from '../images1/banner3.mp4'
import video4 from '../images1/banner4.mp4'
import video5 from '../images1/banner5.mp4'
import video6 from '../images1/banner6.mp4'

import image4 from '../images1/banniere-grand-boubou-fem.webp'
import image5 from '../images1/banniere-catego-hom.webp'
import Category from '../Category'
import about1 from "../images1/about1.png"

import Slider from "../Slider"
import Footer from '../Footer'
const Home = () => {
  return (
    <>
      <Slider />
      <section className='section-center banner'>
        <div className='banner-container'>
          <article className='banner-info home1'>
            {/* <img src={image1} alt='' /> */}
            <video src={video1} autoPlay loop muted></video>
          </article>
          <article className='banner-info home2'>
            <video src={video2} autoPlay loop muted></video>
            {/* <img src={image2} alt='' /> */}
          </article>
          <article className='banner-info home3'>
            <video src={video3} autoPlay loop muted></video>
            {/* <img src={image3} alt='' /> */}
          </article>
          <article className='banner-info home4'>
            {/* <img src={image4} alt='' /> */}
            <video src={video4} autoPlay loop muted></video>
          </article>
          <article className='banner-info home5'>
            {/* <img src={image5} alt='' /> */}
            <video src={video5} autoPlay loop muted></video>
          </article>
          <article className='banner-info home5'>
            {/* <img src={image5} alt='' /> */}
            <video src={video6} autoPlay loop muted></video>
          </article>
        </div>
      </section>
      <Category />
      <div className='about'>
        <article className='about-info'>
          <img src={about1} alt='' />
        </article>
        <article className='about-details'>
          <h3>cheikh mbaye</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            laboriosam nam esse quis? Id impedit eaque amet aspernatur dolorum.
            Minima, cum facere! Veritatis, fugiat! Quam reiciendis fugiat eos
            repellat laudantium.
          </p>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default Home