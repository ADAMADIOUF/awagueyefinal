import React,{useState} from 'react'
import Categories from './Categories'
import Products from './Products'
import product from "./dataProducts"

const allCategories = [
  'all',
  ...new Set(product.map((item) => item.category)),
]
  const Category = () => {
     const [ menuItems, setMenuItems]= useState(product)
const [categories, setCategories] = useState(allCategories)
     const filterItems = (category) => {
       if (category === 'all') {
         setMenuItems(product)
         return
       }
       const newItems = product.filter((item) => item.category === category)
       setMenuItems(newItems)
     }
  return (
    <main>
      <section className='menu section'>
        <Categories categories={categories} filterItems={filterItems} />
        <Products product={menuItems} />
      </section>
    </main>
  )
}

export default Category