import React from 'react'
import Product from '../assets/product2.png'

const ProductCard = (props) => {
  return (
    <>
    <div className='card bg-custom-bg-card rounded-[8px] mb-8'>
       <div className='card-text'>
         <h1 className='pl-8 pt-3 text-custom-text text-lg font-medium'>Box Packaging (6)</h1>
       </div>
        <div className='card-img'>
        <img src={Product} />
        </div>
        <div className='card-detail mb-5 ml-3'>
          <ul>
            <li>testing 1</li>
            <li>testing 2</li>
            <li>testing 3</li>

          </ul>
        </div>
    </div>
    </>
  )
}

export default ProductCard