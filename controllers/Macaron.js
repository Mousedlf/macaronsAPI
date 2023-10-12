const Macaron = require('../models/Macaron')

//ici les methodes async
async function index(req,res){
    let macarons = await Macaron.find({})
    res.send(macarons)
}

async function show(req,res){
    let {...params} = req.params
    let macaron = await Macaron.findOne({...params})
    res.send(macaron)
}

async function create(req,res){
    let {...data} = req.body
    await Macaron.create({...data})
    res.send("Apparition nouveau macaron")
}

async function edit(req,res){
    let {...params} = req.params
    let {...updatedData} = req.body
    await Macaron.findOneAndUpdate({...params},{...updatedData})
    res.send("il était pas beau mon macaron?")

}

async function remove(req,res){
    let {...params} = req.params
    await Macaron.findOneAndDelete({...params})
    res.send("pas gentil")
}


module.exports = {index, show, create, edit, remove}