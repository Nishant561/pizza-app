import React from 'react'
import pizza from './../../assets/images/img/pizza.png'
function Product() {
  return (
    <>
      <div>
            <div className='items  border-b-4 border-gray-600 p-7 flex items-center justify-between' >
                <div className="items-added ">
                <div className='w-[140px]  h-[140px]'>
                    <img className='w-full object-contain object-center' src={pizza} alt='product-image' />
                </div>

                <div className='flex flex-col'>
                    <h1 className='font-semibold text-2xl'>Marinara</h1>
                    <p className='text-gray-500 uppercase'>Small</p>
                </div>
                </div>

                <div>
                    <h1 className='font-semibold text-2xl'>1pcs</h1>
                </div>
                <div>
                    <h1 className='font-semibold text-[#FE5F1E] text-2xl'>$300</h1>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

export default Product
