const app = require('express-group-route');
const AuthController = require('../../app/controller/Api/AuthController');

/**
 * Group wise route with prefix
 *
 * @param req
 * @param res
 */

app.group('/auth', () => {
	app.post('/login', AuthController.login);
	app.post('/signup', AuthController.signup);
});

app.group('/users', () => {
	app.get('/all', AuthController.userAll);
	app.post('/user', AuthController.findUser);
});

module.exports = app.router;