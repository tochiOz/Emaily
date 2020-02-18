// import auth from './auth';
// import product from './product';
// import user from './user';

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

	// app.use('/api/v1', [
	// 	auth,
	// 	product,
	// 	user
	// ]);

	app.all('/*', (req, res) =>
		res.status(404).send({
			status: 'error',
			error: 'This route is unavailable on this server'
		})
	);
};
