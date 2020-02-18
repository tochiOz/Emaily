'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Surveys', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING
			},
			body: {
				allowNull: false,
				type: Sequelize.STRING
			},
			subject: {
				type: Sequelize.STRING
			},
			yes: {
				type: Sequelize.REAL
			},
			no: {
				type: Sequelize.REAL
			},
			userId: {
				type: Sequelize.INTEGER,
				reference: {
					model: 'Users',
					key: 'id',
					as: 'userId'
				}
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Surveys');
	}
};
