import axios from 'axios';
import api from './config.js';
import { baseUrl, baseUrlApi } from './config.js';

const $api = axios.create({
	withCredentials: false,
	baseURL: baseUrlApi
});

export const getCategories = async function() {
	return await $api.get(api.category.get);
}

export const getProducts = async function(categoryId) {
	if(categoryId != null){
		return await $api.get(api.products.get + "/" + categoryId);
	}else{
		return await $api.get(api.products.get);
	}	
}

export const getBanners = async function(bannerId) {
	if (bannerId != null){
		return await $api.get(api.banner.get + "/" + bannerId);
	}else{
		return await $api.get(api.banner.get);
	}
	
}