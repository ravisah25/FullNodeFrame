const router = require('express').Router();
const User = require('./user');


router.get('/', (req,res) => res.send('Welcome!'))

router.use('/', User)

module.exports = router;
