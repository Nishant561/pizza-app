import React from 'react'
import pizza from './../../assets/images/img/pizza.png'
function MenuCard() {
  return (
    <>
                      <div className='w-[265px] sh h-[370px] rounded-md p-3  relative'>
                      <div className="image-container p-3 w-full overflow-hidden flex justify-center h-1/2 ">
                              <img className='w-[65%] object-center full object-contain' src={pizza} />
                      </div>
                      <div className="pizza-description gap-4 flex flex-col items-center  p-3">
                                <h1 className='capitalize font-medium text-2xl'>Mushroom</h1>
                                <p className='text-xl text-zinc-600'>Small</p>
                                <div className="price-container absolute bottom-1 p-3 flex w-full items-center justify-between text-[#FE5F1E]">
                                  <p className='text-gold-700 text-xl font-bold'>$250</p>
                                  <button className='border-2 flex justify-center gap-5 items-center rounded-full text-xl font-medium border-[#FE5F1E] w-[120px] px-3 py-1 hover:bg-[#FE5F1E] transition-all duration-150  ease-linear hover:text-white'>
                                        <span>+</span>  Add
                                  </button>
                                </div>

                      </div>
                </div>

    </>
  )
}

export default MenuCard
