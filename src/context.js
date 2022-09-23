import React, { useState, useContext } from 'react'
import sublinks from './data'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [index, setIndex] = useState(0)
     const [indexSlide, setIndexSlide] = useState(0)
 const [isSidebarOpen, setIsSidebarOpen] = useState(false)
 const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
 const [page, setPage] = useState({ page: '', links: [] })
 const [location, setLocation] = useState({})
 const openSidebar = () => {
   setIsSidebarOpen(true)
 }
 const closeSidebar = () => {
   setIsSidebarOpen(false)
 }
 const openSubmenu = (text, coordinates) => {
   const page = sublinks.find((link) => link.page === text)
   setPage(page)
   setLocation(coordinates)
   setIsSubmenuOpen(true)
 }
 const closeSubmenu = () => {
   setIsSubmenuOpen(false)
 }

  const [productWoman, setProductWoman] = useState([
    {
      id: '1',
      name: 'costume africaine cotton,filafil,',
      category: 'boubou',
      price: 30000,
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/c40dbef5f98457e5a9165c0043a06007/6fba494f',
        'https://dl.airtable.com/.attachmentThumbnails/acff2da5cb09d1a6d9b29717a5db0bda/f3e4a8bd',
        
      ],
      description:
        'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
      content:
        'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
    },
  ])
   const [productMan, setProductMan] = useState([
     {
       id: '1',
       name: 'costume africaine cotton,filafil,',
       category: 'boubou',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/b8621a677bc8ae3faf37fdb8208010f8/8f087d8b',
         'https://dl.airtable.com/.attachmentThumbnails/841b0bcccd55148c69fbbb1ca58d01d4/ab854de5',
         'https://dl.airtable.com/.attachmentThumbnails/afa3dd917491fb3393b251feea783664/8ad02169',
       ],
       description:
         'Plébiscité par le monde du stylisme,awa gueye Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '2',
       name: 'costume africaine cotton,filafil',
       category: 'boubou',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/2f830cee7a2600c74e696ed3256f58bf/1827d8c1',
         'https://dl.airtable.com/.attachmentThumbnails/10e0064bf6b88aa9cff901660c8cd1ee/5cb4d798',
         'https://dl.airtable.com/.attachmentThumbnails/11540f634d62db33317e3ef4fdb8747e/8469b5e4',
       ],
       description:
         'Plébiscité par le monde du stylisme,awa gueye Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'green'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '3',
       name: 'costume africaine cotton,filafil',
       category: 'bazin',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/d3f00f6cad16369bc41a6c5e9bbf867a/7d536f85',
         'https://dl.airtable.com/.attachmentThumbnails/4dcb9fff3324e186f7bd6b00f039fe53/89cb5610',
         'https://dl.airtable.com/.attachmentThumbnails/f51c4bb8c63dc9e2a7a814068011bed4/661570a6',
       ],
       description:
         'Plébiscité par le monde du stylisme, awa gueye Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['yellow', 'red', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '4',
       name: 'costume africaine cotton,filafil',
       category: 'bazin',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/f5e65582cb9faceab18bf6412e94ebd0/3e0d51f0',
         'https://dl.airtable.com/.attachmentThumbnails/cd465094a6792e6f1fcab395d3b21f35/10e50ab3',
         'https://dl.airtable.com/.attachmentThumbnails/3fc01bc0c0a8d69c0581558d4f0eefa0/8db8089c',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'green'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '5',
       name: 'costume africaine cotton,filafil',
       category: 'jusner',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/711d17f228ded306457b393afc80839b/3869a8cd',
         'https://dl.airtable.com/.attachmentThumbnails/54bfeb70060a8f4120317f58d8df6812/d7ff9df6',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '6',
       name: 'costume africaine cotton,filafil',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/759586364dca877a08c803199c5199de/0ed842c1',
         'https://dl.airtable.com/.attachmentThumbnails/6b9c44a42d0277c8d06c90372dad2f5e/bb050a44',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['green', 'yellow', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '7',
       name: 'robe bazin,homme',
       price: 40000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/ba14dc286dbb2ad02cc0ffe112af6e61/734a9e8e',
         'https://dl.airtable.com/.attachmentThumbnails/370ee905f54cab4ccc682d3420113768/557bd9fa',
         'https://dl.airtable.com/.attachmentThumbnails/931eea26ccf7f31144f786ff40597e84/57686f59',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '8',
       name: 'robe bazin,homme',
       price: 40000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/aeb6d257a81d57897bf09f5984469927/c52634b2',

         'https://dl.airtable.com/.attachmentThumbnails/ea14a6c8516277852a1ccd96524a6cef/1ee6bde1',
       ],
       description:
         'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '9',
       name: 'robe wax femme',
       price: 15000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/1dce80a5b3ca3a7c7e814f6dd19c9a0d/4850b6cf',
         'https://dl.airtable.com/.attachmentThumbnails/c4d41196cb641890e48b23d48cd90c73/6fa6174b',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '10',
       name: 'robe bazin,homme',
       price: 40000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/a6d861beddb1b94ef01f24c6e4477428/f609f83e',
         'https://dl.airtable.com/.attachmentThumbnails/0053296f87362cd41926214db6fc90be/f2e55cc4',
         'https://dl.airtable.com/.attachmentThumbnails/9550fd51d271ae20747e5043854ea6aa/33f76287',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '11',
       name: 'robe femme',
       price: 15000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/8347fab8703119f9b3098a0bb168c243/f3b61d43',
         'https://dl.airtable.com/.attachmentThumbnails/813630473f5c126fea0574ba64bbe3fc/67e2cef2',
         'https://dl.airtable.com/.attachmentThumbnails/86a96bda556f4a7a041c9aa63f86e095/f6095b3b',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '12',
       name: 'robe femme',
       price: 15000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/37d40c9e76e62194876813cfff86b4ef/79d1e4d7',
         'https://dl.airtable.com/.attachmentThumbnails/65a91233baeffc5ddece820d0fad2a20/07ccda52',
         'https://dl.airtable.com/.attachmentThumbnails/74381c6a1bbaf7b936681624d8c287b6/5afed7c6',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '13',
       name: 'costume africaine cotton,filafil',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/c6641d6e3b32c6478e1c2e661fa7ebef/0a2ffa8e',
         'https://dl.airtable.com/.attachmentThumbnails/4c1801908e906d7a269063070ca7533f/e3ecccc2',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '14',
       name: 'robe femme',
       price: 15000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/baf28cbf3e9d93c2d8ed004afd1262c3/f4783885',
         'https://dl.airtable.com/.attachmentThumbnails/5daf377ccb1a5cb2b54851e1fcbc06e0/1ca87943',
         'https://dl.airtable.com/.attachmentThumbnails/840284cdae75f98b611c7a0f55a41224/a3c61b1e',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '15',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/fdf4b649b18a8a3d2fe800f9606c8386/6aea24ad',
         'https://dl.airtable.com/.attachmentThumbnails/611547d368380c1625951acb8afc19b1/7df4c449',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '16',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/768d585f23f2a6c297a5277035f4c47f/e939b36a',
         'https://dl.airtable.com/.attachmentThumbnails/ba1f806e0540b34473e6226c8a2e29b9/9d6f8bbf',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '17',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/de64f707c37dfb6bbd9486c9cae6fe07/eef24a3a',
         'https://dl.airtable.com/.attachmentThumbnails/276d1cb66336242463186a58ae89b916/5e13e27d',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '18',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/9a4936386820cd48085e9c1362bda8d9/b141aaff',
         'https://dl.airtable.com/.attachmentThumbnails/5ba069fc741ce294352c2a0f8971a286/f8b4f552',
         'https://dl.airtable.com/.attachmentThumbnails/728e6be3ff3a9c6a2f6fbf57e5ad508e/a01dfef5',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '19',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/58bfc3c9fe99ff7a2fbb23564d3ffdc0/4066f976',
         'https://dl.airtable.com/.attachmentThumbnails/1c5920b1028b8d694f657bece8842634/60e36893',
         'https://dl.airtable.com/.attachmentThumbnails/55f2f71a1f0aea8560968545f61bc0a4/3e0c6b21',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '20',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/5fef057d2d9ae9e81cd7645613a4f699/1ce48c58',
         'https://dl.airtable.com/.attachmentThumbnails/40a9c7f1ccb3cd054c187b24d65ba9e0/52e2f0fd',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '21',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/e3e08058d6ac7695bb5bc527580768b6/db1fb06c',
         'https://dl.airtable.com/.attachmentThumbnails/611547d368380c1625951acb8afc19b1/7df4c449',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '22',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/d08306e16b4ab9a864915cb6733f3275/2fae0cf9',
         'https://dl.airtable.com/.attachmentThumbnails/5d2fbd19e6aaee4a5a04dfccba174eba/1175ec13',
         'https://dl.airtable.com/.attachmentThumbnails/39b88dea584914ccda403e2eb6b62a1c/5eb94dbd',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '23',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/1b867fafaa307a1699f7fdf4dc5458c2/02038f32',
         'https://dl.airtable.com/.attachmentThumbnails/d9cb400bfbcbce5101d615a6f0050b62/ae667315',
         'https://dl.airtable.com/.attachmentThumbnails/0f3010459c3950159961522e806adeb3/471d9822',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '24',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/077ac872f932923ade057a55063ccaab/11705944',
         'https://dl.airtable.com/.attachmentThumbnails/a8639b1df2109c7cc8bf4aa1a1ac9b54/a52be8f5',
         'https://dl.airtable.com/.attachmentThumbnails/2b73d6a60641fc7a20c8954489a93d2a/61941623',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '25',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/e05ee84e5c8831334364ac825d2b527f/34770828',
         'https://dl.airtable.com/.attachmentThumbnails/d814fe025343bf3757bbf0af8ad0bf81/6021e87e',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '26',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/6265b96951fc334f5b40c9150ef37e7f/c9558923',
         'https://dl.airtable.com/.attachmentThumbnails/0bcc96294fd7558c5803a29cb1938ed0/9af673a8',
         'https://dl.airtable.com/.attachmentThumbnails/7f2a3d073a88433c2ca18ebf6181f695/79c0c212',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '27',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/c5332728359a0e7b9decc7ac917fdd3a/75200a6f',
         'https://dl.airtable.com/.attachmentThumbnails/3148c14cafde02ffb19dce52ebf252ae/c2c75ead',
         'https://dl.airtable.com/.attachmentThumbnails/1d7df82059ded6624fff915f684d8238/f13cf2c0',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '28',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/45e6bb745f39aec8c97d68981c25a2b8/46defea2',

         'https://dl.airtable.com/.attachmentThumbnails/1031a13ca9d4e411bacf7a91454f182b/876372ff',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '29',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/e0c8d90c4833584f1bbdbca4b7057d6a/0746c66a',
         ' https://dl.airtable.com/.attachmentThumbnails/3723769a07a990c3c92df83b13d3ac1e/f9f368f1',
         'https://dl.airtable.com/.attachmentThumbnails/55f2f71a1f0aea8560968545f61bc0a4/3e0c6b21',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '30',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/7f4d8c1ff140dd7aed59e152f9fbe5c9/d579fb84',
         'https://dl.airtable.com/.attachmentThumbnails/4a6803ce743bc1fad08c2b5d278ae48c/5255cd8f',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '31',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/c3d8cf913742c5cdde56dd3666fe68f0/804307c4',
         'https://dl.airtable.com/.attachmentThumbnails/7e1a207a0a414f2f1fd0fd8845207b8e/ac0ad1d0',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '32',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/904feaa78ca8c98a6aea15d54d8d6523/a40000b4',

         'https://dl.airtable.com/.attachmentThumbnails/18de41326bf425d83726be31320abbde/4cf333a6',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '33',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/6bcb423e542c56f0e93b818d8b82f0f8/7d335b30',
         'https://dl.airtable.com/.attachmentThumbnails/611547d368380c1625951acb8afc19b1/7df4c449',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '34',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/d9f0d9972b61a4a994603ef171cf9ce9/699453ca',
         'https://dl.airtable.com/.attachmentThumbnails/611547d368380c1625951acb8afc19b1/7df4c449',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '35',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/e27619b1379ff23b384abc84dec7597e/0bc97eea',
         'https://dl.airtable.com/.attachmentThumbnails/f1e420bc47f57e9626c9bad6260ad018/3c16813b',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '36',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/1f64d448c6b180ac9143aa3ba7464069/b959cf71',
         'https://dl.airtable.com/.attachmentThumbnails/6ecc411bc3304351bfe8ace20c6cc634/394d050b',
         'https://dl.airtable.com/.attachmentThumbnails/99b7b282d09fdfa71e419129b67195ad/cb4712ab',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '37',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/125b458af3d3ea902f4de41a5e4b3712/992e69e9',
         'https://dl.airtable.com/.attachmentThumbnails/598517432ef3c396c78e8113e371a6dd/55ad9b70',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '38',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/a9f1e2519dade98fd7a06d397460074d/eda7b9df',
         'https://dl.airtable.com/.attachmentThumbnails/0a9a07e531332144df2a2e928ede9792/d0cc658e',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
     {
       id: '39',
       name: 'boubou tradionnel',
       price: 30000,
       images: [
         'https://dl.airtable.com/.attachmentThumbnails/372e6b390c25e3b6b5c8ec08420cc911/9998372c',
         'https://dl.airtable.com/.attachmentThumbnails/0a9a07e531332144df2a2e928ede9792/d0cc658e',
       ],
       description:
         'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
       content:
         'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
       colors: ['red', 'black', 'teal'],
       sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     },
   ])
