import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import woman from "../../src/images1/woman.png"
import machine from '../../src/images1/machine.png'

import Footer from "../../src/Footer"
const Woman = () => {
  const { closeSubmenu, productWoman } = useGlobalContext()
  return (
    <>
      <div className='woman' onMouseOver={closeSubmenu}>
        <div className='header-woman'>
          <div className='header-details'>
            <h3>femmes</h3>
            <div className='images-header-container'>
              <article className='img-machine'>
                <img src={machine} alt='' />
              </article>
              <article className='img-person'>
                <img src={woman} alt='' />
              </article>
            </div>
            <div className='last-details'>
              <h3>femmes</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='woman-product'>
        <div className='woman-product-container'>
          {productWoman.map((product) => {
            const { images, name, price, id } = product
            return (
              <div className='woman-product-details' key={id}>
                <Link to={`/productWoman/${id}`}>
                  <div className='woman-img-products'>
                    <img
                      src={images[0]}
                      alt=''
                      className='woman-img-product-1'
                    />

                    <img
                      src={images[1]}
                      alt=''
                      className='woman-img-product-2'
                    />
                  </div>
                </Link>
                <div className='product-woman-info'>
                  <h3>{name}</h3>
                  <p>{price} CFA</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Woman