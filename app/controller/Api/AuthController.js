const models = require('../../../models');
const User = models.users;
const validation = require('../../validation');

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
	userAll(req, res) {
		User.findAll().then(users => {
			res.status(200).send({users: users});
		});
	},


	/**
     * Find user from uuid
     * @param req
     * @param res
     */
	findUser(req, res) {
		validation.findUserValidation(req, res);
		let uuid = req.body.uuid;
		User.findOne({
			where: {uuid: uuid}
		}).then(user =>
			res.status(200).send({user: user})
		);
	}
};