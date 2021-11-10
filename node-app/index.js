const fs = require("fs")
const second = require("./second")

fs.readFile("package1.json","utf-8",function(err,data){
   if(err)
      console.log("unable to read file")
   else
      console.log(data)
})

second.activity().sleep()
second.activity().eat()
console.log(second.greet())
console.log(second.store)

console.log("After attempting to read file")

console.log("Still running")

