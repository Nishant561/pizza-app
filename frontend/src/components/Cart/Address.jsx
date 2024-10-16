import React from 'react'
import { Button } from "./../index";
function Address() {
  return (
    <>
      <form className="absolute flex flex-col gap-4 bottom-0 right-0">
            <input
              className="w-[400px]  py-2 px-2 border placeholder:text-xl"
              type="text"
              placeholder="Address"
            />
            <div className="flex justify-end">
            <button type='submit' className='bg-[#FE5F1E] capitalize hover:bg-[#b23301] transition-all duration-150 ease-linear rounded-3xl px-6 py-2 text-white font-thin text-2xl'>
                  Order Now
              </button>
            </div>
          </form>
    </>
  )
}

export default Address
