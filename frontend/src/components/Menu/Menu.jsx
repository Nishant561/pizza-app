import React from 'react'

import MenuContainer from './MenuContainer'

function Menu() {
  return (
    <>
      <div className='max-w-[1200px] mx-auto pt-8'>
            <h1 className='font-bold text-4xl mb-9'>All Pizzas</h1>
            <MenuContainer/>
      </div>
    </>
  )
}

export default Menu
