const express = require('express');
const roleRoute = require('./roleRoutes');

const router = express.Router();
router.use('/role', roleRoute);

module.exports = router;