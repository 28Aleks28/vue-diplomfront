<template>
	<!--== Start Products Area Wrapper ==-->
		<div class="products-area-wrapper sm-top">
			<div class="container container-wide">
				<div class="row">
					<div class="col-lg-5 m-auto text-center">
						<div class="section-title">
							<h2 class="h3">ВСЕ НАШИ ПРОДУКТЫ</h2>
							<p>Все модели автомобилей теперь доступны для вас, и вы можете купить этот продукт здесь в любое время в любом месте, сейчас</p>
						</div>
					</div>
				</div>
		
				<div class="row pb-5">
					<div class="col-12">
						<div class="product-wrapper columns-5">
							<div v-for="(product, index) in this.products" :key="index" class="col">
								<div class="product-item">
									<div class="product-item__thumb">
										<a href="single-product.html">
											<img class="thumb-primary" :src="product.image_src" alt="Product" />
											<img class="thumb-secondary" :src="product.image_src" alt="Product" />
										</a>
									</div>
						
									<div class="product-item__content">
										<div class="ratting">
											<span><i class="ion-android-star"></i></span>
											<span><i class="ion-android-star"></i></span>
											<span><i class="ion-android-star"></i></span>
											<span><i class="ion-android-star"></i></span>
											<span><i class="ion-android-star-half"></i></span>
										</div>
										<h4 class="title"><a href="single-product.html">{{product.name}}</a></h4>
										<span class="price"><strong>Цена:</strong> {{product.price}} руб</span>
									</div>
						
									<div class="product-item__action">
										<button class="btn-add-to-cart"><i class="ion-bag"></i></button>
										<button class="btn-add-to-cart"><i class="ion-ios-loop-strong"></i></button>
										<button class="btn-add-to-cart"><i class="ion-ios-heart-outline"></i></button>
										<button class="btn-add-to-cart"><i class="ion-eye"></i></button>
									</div>
						
									<div class="product-item__sale">
										<span class="sale-txt">25%</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	<!--== End Products Area Wrapper ==-->
</template>

<script>
	import Product from "../Products/Product.vue";
	import { getProducts } from "../../services/methods.js";

	export default {
    	name: 'Catalog',
    	components: {
			Product
    	},
	data() {
		return {
				products: [],
			}
    	},
	async created(){
		this.products = await this.getProducts();
    },
    methods:{
      async getProducts(){
        	let products = await getProducts(null);
			return products.data;		
		}
      }
    }
</script>

<style>

</style>