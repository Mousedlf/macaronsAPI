const mongoose = require('mongoose')

const MacaronSchema = new mongoose.Schema({

    name:{
        type: mongoose.SchemaTypes.String
    }

})

mode.exports = mongoose.model('macarons', MacaronSchema)