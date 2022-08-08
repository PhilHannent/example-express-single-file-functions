import { Request, Response } from 'express'

export function getSwaggerJson(_req: Request, res: Response): void {
	console.log('sending file')
	res.sendFile('swagger-output.json', { root: './' })
}