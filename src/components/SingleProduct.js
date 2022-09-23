import React,{useState,useRef} from 'react'
import { FaWhatsappSquare } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
 import product from '../dataProducts'
import Footer from '../Footer'
const SingleProduct = () => {
  const imgDiv = useRef(null)
  const{handleSubmenu} = useGlobalContext()
 const [index, setIndex] = useState(0)
 const {id}= useParams()
   
 const singleProduct = product.filter((product) =>{
  return product.id === id
 })


  const handleMouse = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
  }
  return (
    <>
      <div className='single-product' onMouseOver={handleSubmenu}>
        {singleProduct.map((product) => {
          const { images, name, price, sizes, description, content } = product
          return (
            <>
              <div className='singleProduct-container'>
                <div
                  className='big-img'
                  onMouseMove={handleMouse}
                  style={{ backgroundImage: `url(${images[index]})` }}
                  ref={imgDiv}
                  onMouseLeave={() =>
                    (imgDiv.current.style.backgroundPosition = `center`)
                  }
                ></div>
                <div className='small-img-container'>
                  {images.map((img, index) => {
                    return (
                      <article className='small-img'>
                        <img src={img} alt='' onClick={() => setIndex(index)} />
                      </article>
                    )
                  })}
                </div>

                <div className='singleProduct-details'>
                  <h3>{name}</h3>
                  <h2>{price} CFA</h2>
                  <p>{description}</p>
                  <p>{content}</p>
                  <div className='size'>
                    <h3>taille:</h3>
                    {sizes.map((size) => {
                      return (
                        <div className='size-details'>
                          <button className='size-btn'>{size}</button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className='chat-box-1'>
                <button>
                  <a href=' https://wa.me/221777081351'>
                    <FaWhatsappSquare />
                  </a>
                </button>
              </div>
            </>
          )
        })}
      </div>
      
    </>
  )
}

export default SingleProduct