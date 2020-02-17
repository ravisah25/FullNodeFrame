const registerserviceObj = require('../services/registerservice');
const registervalidateObj = require('../validation/registervalidate')

module.exports.register = async (req, res) => {
    try {
        await registervalidateObj.createValidation(req.body);
        const result = await registerserviceObj.register(req.body);
        return res.status(200).json({ "success": "true", "error":"false", "data": result });
    } catch (e) {
        return res.status(400).json({ "success": "false", "error":"true", "data": e });
    }
}

module.exports.getAllDetails = function (req, res) {
    registerserviceObj.getAllDetails(req, function (err, result) {
        if (err) {
            res.status(400).json({ 'err': err });
        } else {
            res.status(200).json(result);
        }
    })
}


module.exports.findregisterData = async (req, res) => {
    try{
        const result = await registerserviceObj.findregisterData(req);
        return res.status(200).json({ "success": "true", "error":"false", "data": result });
    }
   catch (err){
       return res.status(400).json({ "success": "false", "error":"true", "data": err })
   }
}
