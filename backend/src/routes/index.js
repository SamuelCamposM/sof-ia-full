const { Router } = require('express')
const router = Router();
const passport = require('passport')
const Casos = require('../models/casos')

//ruta para mostrar todos los casos
router.get('/mostrando-casos', async(req, res, next)=>{
    const casos =  await Casos.find()
    res.send(casos)
   
 })

router.get('/signup', (req, res, next) => {
    res.sendfile('src/public/signup.html')
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/signin', (req, res, next) => {
    res.sendfile('src/public/signin.html')
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