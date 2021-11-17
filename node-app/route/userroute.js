
const { response } = require("express")
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

route.post("/signin",async function(request,response){
         const {username,password}=request.body 
         try{
            
            let originalencrypted=await ops.getPassword(username)
            if(await security.compare(password,originalencrypted))
               response.status(200).send("Login successful")
            else
               response.status(401).send("Not Authorized")
      }
      catch(e){
          console.log(e)
          response.status(500).send("Cannot sign in")
      }
})

module.exports=route;