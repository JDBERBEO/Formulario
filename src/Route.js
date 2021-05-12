const { Router } = require('express')
const router = Router()

const {
    getUsers,
    getRegister,
    createUser
} = require('./controller')

// router.get('/', (req, res) => {
//     res.send("<h1>Hola</h1> " + req.query.name)}) 
//router.post('/', countVisitor)
router.get('/', getUsers)
router.post('/register', createUser)
router.get('/register', getRegister)

module.exports = router