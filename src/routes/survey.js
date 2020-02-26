import express from 'express';
const router = express.Router();
import requireLogin from './../middlewares/requireLogin';
import requireCredits from './../middlewares/requireCredits';
import { sendErrorResponse, sendSuccessResponse } from './../util/sendResponse';
const models = require('./../models');
const { Survey, Recipient } = models;
import Mailer from './../services/Mailer';
import surveyTemplete from './../services/emailTemplates/surveyTemplates';

router.post(
	'/api/survey/post',
	[
		requireLogin,
		requireCredits
	],
	async (req, res) => {
		const { title, subject, body, recipients } = req.body;
		try {
			const survey = await Survey.create({
				title,
				subject,
				body,
				userId: req.user.id
			});
			const emails = recipients.split(',');
			const mailer = new Mailer(survey, emails, surveyTemplete(survey));
			return mailer.send();
			await emails.map(async (email) => {
				await Recipient.create({
					email,
					surveyId: survey.id
				});
			});

			// sending the mail before saving it in the database
		} catch (error) {
			return sendErrorResponse(res, 500, error.message);
		}
	}
);
export default router;
