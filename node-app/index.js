const fs = require("fs")


fs.readFile("package1.json","utf-8",function(err,data){
   if(err)
      console.log("unable to read file")
   else
      console.log(data)
})

console.log("After attempting to read file")

console.log("Still running")

