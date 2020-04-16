const registermodelObj = require('../model/register');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.register = async (data) => {
    data.hash = bcrypt.hashSync(data.hashPassword, 10);
    data.dob = new Date(data.dob)
    return await registermodelObj.create(data)
}

module.exports.login = async (body) => {
    let mailData = await registermodelObj.findOne({ useremail: body.mail });
    if (!mailData) throw new Error("Not uthorized user");
    let passwordValid = await bcrypt.compare(body.password, mailData.hash);
    if (!passwordValid) throw new Error("Not uthorized user");
    let token = jwt.sign({
        id: body.mail
    }, 'sssschdjcksdkjsk', { expiresIn: 60 * 60 });
    return token
}

module.exports.getAllDetails = async () => {
    return await registermodelObj.find();
}

module.exports.findregisterData = async (req) => {
    let condition = { firstname: req.query.firstname };
    return await registermodelObj.find(condition)
}
