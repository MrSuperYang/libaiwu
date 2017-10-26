<template>
	<div>
		<headers></headers>
		<!--<shopcardel></shopcardel>-->
		<router-view></router-view>
		<footers></footers>
	</div>

</template>

<script>
	import Headers from '../components/ShopingCarHead'
	import Footers from '../components/Foot'
//	import Shopcardel from '../components/Shopcardel'
	export default {
		name: 'index',
		components: {
			//Shopcardel,
			Headers,
			Footers,
		},
//		mounted(){
//			$(".money i").on("click", function() {
//				$(".header_mainnav .login_title .fir").css("color", "#666666");
//				$(".header_mainnav .login_title .sec").css("color", "orange");
//				$(".header_mainnav .login_title .thir").css("color", "#666666");
//			});
//			$(".abxxh button").on("click", function() {
//				$(".header_mainnav .login_title .fir").css("color", "#666666");
//				$(".header_mainnav .login_title .sec").css("color", "#666666");
//				$(".header_mainnav .login_title .thir").css("color", "orange");
//			});
//		}
	}
</script>

<style>
</style>