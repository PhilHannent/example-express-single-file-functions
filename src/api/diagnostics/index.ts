import * as express from 'express'

import { getServer } from './handlers/index.js'

const router = express.Router()

router.get('/server', getServer)

export default router