var express = require('express');
var router = express.Router();

var csurf = require('csurf')
var passport=require('passport')

var products=require('../models/products')
var csurfProyection=csurf()
router.use(csurfProyection)

/* GET home page. */
router.get('/', function(req, res, next) {
 products.find((err,docs)=>{
var productChunk=[];
var chunkSize=1;
for(var i=0;i<docs.length;i=i+chunkSize){
  productChunk.push(docs.slice(i,i+chunkSize));

}


   res.render('shop/index', { title: 'Express',products:docs });
 });

});

router.get('/user/signup',(req,res,next)=>{
    var message=req.flash('error');
    res.render('user/signup',{csrfToken:req.csrfToken(),meassage:message,hasError:message.length>0})
    console.log('test   ,,,,,,.');

})
router.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/user/profile',(req,res,next)=>{
    console.log('hy  success ');
    res.render('user/profile')


})
module.exports = router;
