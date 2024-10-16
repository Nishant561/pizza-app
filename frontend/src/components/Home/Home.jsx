import React from 'react'
import {Button} from './../index'
import heroPizza from './../../assets/images/img/hero-pizza.png'
function Home() {
  return (
    <>
    <section className='hero w-full bg-[#F8F8F8]'>
    <div className='max-w-[1200px]  mx-auto flex-container pt-8'>
        <div className='left w-1/2'>
              <h6 className='text-2xl text-zinc-900'><em>Are you hungry?</em></h6>
              <h1 className='text-[60px] font-bold text-zinc-700 mb-6'>Don't wait !</h1>
              <Button text='Order Now' />
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
