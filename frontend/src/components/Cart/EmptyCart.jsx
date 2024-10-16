import React from 'react'
import emptyCart from './../../assets/images/img/empty-cart.png'
import {Button} from './../index'
import {Link} from 'react-router-dom'
function EmptyCart() {
  return (
    <>
      <div className='empty-cart-container max-w-[1200px] mx-auto flex flex-col justify-center items-center '>
                <h1 className='text-4xl font-bold '>Cart Empty 😢</h1>
                <p className='text-center pt-4 text-2xl text-zinc-500 pb-6'>You Probably haven't ordered a pizza yet.<br/>
                    To order a pizza, go to the menu page.
                </p>
                <img className='w-2/5' src={emptyCart} />

                <Link to={'/menu'} className='mt-6'>
                <Button text='Go Back' />
                
                </Link>
                

            </div>
    </>
  )
}

export default EmptyCart
