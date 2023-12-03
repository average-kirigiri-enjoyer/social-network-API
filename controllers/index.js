//imports router package & route files
const router = require('express').Router();
const api = require('./api');

//sets router to redirect requests accordingly;
router.use('/api', api);

module.exports = router;