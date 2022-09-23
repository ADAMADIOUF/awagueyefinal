import React, { useEffect } from 'react'


import { useGlobalContext } from './context'
export default function Slider() {
  const { slide, indexSlide, setIndexSlide, closeSubmenu } = useGlobalContext()
  useEffect(() => {
    const lastIndex = slide.length - 1
    if (indexSlide < 0) {
      setIndexSlide(lastIndex)
    }
    if (indexSlide > lastIndex) {
      setIndexSlide(0)
    }
  })
  useEffect(() => {
    let slider = setInterval(() => {
      setIndexSlide(indexSlide + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  })
  return (
    <div className='slide' onMouseOver={closeSubmenu}>
      {slide.map((slide, slideIndex) => {
        let slider = 'nextSlide'
        if (slideIndex === indexSlide) {
          slider = 'activeSlide'
        }
        if (
          slideIndex === indexSlide - 1 ||
          (indexSlide === 0 && slideIndex === slide.length - 1)
        ) {
          slider = 'lastSlide'
        }
        const { id, name, title, image } = slide
        return (
          <>
            <address className={slider} key={id}>
              <img
                src={image}
                alt=''
                className='img-slide animate__animated animate__fadeInUp'
              />

              <div className='slide-info'>
                <h3>{name}</h3>
                <p>{title}</p>
              </div>

              <div className='slide-details'>
                <h2>appelez nous sur ces numero</h2>
                <span>(+221) 772774672</span>
              </div>
            </address>
          </>
        )
      })}

    </div>
  )
}
