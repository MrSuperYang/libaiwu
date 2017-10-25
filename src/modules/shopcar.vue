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
		}
	}
</script>

<style scoped>

</style>