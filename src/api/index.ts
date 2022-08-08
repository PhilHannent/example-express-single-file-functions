import { Router } from 'express'

import diagnosticsRouter from './diagnostics/index.js'
import docsRouter from './docs/index.js'
// import { getServer } from './diagnostics/handlers/getServer.js'

const router = Router()

// router.get('/server', getServer)
router.use('/diagnostics', diagnosticsRouter)
router.use('/docs', docsRouter)

export default router

