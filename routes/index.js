var express = require('express');
var router = express.Router();
var products=require('../models/products')

/* GET home page. */
router.get('/', function(req, res, next) {
 products.find((err,docs)=>{
var productChunk=[];
var chunkSize=3;
for(var i=0;i<docs.length;i=i+chunkSize){
  productChunk.push(docs.slice(i,i+chunkSize));

}


   res.render('shop/index', { title: 'Express',products:docs });
 });

});

module.exports = router;