const [slide, setSlide] = useState([
  {
    id: 1,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/f0bd58924bf04742b582c7cdb3c452ba/90dc321a',
    name: 'boubou africain',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
  {
    id: 2,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/c9b093826c4f9322c3aad29f823f8f2f/025e877b',
    name: 'uniforme scolaire',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
  {
    id: 3,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/0053e4d302938e9408b9139cd51dcd2f/a4f6979b',
    name: '',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
  {
    id: 4,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/07cae7cf77ecfe0e3c6813d4fedf3c65/ce8abc86',
    name: 'boubou  africain,homme',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
  {
    id: 5,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/2b86d4abd4100f42695e37646cea9d2f/918e5fea',
    name: 'boubou africain,homme',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
  {
    id: 6,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/eb5562b3461397eb931c923b33b35feb/1eca36f0',
    name: '',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
  {
    id: 7,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/61d6e449a6620fdfa90f835a14bb4f9f/fadd4378',
    name: '',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
  {
    id: 8,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/502cae799b3cf1b3ffeaa506da5568d6/4d6cf091',
    name: '',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
  {
    id: 9,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/b09e0f04a71f5052ea1f81559a207653/4a3d6791',
    name: '',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
  {
    id: 10,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/2c3cb70966e66270ad9834a8f7977161/28b95eff',
    name: '',
    title:
      "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
  },
])

  return (
    <AppContext.Provider
      value={{
        setProductWoman,
        productWoman,
        setProductMan,
        productMan,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        index,
        setIndex,
        indexSlide,
        setIndexSlide,
        slide,
        setSlide
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
