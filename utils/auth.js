const jwt = require('jsonwebtoken')

module.exports.verifyToken = async (req, res, next) => {
    let Bearer = null
    if (req.header['Authorization']) Bearer = req.header['Authorization'].split(' ')[1]
    let token = req.body.token || req.query.token || req.header['x-access-token'] || Bearer
    if (!token) return res.status(400).json({ "success": "false", "error": "true", "data": "unauthorized id" })
    try {
        const decoded = jwt.verify(token, 'sssschdjcksdkjsk');
        req.decodedID = decoded.id;
        next()
    }
    catch (err) {
        console.log("err",err)
    }
}