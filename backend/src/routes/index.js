import {Router} from "express";
const router = Router();
import passport from "passport";
const Casos = require('../models/casos')

//ruta para mostrar todos los casos
router.get('/mostrando-casos', async(req, res, next)=>{
    const casos =  await Casos.find()
    res.send(casos)
   
 })

 router.post("/signup", function (req, res, next) {
  console.log(req.isAuthenticated()); //devuelve un false si no estas logueado o un true si lo estas
  passport.authenticate("local-signup", function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('http://localhost:8080/');
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect('http://localhost:8080/home');
    });
  })(req, res, next);
});


router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

router.get('/profile', isAuthenticated, (req, res, next) => {
    res.sendfile('src/public/profile.html')
})

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/')
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/signin')
};

module.exports = router;