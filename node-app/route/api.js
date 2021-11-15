const { response } = require("express");
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

route.post("/people",function(request,response){
    const {sno,name,city}=request.body

    ops.addPerson(sno,name,city,function(err,people){
        if(err)
          response.sendStatus(500)
        else
          response.json(request.body)
    })
})

module.exports=route