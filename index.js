const express = require('express')
const app = express()
const port = 3000

const macaronRoutes = require('./routes/macarons')
const mongoose = require('mongoose')


mongoose
    .connect('mongodb://localhost:27017/macarons')
    .then(()=>{
        console.log('connecté')
    })
    .catch((err)=>console.log(err))


app.use(express.json()) // deseraliser
app.use('api/macarons', macaronRoutes)


app.listen(port,()=>{
    console.log("youhou")
})