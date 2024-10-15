import React from 'react'

import heroPizza from './../../assets/images/img/hero-pizza.png'
function Home() {
  return (
    <>
    <section className='hero w-full bg-[#F8F8F8]'>
    <div className='max-w-[1200px]  mx-auto flex-container pt-8'>
        <div className='left w-1/2'>
              <h6 className='text-2xl text-zinc-900'><em>Are you hungry?</em></h6>
              <h1 className='text-[60px] font-bold text-zinc-700 mb-6'>Don't wait !</h1>
              <button className='bg-[#FE5F1E] capitalize hover:bg-[#b23301] transition-all duration-150 ease-linear rounded-3xl px-6 py-2 text-white font-thin text-2xl'>
                  Order Now
              </button>
        </div>
        <div className='right w-1/2'>
              <img src={heroPizza} className='w-[600px]' alt='pizza image' />

        </div>
      </div>
    </section>
      
      
    </>
  )
}

export default Home
