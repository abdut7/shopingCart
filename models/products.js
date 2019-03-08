var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var schema=new Schema ({
    imagepath:{
        type:String,required:true
    },
    tittle:{type: String,reaquired:true},
    description:{type:String,required: true},
    price:{type:Number,reaquired: true }
});

module.exports=mongoose.model('Product',schema);