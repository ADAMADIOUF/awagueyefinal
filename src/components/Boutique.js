import React from 'react'
import product from '../dataProducts'

const Boutique = () => {
 
 console.log(filterProduct);
  return (
    <section className='section-center boutique'>
     
     <div className="boutique-container">
      {
       product.map((boutique) =>{
         const { images, name, price, id } = boutique
         return(
          <article className='boutique-info'key={id}>
           <img src={images[0]} alt="" />
           <div className="boutique-details">
            <h3>{name}</h3>
            <p>{price}CFA</p>
           </div>
          </article>
         )
       })
      }
     </div>
    </section>
  )
}

export default Boutique