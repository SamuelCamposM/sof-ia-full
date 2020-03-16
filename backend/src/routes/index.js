const { Router } = require('express')
const router = Router();
const Casos = require('../models/casos')



//ruta para mostrar todos los casos
router.get('/mostrando-casos', async(req,res)=>{
    const casos =  await Casos.find()
    res.send(casos)
   
 })
module.exports = router;