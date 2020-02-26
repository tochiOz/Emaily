import auth from './auth';
import billing from './billing';
import survey from './survey';

export default (app) => {
	app.get('/api/v1', (req, res) =>
		res.status(200).send({
			status: 'success',
			data: 'Emaily Server Up and Running'
		})
	);

	app.get('/', (req, res) => {
		res.status(200).send('Welcome to Emaily Survey App');
	});

	app.use('/', [
		auth,
		billing,
		survey
	]);

	// app.all('/*', (req, res) =>
	// 	res.status(404).send({
	// 		status: 'error',
	// 		error: 'This route is unavailable on this server'
	// 	})
	// );
};
