const {Router} = require('express')
const router = Router()
const Macaron = require('../models/Macaron')

const {index, show, create, edit, remove} = require('../controllers/Macaron') //methodes

// les routes ici

router.get('/', index)
router.get('/:name', show)

router.post('/add', create)
router.put('/edit/:name', edit)
router.delete('/delete/:name', remove)

module.exports = router