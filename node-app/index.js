const express = require("express")
var app = express()
const path=require('path')
require('./app2')

//to configure static resource
//static resources are resources that need to be sent as it is 
app.use(express.static(path.join(__dirname, 'public/scripts')))
app.use(express.static(path.join(__dirname, 'public/styles')))
app.use(express.static(path.join(__dirname, 'public/pages')))

app.get("/",function(request,response){
    response.send("Node APP is working and cool")
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,'public/pages/home.html'))
})

app.listen("8000",function(){
    console.log("Server running on port 8000")
})
