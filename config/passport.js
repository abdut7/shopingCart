var passpot=require('passport')

var User=require('../models/user')
var localStratagy=require('passport-local').Strategy;

passpot.serializeUser((user,done)=>{
done(null,user.id)
})

passpot.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user)
    })
})

passpot.use('local.signup',new localStratagy({
    usernameField:'email',
    asswordField:'password',
    passReqToCallback:true
},(req,email,password,done)=>{
    User.findOne({'email':email},function (err,user) {
        if(err){
            return done(err+"ytyt")
        }
        if(user){
            return done(null,false,{message:'Email is Already in use'})
            console.log('signupMessage', 'That email is already taken.');
        }
        var newUser=new User()
        newUser.email=email
        newUser.password=newUser.encryptPassword(password);
        newUser.save(function (err,result) {
            if(err)
                return done(err+"ui")
            return done(null,newUser )
        })


    })
}))