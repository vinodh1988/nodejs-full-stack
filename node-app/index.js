const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants")
const express = require("express")
//const parser=require("body-parser")
var app = express()
const path=require('path')
const ops=require('./db/dbops')
const api=require("./route/api")
const users=require("./route/userroute")
require('./app2')
//Parsing the input data

app.use(function(req,res,next){
    
     console.log('global logic')
    
     next()
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api",api)
app.use("/users",users)
//configuring the template engine


app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine

//to configure static resource
//static resources are resources that need to be sent as it is 
app.use(express.static(path.join(__dirname, 'public/scripts')))
app.use(express.static(path.join(__dirname, 'public/styles')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')))
//app.use(express.static(path.join(__dirname, 'public/pages')))

app.get("/",async function(request,response){
    
    response.send("Node APP is working and cool")
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,'public/pages/home.html'))
})

app.get("/people",function(request,response){
    ops.getPeople(function(err,data){
        if(err)
              response.send("No Data found")
        else
              response.render("people",{people:data})
    })
 
})




app.post("/home",function(request,response){
    const {sno,name,city}=request.body  //{sno:1,name:"raj",city:"chennai"}
    ops.addPerson(sno,name,city,function(err,data){
        if(err)
          response.sendStatus(500)
          
        response.sendFile(path.join(__dirname,'public/pages/home.html'))
    })
    
})


app.listen("8000",function(){
    console.log("Server running on port 8000")
})
