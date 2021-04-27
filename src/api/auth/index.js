const express = require('express');
const me = require('./me');
const login = require('./login');

const router = express.Router();

router.get('/me', me);
router.post('/login', login);

module.exports = router;
