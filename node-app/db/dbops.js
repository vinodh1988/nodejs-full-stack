const db=require("./dbconfig")
const dbops= {
        addPerson: function(sno,name,city,callback)
        {
    db.query("insert into person values(?,?,?)",[sno,name,city],callback)
        }
}

module.exports=dbops