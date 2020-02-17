const registermodelObj = require('../model/register');
const bcrypt = require('bcrypt');

module.exports.register = async function (data){ 
    data.hash = bcrypt.hashSync(data.hashPassword, 10);
    data.dob = new Date(data.dob)
    return await registermodelObj.create(data)
 }
 
 module.exports.getAllDetails = function (req,cb){
    registermodelObj.find({}, function (err, result) {
        if (err) {
             cb({ 'error': err }, null);
        } else {
             cb(null, result);
        }
    })    
}

module.exports.findregisterData = async (req) => {
    let condition = { firstname : req.query.firstname};
   return await registermodelObj.find(condition)
}
