const db=require("./dbconfig")
const dbops= {
        addPerson: function(sno,name,city,callback)
        {
    db.query("insert into person values(?,?,?)",[sno,name,city],callback)
        },
        getPeople: function(callback){
            db.query("select * from person",callback)
        },
        getOne:function(sno,callback){
        db.query("select * from person where sno=?",[sno],callback)
        },
        update:function(sno,name,city,callback){
            db.query("update person set name=?,city=? where sno=?",[name,city,sno],callback)
        },
        addUser:function(username,password,callback){
         db.query("insert into users values(?,?)",[username,password],callback);
        }
}

module.exports=dbops