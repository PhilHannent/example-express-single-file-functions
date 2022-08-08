import { Router } from 'express'

import diagnosticsRouter from './diagnostics/index.js'

const router = Router()

router.use('/diagnostics', diagnosticsRouter)

export default router

