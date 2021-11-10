const express = require("express")
var app = express()

app.get("/",function(request,response){
    response.send("Node APP is working and cool")
})

app.listen("8000",function(){
    console.log("Server running on port 8000")
})
