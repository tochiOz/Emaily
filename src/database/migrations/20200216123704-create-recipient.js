'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Recipients', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING
			},
			surveyId: {
				type: Sequelize.INTEGER,
				reference: {
					model: 'Surveys',
					key: 'id',
					as: 'surveyId'
				}
			},
			responded: {
				type: Sequelize.BOOLEAN
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
		return queryInterface.dropTable('Recipients');
	}
};
