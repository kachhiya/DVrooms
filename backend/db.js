const mongoose = require("mongoose");

var mongoURL ='mongodb+srv://dvrooms:dvrooms123@cluster0.1l4xj0y.mongodb.net/DVrooms'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true}) 
var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('MongoDB connection failed')
})

connection.on('connected' , ()=>{
    console.log('MongoDB connection successful')
})

module.exports =mongoose

