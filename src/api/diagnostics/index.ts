import { Router } from 'express'

// This doesn't work.
import { getServer } from './handlers/index.js'

const router = Router()

router.get('/server', getServer)

export default router