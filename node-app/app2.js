const { response } = require("express")
var express=require("express")
var app=express()

app.get("/",function(request,response){
    response.send("This is flow2")
})

app.listen("8001",function(){
    console.log("Server2 running on  8001")
})

