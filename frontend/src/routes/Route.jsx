import {createBrowserRouter ,  RouterProvider} from 'react-router-dom'
import {Home ,Layout ,Menu ,Offers ,Register ,Login} from './../components/index'
import React from 'react'


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            
            {
                path:'',
                element:<Home/>
            },
            {
                path:'menu',
                element:<Menu/>
            },
            {
                path:'offers',
                element:<Offers/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'login',
                element:<Login/>
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


