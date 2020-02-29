import express from 'express';
import _ from 'lodash';
const Path = require('path-parser');
const { URL } = require('url');
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
			const responseMailer = await mailer.send();

			await emails.map(async (email) => {
				await Recipient.create({
					email,
					surveyId: survey.id
				});
			});

			req.user.credits -= 1;
			const user = await req.user.save();

			return sendSuccessResponse(res, 200, { user, survey, responseMailer });
		} catch (error) {
			return sendErrorResponse(res, 422, error.message);
		}
	}
);

router.post('/api/surveys/webhook', async (req, res) => {
	// when recieving response from the webhook/user email click, there could be cases
	// when response can have more than the click event for response and mess the data up
	//so we are going to extract the pathname, which has the surveyID and the user chioce

	const p = new Path('/api/surveys/:surveyId/:choice');

	//chain takes the array and does all sort of methods and displays result by .values()
	const events = _.chain(req.body)
		.map(({ url, email }) => {
			// match contains an object of match datd from the path or nothing
			const match = p.test(new URL(url).pathname);
			if (match)
				return {
					email,
					surveyId: match.surveyId,
					choice: match.choice
				};
		})
		.compact()
		.uniqBy('email', 'surveyId')
		.each(async ({ email, surveyId, choice }) => {
			const recipient = await Recipient.findOne({
				where: {
					surveyId,
					email
				}
			});
			if (!recipient.responded) return;
			const survey = await Survey.find({
				where: {
					id: surveyId
				}
			});
			recipient[responded] = true;
			await recipient.save();

			survey[choice] += 1;
			await survey.save();
		})
		.value();

	return sendSuccessResponse(res, 200, {});
});
export default router;
