'use strict';

module.exports = (sequelize, DataTypes) => {
	const user_access = sequelize.define('user_access', {
		user_id: DataTypes.INTEGER,
		token: DataTypes.TEXT,
		os: DataTypes.STRING,
		ip: DataTypes.STRING,
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
	user_access.associate = function (models) {
		// associations can be defined here
	};
	return user_access;
};