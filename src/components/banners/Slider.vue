<template>
	<!--== Start Slider Area Wrapper ==-->
		<div v-for="(banner, index) in this.bannerImages" :key="index" class="slider-area-wrapper">
			<div class="slider-content-active">
				<div class="slider-slide-item bg-img" 
					data-bg="src/assets/img/slider/slider-1.png">
					<div class="container container-wide h-100">
						<div class="row align-items-center h-100">
							<div class="col-lg-6">
								<div class="slide-content">
									<div class="slide-content-inner">
										<h3>{{ banner.name }}</h3>
										<h2>{{ banner.description }}</h2>
										<a class="btn btn-white" href="shop.html">Купить сейчас</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="slider-slide-item bg-img" 
					data-bg="src/assets/img/slider/slider-2.png">
					<div class="container container-wide h-100">
						<div class="row align-items-center h-100">
							<div class="col-12">
								<div class="slide-content">
									<div class="slide-content-inner">
										<h3>{{ banner.name }}</h3>
										<h2>{{ banner.description }}</h2>
										<a class="btn btn-white" href="shop.html">Купить сейчас</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	<!--== End Slider Area Wrapper ==-->
</template>

<script>
import { getBanners } from '../../services/methods.js';

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
	},
	methods: {
		async getBannerImages(){
			let banners = await getBanners();

			banners = banners.data.map(function(item, index){
				return{
					mame: item.name,
					description: item.description,
					background: "background: " + item.image_src,
					id: item.id
				};
			});
			console.log(banners);

			return banners;
		}
	}
}
</script>

<style>

</style>