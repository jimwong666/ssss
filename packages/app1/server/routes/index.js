const express = require('express');

const router = express.Router();

router.get('/index', function (req, res) {
	res.render('index');
});

module.exports = router;
