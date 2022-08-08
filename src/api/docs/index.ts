
import * as express from 'express'
import * as swaggerUi from 'swagger-ui-express'

import generateDocs from './swagger-build.js'
import { getSwaggerJson } from './handlers/index.js'

const router = express.Router()

const docOptions = {
	swaggerOptions: {
		url: '/api/docs/swagger-output.json',
		defaultModelsExpandDepth: -1
	}
}

router.get('/swagger-output.json', getSwaggerJson)
router.use('/', (_req, _res, next) => {
	generateDocs()
	next()
}, swaggerUi.serve, swaggerUi.setup(null, docOptions))


export default router
