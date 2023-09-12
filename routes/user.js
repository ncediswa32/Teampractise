const express = require('express');
const router = express.Router();
const users = require('../controllers/signup');

// Middleware function for setting CORS headers
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", 
    "Origin, Content-Type, Accept");
    next();
  });

router.post('/signup', users.signup);

module.exports = router;

