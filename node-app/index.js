const express = require("express")
//const parser=require("body-parser")
var app = express()
const path=require('path')
require('./db/dbconfig')
require('./app2')
//Parsing the input data
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//to configure static resource
//static resources are resources that need to be sent as it is 
app.use(express.static(path.join(__dirname, 'public/scripts')))
app.use(express.static(path.join(__dirname, 'public/styles')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')))
//app.use(express.static(path.join(__dirname, 'public/pages')))

app.get("/",function(request,response){
    response.send("Node APP is working and cool")
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,'public/pages/home.html'))
})

app.post("/home",function(request,response){
    console.log(request.body)
    response.sendFile(path.join(__dirname,'public/pages/home.html'))
})

app.listen("8000",function(){
    console.log("Server running on port 8000")
})
