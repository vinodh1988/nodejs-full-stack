
var express = require("express")
var ops=require("../db/dbops")
var route=express.Router()
const security=require("../security/bcrptalgo")

route.post("/signup",async function(request,response){
      const {username,password}=request.body
      try{
            let encrypted=await security.encrypt(password)
            ops.addUser(username,encrypted,function(err,data){
                if(err) 
                   response.status(500).send("Unable to create user")
                else
                   response.status(201).send("user registered")
            })
      }
      catch(e){
          console.log(e)
          response.status(500).send("Cannot sign up")
      }
})

module.exports=route;