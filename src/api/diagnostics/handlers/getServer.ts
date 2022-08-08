import { Request, Response } from 'express'
import * as os from 'os'

export function getServer(_req: Request, res: Response): void {
	/*
	#swagger.responses[200] = {
            description: "Returns the hostname and Node version",
            content: {
                "application/json": {
                    schema: {
                        host: 'server22',
                        node: 'Node 16.0.0'
                    }
                }
            }
        }
	*/
	res.send({ host: os.hostname(), node: process.version })
}