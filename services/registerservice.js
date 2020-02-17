const registermodelObj = require('../model/register');


module.exports.register = async function (data){ 
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
