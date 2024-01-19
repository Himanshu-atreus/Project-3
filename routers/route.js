const express = require('express')
const router = express.Router();
const {AllUsers,AllTest} = require('../controller/control');


router.get('/',AllUsers);
router.get('/ATe',AllTest);
 
module.exports = router;