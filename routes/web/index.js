const express = require('express');
const router = express.Router();
const Messages = require('../../app/constant/Messages');

router.get('/', function (req, res) {
	//console.log('server listening on port successfully.');
	res.json({
		message: Messages.NODE_RUNNING
	});
});

module.exports = router;
