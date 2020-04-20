import passport from "passport";
const LocalStrategy = require('passport-local').Strategy;
import User  from '../models/user'

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});


passport.use('local-signup', new LocalStrategy({
  passReqToCallback: true
}, async (req, email, password, done) => {
  
  console.log("en local auth",req.body)
   const user = await User.findOne({'email':req.body.correo})
   if(user) {
     return done(null, false, req.flash('signupMessage', 'The Email is already Taken.'));
    } else {
     const newUser = new User();
     newUser.username= req.body.username
     newUser.email =req.body.correo;
     newUser.password = newUser.encryptPassword(password);
     
     await newUser.save();
   done(null, newUser);
   }
 }));
passport.use('local-signin', new LocalStrategy({

  passReqToCallback: true
}, async (req, email, password, done) => {
  
  console.log( "signin",req.body)
  console.log(req.body.correo ,"supuesto correo")
  
  const user = await User.findOne({'email': req.body.correo});
  if(!user) {
    return done(null, false, req.flash('signinMessage', 'No User Found'));
   }
  if(!user.comparePassword(password)) {
    return done(null, false,  req.flash('signinMessage', 'Incorrect Password'));
   }
   return done(null, user);
}));