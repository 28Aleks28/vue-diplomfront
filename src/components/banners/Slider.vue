<template>
	<!--== Start Slider Area Wrapper ==-->
	<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
		<div class="carousel-inner">
		  <div v-for="(banner, index) in this.bannerImages" :key="index" class="carousel-item active">
			<img :src="banner.background" class="d-block w-100" alt="...">
			<div class="carousel-caption d-none h-50 d-sm-block text-start mb-5">
				<div class="slide-content-inner">
					<h3 class="text-secondary">{{banner.description}}</h3>
					<h2 class="text-secondary">{{banner.name}}</h2>
					<a class="btn btn-white" href="#">Shop Now</a>
				</div>
			</div>
		  </div>
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
		  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		  <span class="visually-hidden">Предыдущий</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
		  <span class="carousel-control-next-icon" aria-hidden="true"></span>
		  <span class="visually-hidden">Следующий</span>
		</button>
	</div>   
    <!--== End Slider Area Wrapper ==-->
</template>

<script>
import { getBanners } from '../../services/methods.js';
import { baseUrlStorage } from "../../services/config.js";

export default {
	name: "Slider",
	components: {
	},	
	data(){
		return{
			bannerImages: [],
		}
	},
	async created(){
		this.bannerImages = await this.getBannerImages();
		console.log(this.bannerImages)			
	},
	methods: {
		async getBannerImages(){
			let banners = await getBanners();
			//console.log(banners)

			banners = banners.data.map(function(item, index){
				return{
					name: item.name,
					description: item.description,
					background: baseUrlStorage + item.image,
					id: item.id
				};
			});
			

			return banners;
		}
	}
}
</script>

<style>

</style>