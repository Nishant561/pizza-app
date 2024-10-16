import React from 'react'

function Button({text}) {
  return (
   <>
    <button className='bg-[#FE5F1E] capitalize hover:bg-[#b23301] transition-all duration-150 ease-linear rounded-3xl px-6 py-2 text-white font-thin text-2xl'>
                  {text}
              </button>
   
   </>
  )
}

export default Button
