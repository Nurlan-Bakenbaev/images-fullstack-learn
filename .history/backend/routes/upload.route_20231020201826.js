const { Router } = require("express");
const fileMiddleWare = require('../')

const router = Router()
router.post('/upload', (req,res)=>{
try {
    
} catch (error) {
    console.log(error)
}
})
module.exports = router