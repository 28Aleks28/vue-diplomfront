<template>
	<!--== Start Header Area ==-->
	<header class="header-area">
		<div class="container container-wide">
			<div class="row align-items-center">
				<div class="col-sm-4 col-lg-2">
					<div class="site-logo text-center text-sm-left">
						<a href="#"><img src="/src/assets/img/logo.png" alt="Logo" /></a>
					</div>
				</div>

				<div class="col-lg-7 d-none d-lg-block">
					<div class="site-navigation">
						<ul class="main-menu nav">
							<li class="has-submenu">
								<a href="#" @click="this.$router.push('/')">
									Главная
								</a>								
							</li>
							
							<Dropdown />
							
							<li class="has-submenu"><a href="blog.html">blog</a>
								<ul class="sub-menu">
									<li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
									<li><a href="blog.html">Blog Right Sidebar</a></li>
									<li><a href="blog-details.html">Single Blog</a></li>
									<li><a href="blog-details-sidebar.html">Single Blog Sidebar</a></li>
								</ul>
							</li>
							<li><a href="gallery.html">Gallery</a></li>
							<li class="has-submenu"><a href="index.html">Pages</a>
								<ul class="sub-menu">
									<li><a href="cart.html">Cart</a></li>
									<li><a href="checkout.html">Checkout</a></li>
									<li><a href="wishlist.html">Wishlist</a></li>
								</ul>
							</li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>

				<div class="col-sm-8 col-lg-3">
					<div class="site-action d-flex justify-content-center justify-content-sm-end align-items-center">
						<ul class="login-reg-nav nav">
							<li><a href="#">Login</a></li>
							<li><a href="#">Register</a></li>
						</ul>

						<div class="mini-cart-wrap">
							<a href="cart.html" class="btn-mini-cart">
								<i class="ion-bag"></i>
								<span class="cart-total">3</span>
							</a>

							<div class="mini-cart-content">
								<div class="mini-cart-product">
									<div class="mini-product">
										<div class="mini-product__thumb">
											<a href="single-product.html"><img src="/src/assets/img/product/product-1.png" alt="product" /></a>
										</div>
										<div class="mini-product__info">
											<h2 class="title"><a href="single-product.html">Auto Clutch & Brake</a></h2>

											<div class="mini-calculation">
												<p class="price">5 x <span>$20.33</span></p>
												<button class="remove-pro"><i class="ion-trash-b"></i></button>
											</div>
										</div>
									</div>

									<div class="mini-product">
										<div class="mini-product__thumb">
											<a href="single-product.html"><img src="/src/assets/img/product/product-2.png" alt="product" /></a>
										</div>
										<div class="mini-product__info">
											<h2 class="title"><a href="single-product.html">Leather Steering Wheel</a></h2>

											<div class="mini-calculation">
												<p class="price">5 x <span>$20.33</span></p>
												<button class="remove-pro"><i class="ion-trash-b"></i></button>
											</div>
										</div>
									</div>

									<div class="mini-product">
										<div class="mini-product__thumb">
											<a href="single-product.html"><img src="/src/assets/img/product/product-3.png" alt="product" /></a>
										</div>
										<div class="mini-product__info">
											<h2 class="title"><a href="single-product.html">Leather Steering Wheel</a></h2>

											<div class="mini-calculation">
												<p class="price">5 x <span>$20.33</span></p>
												<button class="remove-pro"><i class="ion-trash-b"></i></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="responsive-menu d-lg-none">
							<button class="btn-menu">								
								<i class="fa fa-bars"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!--== End Header Area ==-->

	<!--== Start Responsive Menu Wrapper ==-->
    <aside class="off-canvas-wrapper off-canvas-menu">
        <div class="off-canvas-overlay"></div>
        <div class="off-canvas-inner">
            <!-- Start Off Canvas Content -->
            <div class="off-canvas-content">
                <div class="off-canvas-header">
                    <div class="logo">
                        <a href="#"><img src="/src/assets/img/logo.png" alt="Logo"></a>
                    </div>
                    <div class="close-btn">
                        <button class="btn-close"><i class="ion-android-close"></i></button>
                    </div>
                </div>

                <!-- Content Auto Generate Form Main Menu Here -->				
                <div class="res-mobile-menu mobile-menu">
					
				</div>
            </div>
        </div>
    </aside>
    <!--== End Responsive Menu Wrapper ==-->
	
</template>

<script>
	import Dropdown from "../Links/Dropdown.vue";

	export default {
		name: 'Header',
		components: {
			Dropdown
		},
		mounted() {			
			this.$nextTick(function () {
				$('.main-menu.nav').slicknav({
					appendTo: '.res-mobile-menu',
					closeOnClick: true,
					removeClasses: true,
					closedSymbol: '<i class="ion-plus"></i>',
					openedSymbol: '<i class="ion-minus"></i>'
				});

				var resCanvasWrapper = $(".off-canvas-menu");
				$(".btn-menu").on('click', function() {
					resCanvasWrapper.addClass('active');
					$("body").addClass('fix');
				});

				$(".off-canvas-overlay, .btn-close").on('click', function() {
					$(".off-canvas-wrapper").removeClass('active');
					$("body").removeClass('fix');
				});
			})
			
		}
	}

	
</script>

<style>

</style>