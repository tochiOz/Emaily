import express from 'express';
import keys from './../webpack/keys';
const stripe = require('stripe')(keys.stripeSecretKey);
const models = require('./../models');
const router = express.Router();
const { User } = models;

router.post('/api/stripe/credits', async (req, res) => {
	//CREATE STRIPE CHARGE
	const charge = await stripe.charges.create({
		amount: '500',
		currency: 'usd',
		description: '$5 for 5 Credits',
		source: req.body.id
	});
	req.user.credits += 5;
	const user = await req.user.save();
	res.send(user);
});
export default router;
