var Products=require('../models/products')
var mongoos=require('mongoose')

mongoos.connect('mongodb://localhost:27017/shoping',{useNewUrlParser: true})

var productitems=[
    new Products({
        imagepath: "https://images-na.ssl-images-amazon.com/images/I/71ka0dQaXdL._SX425_.jpg",
        tittle: "Smart Fitness Band",
        description:"Smart Fitness Band, HolyHigh 115Plus Fitness Tracker Watch with Heart Rate Monitor Sport Activity Tracker Band with Step Counter Sleep Monitor Call SMS Notifications for Men Women",
        price:"2399"
    }),new Products({
        imagepath: "https://images-na.ssl-images-amazon.com/images/I/61xbswku4IL._SL1500_.jpg",
        tittle: "Echo Ultra Smart",
        description:"MevoFit Echo Ultra Smart Fitness Watch for Men and Women with All Activity Tracker, Heart Rate, Blood Pressure (Black)",
        price:"3999"
    }),
    new Products({
        imagepath: "https://images-na.ssl-images-amazon.com/images/I/71ka0dQaXdL._SX425_.jpg",
        tittle: "Smart Fitness Band",
        description:"Smart Fitness Band, HolyHigh 115Plus Fitness Tracker Watch with Heart Rate Monitor Sport Activity Tracker Band with Step Counter Sleep Monitor Call SMS Notifications for Men Women",
        price:"2399"
    }),new Products({
        imagepath: "https://images-na.ssl-images-amazon.com/images/I/61xbswku4IL._SL1500_.jpg",
        tittle: "Echo Ultra Smart",
        description:"MevoFit Echo Ultra Smart Fitness Watch for Men and Women with All Activity Tracker, Heart Rate, Blood Pressure (Black)",
        price:"3999"
    }),
    new Products({
        imagepath: "https://images-na.ssl-images-amazon.com/images/I/71ka0dQaXdL._SX425_.jpg",
        tittle: "Smart Fitness Band",
        description:"Smart Fitness Band, HolyHigh 115Plus Fitness Tracker Watch with Heart Rate Monitor Sport Activity Tracker Band with Step Counter Sleep Monitor Call SMS Notifications for Men Women",
        price:"2399"
    }),new Products({
        imagepath: "https://images-na.ssl-images-amazon.com/images/I/61xbswku4IL._SL1500_.jpg",
        tittle: "Echo Ultra Smart",
        description:"MevoFit Echo Ultra Smart Fitness Watch for Men and Women with All Activity Tracker, Heart Rate, Blood Pressure (Black)",
        price:"3999"
    }),
    new Products({
        imagepath: "https://images-na.ssl-images-amazon.com/images/I/71ka0dQaXdL._SX425_.jpg",
        tittle: "Smart Fitness Band",
        description:"Smart Fitness Band, HolyHigh 115Plus Fitness Tracker Watch with Heart Rate Monitor Sport Activity Tracker Band with Step Counter Sleep Monitor Call SMS Notifications for Men Women",
        price:"2399"
    }),new Products({
        imagepath: "https://images-na.ssl-images-amazon.com/images/I/61xbswku4IL._SL1500_.jpg",
        tittle: "Echo Ultra Smart",
        description:"MevoFit Echo Ultra Smart Fitness Watch for Men and Women with All Activity Tracker, Heart Rate, Blood Pressure (Black)",
        price:"3999"
    })
]

var d=0;
for(i=0;i<productitems.length;i++){
    productitems[i].save(()=>{
        d++
        if(d===productitems.length)
            exit();
    });
}
function exit() {

    mongoos.disconnect();
    console.log("save complete and disconnect")
}