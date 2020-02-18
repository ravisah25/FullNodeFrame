const registermodelObj = require('../model/register');
const bcrypt = require('bcrypt');

module.exports.register = async function (data){ 
    data.hash = bcrypt.hashSync(data.hashPassword, 10);
    data.dob = new Date(data.dob)
    return await registermodelObj.create(data)
 }
 
 module.exports.getAllDetails = async () => {
    return await registermodelObj.find();   
}

module.exports.findregisterData = async (req) => {
    let condition = { firstname : req.query.firstname};
   return await registermodelObj.find(condition)
}
