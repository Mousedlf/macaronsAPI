const express = require('express')
const app = express()
const port = 3000

//routes
const macaronRoutes = require('./routes/macarons')
const userRoutes = require('./routes/user')

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('./models/User')

// session cookie
const session = require('express-session')
const mongodbSession = require('connect-mongodb-session')(session)

// db
const mongodbUri = "mongodb://localhost:27017/macarons";
mongoose.connect(mongodbUri, {useNewUrlParser: true})
    .then(()=>{
        console.log('connecté')
    })
    .catch((err)=>console.log(err))

const store = new mongodbSession({
    uri: mongodbUri,
    collection: 'sessions'
})


const isAuth = (req,res,next)=>{
    if(req.session.isAuth){
        next()
    }else{
        res.send('connecté? nope')
    }
}
// initialisation, set start session
app.use(session({
    secret: 'a key that is a string that will sign cookie',
    resave: false,
    saveUninitialized: false,
    store: store
}))
app.get('/', (req,res)=>{
    req.session.isAuth =  true
    res.send("session ok")
})


app.use(express.json()) // deseraliser
app.use('/api/macarons', isAuth, macaronRoutes)
app.use('/api/user', userRoutes)

app.listen(port,()=>{
    console.log("youhou")
})