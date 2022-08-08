
import express from 'express'
import * as http from 'http'

import api from './api'

const app = express()

app.use('/api', api)

const server = http.createServer(app)

server.listen(3000)
