
var express = require("express")
var ops=require("../db/dbops")
var route=express.Router();
const passport=require('passport')

route.get("/people",passport.authenticate('jwt',{session:false}),function(request,response){
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
   
            
    });
});


route.post("/people",function(request,response){
    const {sno,name,city}=request.body

    ops.addPerson(sno,name,city,function(err,people){
        if(err)
          response.status(500).send("Server Error")
        else
          response.status(201).json(request.body)
    })
})

route.put("/people",function(request,response){
    let sno=request.query.sno
    ops.getOne(sno,function(err,data){
        if(err) 
             response.status(500).send("Server Error")
        else{
            if(data[0]){
            name=request.body.name?request.body.name:data[0].name
            city=request.body.city?request.body.city:data[0].city
            ops.update(sno,name,city,function(err,newdata){
                 if(err)
                     response.status(500).send("Server Error")
                 else
                     response.status(200).json({sno:sno,name:name,city:city})
                
                
            })
            }
           else
              response.status(200).send("No Record Found")
        }
            
    });

})
module.exports=route