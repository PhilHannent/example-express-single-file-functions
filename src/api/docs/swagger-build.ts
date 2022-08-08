import swaggerAutogen from 'swagger-autogen'

export default (): void => {
	const options = {
		openapi: '3.0.0', // Enable/Disable OpenAPI. By default is null
		language: 'en-GB', // Change response language. By default is 'en-US'
		disableLogs: false, // Enable/Disable logs. By default is false
		autoHeaders: true, // Enable/Disable automatic headers capture. By default is true
		autoQuery: true, // Enable/Disable automatic query capture. By default is true
		autoBody: true // Enable/Disable automatic body capture. By default is true
	}
	const doc = {
		info: {
			title: 'Example Single File Function API',
			description: 'SFF API',
		},
		host: 'localhost:3000',
		schemes: ['http'],
		basePath: "/"
	}

	const outputFile = './swagger-output.json'
	const endpointsFiles = ['./build/api/index.js']

	/* NOTE: if you use the express Router, you must pass in the
	 'endpointsFiles' only the root file where the route starts,
	 such as index.js, app.js, routes.js, ... */

	swaggerAutogen(options)(outputFile, endpointsFiles, doc).then(() => {
		console.log('Swagger output generated')
	})
}