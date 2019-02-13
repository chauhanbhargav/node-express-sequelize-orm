'use strict';

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('users', {
		uuid: DataTypes.UUID,
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		status: DataTypes.INTEGER,
		'created_at': {
			type: DataTypes.DATE(3),
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
		},
		'updated_at': {
			type: DataTypes.DATE(3),
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
		},
	}, {
		timestamps: true,
		underscored: true,
	});
	User.associate = (models) => {
		// associations can be defined here
	};

	/**
     * Delete password field and return all fields
     * @returns {any}
     */
	User.prototype.toJSON = function () {
		var values = Object.assign({}, this.get());
		delete values.password;
		return values;
	};

	return User;
};