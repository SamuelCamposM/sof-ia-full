import { Router } from "express";
const router = Router();
import Casos from "../models/casos";
import User from '../models/user'


//ruta para mostrar todos los casos
router.get('/mostrando-casos', async (req, res) => {
    const casos = await Casos.find()
    res.send(casos)
  })


  router.get("/oneUser", async(req, res) => {
  console.log("token: ",req.query.secret_token);
  const OneUser = await User.find()
  console.log(OneUser)
  res.send(OneUser);
  });

  router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/')
  });
  
  module.exports = router;

