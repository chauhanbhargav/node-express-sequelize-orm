const app = require('../app');
const http = require('http');
const models = require('../models');
require('dotenv').config();
require('../config/passport');

/**
 * Normalize and assign port to app
 * @type {*}
 */
var port = normalizePort(process.env.APP_PORT || '3000');
app.set(port);

/**
 * Create http server
 *
 */
var server = http.createServer(app);

models.sequelize.sync().then(() => {
	server.listen(port, () => {
		console.log('Express server listening on port ' + server.address().port);
	});
	server.on('error', onError);
	server.on('listening', onListening);
});


/**
 * Normalize Port into number, string or boolean
 * @param val
 * @returns {*}
 */
function normalizePort(val) {
	var port = parseInt(val, 10);

	//  Checking a number is legal or not
	if (isNaN(port))
		return val;

	//  Check port is greater than 0 or not
	if (port > 0)
		return port;

	return false;
}


/**
 * Event listener for http server 'error' event
 * @param error
 */
function onError(error) {
	if (error.syscall !== 'listen')
		throw error;


	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
	case 'EACCES':
		console.error(bind + ' requires privileges');
		process.exit(1);
		break;
	case 'EADDRINUSE':
		console.error(bind + ' port is already in use');
		process.exit(1);
		break;
	default:
		throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event
 *
 */
function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	console.log('Listening on ' + bind);
}