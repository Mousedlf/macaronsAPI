const {Router} = require('express')
const router = Router()
const Macaron = require('../models/Macaron')

const {index, show, create, edit, remove} = require('../controllers/Macaron') //methodes

// les routes ici
router.post('/add', create)


module.exports = router