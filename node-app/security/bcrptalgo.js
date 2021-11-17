var bcrypt = require('bcrypt-nodejs');

function getEncryptedPassword(password){
return new Promise(function(resolve,reject){
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
           reject(err);
       }
       bcrypt.hash(password, salt, null, function (err, hash) {
           if (err) {
           reject(err)
       }
       resolve(hash)
    
   });
});
      

})
}

module.exports = {encrypt: getEncryptedPassword}
