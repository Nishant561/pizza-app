import React from 'react'
import EmptyCart from './EmptyCart'
import NonEmptyCart from './NonEmptyCart'
function Cart() {
  return (
    <>
      <div className='cart   '>
           <NonEmptyCart />
      </div>
    </>
  )
}

export default Cart
