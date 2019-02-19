const models = require('../../../models');
const validation = require('../../validation');
const responseHandler = require('../../Trait/ResponseHandler');
const statusCode = require('../../constant/StatusCode');
const appConstant = require('../../constant/AppConstant');
const messages = require('../../constant/Messages');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = models.users;

/**
 * Export Auth Controller Modules
 * @type {{(*, *): void}}
 */
module.exports = {
	/**
     * Get all users from table
     * @param req
     * @param res
     */
	userAll: (req, res) => {
		User.findAll().then(users => {
			let data = {
				users: users
			};
			res.status(statusCode.SUCCESS).send(responseHandler.response(appConstant.OK, messages.ALL_USER_FETCH, data));
		});
	},


	/**
     * Find user from uuid
     * @param req
     * @param res
     */
	findUser: (req, res) => {
		validation.findUserValidation(req, res);
		let uuid = req.body.uuid;
		User.findOne({
			where: {uuid: uuid}
		}).then(user =>
			res.status(200).send({user: user})
		);
	},


	/**
     * User Login Authentication
     * @param req
     * @param res
     */
	login: (req, res) => {
		validation.loginFormValidation(req, res);
		
		passport.authenticate('local', {session: false}, (err, user, info) => {
			if (err || !user) {
				return res.status(statusCode.UNAUTHORISED).json(responseHandler.response(appConstant.FAIL,info ? info.message : 'Login failed'));
			}
			req.login(user, {session: false}, (err) => {
				if (err) {
					res.send(err);
				}

				user.token = jwt.sign(process.env.JWT_SECRET);

				let data = {
					user: user
				};
				res.status(statusCode.SUCCESS).send(responseHandler.response(appConstant.OK, messages.ALL_USER_FETCH, data));
			});
		});
	},


	/**
     * User Signup
     * @param req
     * @param res
     */
	signup: (req, res) => {
		res.send({
			request: req.body
		});
	}
};