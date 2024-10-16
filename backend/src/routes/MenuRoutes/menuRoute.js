const express = require('express')
const {Menu} = require('./../../db/schema/menuModel')
const menuRouter = express.Router()

menuRouter.get('/menu', async(request , response)=>{
    try {
        
        const product = await Menu.find({})

        response.status(200).json({
            success:true,
            message:'All menu is retrived',
            data:{
                product
            }
        })


    } catch (error) {
        response.status(404).json({
            success:false,
            message:"Error:: " + error.message
        })
    }
})

menuRouter.post('/menu/add', async(request , response)=>{
    try {
        const product = await Menu.insertMany([request.body])

        response.status(201).json({
            success:'true',
            message:"Products added successfully.",
            data:{
                product
            }
        })

    } catch (error) {
        response.status(400).json({
            success:false,
            message:'Error:: ' + error.message,
        })
    }
})


module.exports = {
    menuRouter
}