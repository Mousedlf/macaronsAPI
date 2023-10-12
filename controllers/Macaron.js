const Macaron = require('../models/Macaron')

//ici les methodes async
async function index(req,res){}

async function show(req,res){}

async function create(req,res){
    let {...data} = req.body
    await Macaron.create({...data})
    res.sendStatus(201)
}

async function edit(req,res){}

async function remove(req,res){}


module.exports = {index, show, create, edit, remove}