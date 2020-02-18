import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import keys from './../webpack/keys';

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.GoogleClientID,
			clientSecret: keys.GoogleClientSECRET,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(accessToken);
			console.log(refreshToken);
			console.log(profile);
		}
	)
);
