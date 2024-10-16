import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard'

function MenuContainer() {

  const [product , setProduct] = useState(null)

  const getAllMenu = async()=>{
    try {
        const response = await fetch('http://127.0.0.1:8000/menu')
        const data = await response.json()
        setProduct(data.data.product)
        
        
        

    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(()=>{
      getAllMenu()
  },[product])

  return (
    <>
                  <div className='grider'>
                            {
                             product &&  product.map((items , index)=>(
                                <MenuCard key={index} item={items} />
                              ))
                            }

                        
            </div>

    </>
  )
}

export default MenuContainer
