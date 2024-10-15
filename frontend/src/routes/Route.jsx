import {createBrowserRouter ,  RouterProvider} from 'react-router-dom'
import {Home ,Layout ,About , Contact} from './../components/index'
import React from 'react'


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            }

        ]
    }
])


function Route() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Route


