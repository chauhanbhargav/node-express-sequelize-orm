module.exports = {

	/**
     * Find user function validation
     * @param req
     * @param res
     */
	findUserValidation(req, res) {
		req.checkBody('uuid', 'Please enter valid uuid')
			.notEmpty()
			.isUUID(4);

		var errors = req.validationErrors();
		if (errors)
			return res.status(422).json({errors: errors});
	}
};