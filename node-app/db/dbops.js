const db=require("./dbconfig")
const dbops= {
        addPerson: function(sno,name,city,callback)
        {
    db.query("insert into person values(?,?,?)",[sno,name,city],callback)
        },
        getPeople: function(callback){
            db.query("select * from person",callback)
        }
}

module.exports=dbops