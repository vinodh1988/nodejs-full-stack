var express = require("express")
var ops=require("../db/dbops")
var route=express.Router();

route.get("/people",function(request,response){
   ops.getPeople(function(err,data){
       if(err)
         response.sendStatus(500)
       else
         response.json(data)
   })
})

module.exports=route