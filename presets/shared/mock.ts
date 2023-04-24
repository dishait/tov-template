// @ts-nocheck
/**
 * issue: https://github.com/vbenjs/vite-plugin-mock/issues/47
 * fix: https://github.com/vbenjs/vite-plugin-mock/issues/47#issuecomment-982724613
 */
import Mock from 'mockjs'

export function createFetchSever(mockList: any[]) {
	if (!window['originFetch']) {
		window['originFetch'] = window.fetch
		window.fetch = function (fetchUrl: string, init: any) {
			const currentMock = mockList.find((mi) => fetchUrl.includes(mi.url))
			if (currentMock) {
				const result = createFetchReturn(currentMock, init)
				return result
			} else {
				return window['originFetch'](fetchUrl, init)
			}
		}
	}
}

function __param2Obj__(url: string) {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}
	return JSON.parse(
		'{"' +
			decodeURIComponent(search)
				.replace(/"/g, '\\"')
				.replace(/&/g, '","')
				.replace(/=/g, '":"')
				.replace(/\+/g, ' ') +
			'"}'
	)
}

function __Fetch2ExpressReqWrapper__(handle: () => any) {
	return function (options: any) {
		let result = null
		if (typeof handle === 'function') {
			const { body, method, url, headers } = options

			let b = body
			b = JSON.parse(body)
			result = handle({
				method,
				body: b,
				query: __param2Obj__(url),
				headers,
			})
		} else {
			result = handle
		}

		return Mock.mock(result)
	}
}

const sleep = (delay = 0) => {
	if (delay) {
		return new Promise((resolve) => {
			setTimeout(resolve, delay)
		})
	}
	return null
}

async function createFetchReturn(mock: any, init) {
	const { timeout, response } = mock
	const mockFn = __Fetch2ExpressReqWrapper__(response)
	const data = mockFn(init)
	await sleep(timeout)
	const result = {
		ok: true,
		status: 200,
		clone() {
			return result
		},
		text() {
			return Promise.resolve(data)
		},
		json() {
			return Promise.resolve(data)
		},
	}
	return result
}
