const {Router} = require('express')
const router = Router()
const {register, login, logout} = require("../controllers/User");


router.post("/register", register );
router.post("/login", login );
router.post('/logout', logout)


module.exports = router