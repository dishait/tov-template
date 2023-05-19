import { MockMethod } from 'vite-plugin-mock'
export default [
	{
		url: '/api/mock/get',
		method: 'get',
		response: () => {
			return {
				code: 0,
				data: {
					name: 'mock',
				},
			}
		},
	},
	{
		url: '/api/mock/post',
		method: 'post',
		timeout: 2000,
		response: {
			code: 0,
			data: {
				name: 'mock',
			},
		},
	},
	{
		url: '/api/mock/text',
		method: 'post',
		rawResponse: async (req, res) => {
			let reqbody = ''
			await new Promise((resolve) => {
				req.on('data', (chunk) => {
					reqbody += chunk
				})
				req.on('end', () => resolve(undefined))
			})
			res.setHeader('Content-Type', 'text/plain')
			res.statusCode = 200
			res.end(`hello, ${reqbody}`)
		},
	},
] as MockMethod[]
