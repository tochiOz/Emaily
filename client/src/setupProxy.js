const proxy = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		proxy.createProxyMiddleware('/auth/google', {
			target: 'http://localhost:7000',
			changeOrigin: true
		})
	);

	app.use(
		proxy.createProxyMiddleware('/api/*', {
			target: 'http://localhost:7000',
			changeOrigin: true
		})
	);
};
