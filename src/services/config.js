export const baseUrl = 'http://127.0.0.1:8000/';
export const baseUrlApi = 'http://127.0.0.1:8000/api';

const api = {
	category: {
		get: baseUrlApi + "/category",
	},

	products: {
		get: baseUrlApi + "/products",
	},

	banner: {
		get: baseUrlApi + "/banner",
	},

}

export default api;