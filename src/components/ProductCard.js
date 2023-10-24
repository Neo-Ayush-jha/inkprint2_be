import React from 'react'
import Product from '../assets/img/product2.png'

const ProductCard = (props) => {
  console.log(props.image);
  return (
    <>
    <div className='card bg-custom-bg-card rounded-[8px] mb-8 w-[300px]'>
       <div className='card-text'>
         {/* <h1 className='pl-8 pt-3 text-custom-text text-lg font-medium'>Box Packaging (6)</h1> */}
       </div>
        <div className='card-img'>
        <img src={props.image} />
        </div>
        <div className='card-detail mb-2 ml-3'>
          <h1 className='text-sm text-[#00A6DB] font-normal'>{props.title}</h1>
        </div>
    </div>
    </>
  )
}

export default ProductCard