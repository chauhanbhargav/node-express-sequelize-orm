'use strict';

const bcrypt = require('bcrypt');
const sequelize = require('sequelize');
const uuid = require('uuidv4');


module.exports = {

	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('users', [
			{
				uuid: uuid(),
				first_name: 'Bhargav',
				last_name: 'Chauhan',
				email: 'bhargav@gmail.com',
				password: bcrypt.hashSync('bhargav123', 10),
				created_at: sequelize.fn('NOW'),
				updated_at: sequelize.fn('NOW')
			},
			{
				uuid: uuid(),
				first_name: 'Test',
				last_name: 'User',
				email: 'testuser@gmail.com',
				password: bcrypt.hashSync('test123', 10),
				created_at: sequelize.fn('NOW'),
				updated_at: sequelize.fn('NOW')
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};