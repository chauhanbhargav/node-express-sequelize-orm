const appConstant = require('../constant/AppConstant');
const responseHandler = require('../Trait/ResponseHandler');
const statusCode = require('../constant/StatusCode');

module.exports = {

	/**
     * Find user function validation
     * @param req
     * @param res
     */
	findUserValidation: (req, res) => {
		req.checkBody('uuid', 'Please enter valid uuid').notEmpty().isUUID(4);

		var errors = req.validationErrors();
		if (errors)
			return res.status(statusCode.UNPROCESSABLE_REQUEST).json(responseHandler.response(appConstant.FAIL, errors[0].msg));
	},

	/**
     * Login Form Input Validation
     * @param req
     * @param res
     */
	loginFormValidation: (req, res) => {
		req.checkBody('email', 'Please enter valid email address.').notEmpty().isEmail().normalizeEmail();
		req.checkBody('password', 'Password must be required.').notEmpty();

		var errors = req.validationErrors();
		if (errors)
			return res.status(statusCode.UNPROCESSABLE_REQUEST).json(responseHandler.response(appConstant.FAIL, errors[0].msg));
	}
};