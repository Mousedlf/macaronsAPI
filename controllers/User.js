const User = require('../models/User')
const bcrypt = require("bcryptjs");

async function register(req,res){
    const {...userParams} = req.body

    user = await User.findOne({email: userParams.email});
    if(user){ res.send('nope')}

    const hashedPw = await bcrypt.hash(userParams.password, 12); //12? for randomness

    user = User.create({
        username: userParams.username,
        email: userParams.email,
        password: hashedPw
    });

    res.send('patate créée')
}

async function login(req,res){
    const {...userParams} = req.body
    user = await User.findOne({email: userParams.email})

    if(!user){
        res.send('inexistant')
    }

    const pwMatch = await bcrypt.compare(userParams.password, user.password)
    if(!pwMatch){
        res.send('meep')
    }

    req.session.isAuth = true;
    res.send( user.username + ' connecté')

}

async function logout(req,res){
    if(!req.session.isAuth){
        res.send("pas de user connecté")
    }

    req.session.destroy()
    res.send("deconnecté")

}

module.exports = {register, login, logout}