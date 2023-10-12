const mongoose = require('mongoose')

const MacaronSchema = new mongoose.Schema({

    name:{
        type: mongoose.SchemaTypes.String
    }

})

module.exports = mongoose.model('macarons', MacaronSchema)