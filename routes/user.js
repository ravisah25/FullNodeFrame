const router = require('express').Router();
const UserRegistration = require('../controller/registercontroller')
const Utils = require('../utils/auth')

/**
 * @swagger
 * definition:
 *   Register:
 *     properties:
 *       firstname:
 *         type: string
 *       lastname:
 *         type: string
 *       useremail:
 *         type: string
 *       password:
 *         type: string
 *       dob:
 *         type: string
 *       gender:
 *         type: string
 */


/**
 * @swagger
 * /registration/register:
 *   post:
 *     tags:
 *       - Register
 *     description: Creates Registration
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Register
 *         description: Register object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Register'
 *     responses:
 *       200:
 *         description: Successfully created
 */


router.post('/user/register/', UserRegistration.register);

router.post('/user/login/', UserRegistration.login);

router.use(Utils.verifyToken)

/**
 * @swagger
 * /registration/getdetails:
 *   get:
 *     tags:
 *       - Register
 *     description: GetDetails Registration
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstname
 *         description: firstname details
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: List of Registration Details
 * 
 */

router.get('/user/getdetails/', UserRegistration.findregisterData);

/**
 * @swagger
 * /registration/getalldetails:
 *   get:
 *     tags:
 *       - Register
 *     description: GetDetails Registration
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Registration Details
 *         schema:
 *           $ref: '#/definitions/getalldetails'
 * 
 */

router.get('/user/getalldetails/',UserRegistration.getAllDetails);

module.exports = router