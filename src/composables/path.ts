/**
 * base 安全的路径解析
 * @param path 路径
 */
export function safeResolve(path: string) {
	return BASE_URL_WITHOUT_TAIL + path
}
