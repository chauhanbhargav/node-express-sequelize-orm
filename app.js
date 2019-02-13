const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const AppConstant = require('./app/constant/AppConstant');
const Messages = require('./app/constant/Messages');
const expressValidator = require('express-validator');

/**
 * Manage Routing
 *
 */
app.use(express.json());
app.use(expressValidator());
const apiRoutes = require('./routes/api');
const webRoutes = require('./routes/web');
app.use('/', webRoutes);
app.use('/api/v1/', apiRoutes);

/**
 * Mange View Engines
 *
 */
// app.engine('html', require('ejs').renderFile);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

/**
 * Set Logger, Body Parser and Cookie Parser with join assets
 *
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Handle 404 Error
 *
 */
app.use((req, res, next) => {
	const err = new Error(Messages.Not_found);
	err.status = AppConstant.NOT_FOUND;
	next(err);
});

/**
 *  Error Handler
 */
app.use((err, req, res) => {
	res.status(err.status || AppConstant.INTERNAL_SERVER_ERROR);
	res.render('error', {
		message: err.message,
		error: (app.get('env') === 'development') ? err : {}
	});
});

module.exports = app;