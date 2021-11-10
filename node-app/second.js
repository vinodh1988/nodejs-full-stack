const fun=function() {
   return "Hey  There!!!"
}

const take=function(){
    return {
        eat : function(){console.log("Eating")},
        sleep: function(){console.log("Sleeping")}
    }
}

module.exports = {greet: fun,activity: take}

module.exports.store = {
    sno:1,
    name: "Rahul",
    city:"Mumbai"
}