import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import man from '../../src/images1/man.png'

import machine from '../../src/images1/machine.png'

import Footer from '../Footer'
const Man = () => {
 const { closeSubmenu, productMan } = useGlobalContext()
 const[loadMore,setLoadMore] = useState(6)
 const loadMoreBtn =() =>{
setLoadMore(loadMore + loadMore)
 }
 const slice = productMan.slice(0,loadMore)
  return (
    <>
      <div className='woman' onMouseOver={closeSubmenu}>
        <div className='header-woman'>
          <div className='header-details'>
            <h3>hommes</h3>
            <div className='images-header-container'>
              <article className='img-machine'>
                <img src={machine} alt='' />
              </article>
              <article className='img-person'>
                <img src={man} alt='' />
              </article>
            </div>
            <div className='last-details'>
              <h3>hommes</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='woman-product'>
        <div className='woman-product-container'>
          {slice.map((product) => {
            const { images, name, price, id } = product
            return (
              <div className='woman-product-details' key={id}>
                <Link to={`/productMan/${id}`}>
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
      <button className='btn-loader-more' onClick={() => loadMoreBtn()}>
        charger plus
      </button>
      <Footer />
    </>
  )
}

export default Man