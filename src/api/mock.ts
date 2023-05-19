import { useRequest } from 'vue-request'

export const testRequest = () => {
	const { data, loading, error } = useRequest(() => http.post('/mock/post'))
	return { data, loading, error }
}
