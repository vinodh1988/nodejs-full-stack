const { response, request } = require("express");
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

route.get("/people/:sno",function(request,response){
    ops.getOne(request.params.sno,function(err,data){
        if(err) 
             response.status(500).send("Server Error")
        else
            response.json(data[0]?data[0]:{})
    })
})
route.post("/people",function(request,response){
    const {sno,name,city}=request.body

    ops.addPerson(sno,name,city,function(err,people){
        if(err)
          response.status(500).send("Server Error")
        else
          response.status(201).json(request.body)
    })
})


module.exports=route