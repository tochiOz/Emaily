import express from 'express';
import passport from 'passport';
const router = express.Router();

router.get(
	'/api/auth/google',
	passport.authenticate('google', {
		scope: [
			'profile',
			'email'
		]
	})
);

router.get('/api/auth/google/callback', passport.authenticate('google'), (req, res) => {
	res.redirect('/surveys');
});

router.get('/api/current/user', (req, res) => {
	res.send(req.user);
});

router.get('/api/logout', (req, res) => {
	req.logout();
	return res.redirect('/');
});

export default router;
