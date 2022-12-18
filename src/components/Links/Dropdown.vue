<template>
	<li v-for="(category, index) in this.category" :key="index">
		<a href="#" @click="this.$router.push(category.src)">
			{{category.name}}
		</a>
	</li>
</template>
	
<script>
	import { getCategories } from '../../services/methods.js';

	export default {
		name: "Dropdown",
		components: {

		},	
		data(){
			return{
				category: [],
			}
		},
		async created(){
			this.category = await this.getCategories();	
		},
		methods: {
			async getCategories(){
				let category = await getCategories();

				category = category.data.map(function(item, index) {
					return{
						name: item.name,
						src: '/category/' + item.id,
						id: item.id
					};
				});

				// console.log(category);
				return category;
			}
		}
	}
</script>

<style>

</style>