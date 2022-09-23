import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
const Products = ({ product }) => {
  const{closeSubmenu} = useGlobalContext()
  return (
    <section className='section-center'>
      <div className='products-container' onMouseOver={closeSubmenu}>
        {product.slice(0, 8).map((product) => {
          const { images, name, price, id } = product
          return (
            <Link to={`/product/${id}`}>
              <article className='product-info' key={id}>
                <img src={images[0]} alt='' />

                <div className='products-details'>
                  <h3>{name}</h3>
                  <p>{price}CFA</p>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Products