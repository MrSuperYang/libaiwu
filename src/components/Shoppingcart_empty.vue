<template>
	<div class="Shoppingcart_empty">
		<div class="qcenter">
			<img src="img/cat_01.jpg" alt="" style="width:131px;height:115px;" />
			<span style="position:relative;top:-20px;">
			<span class="spanss" style="display:inline-block;width:170px;height:42px;text-align:center;line-height:42px;color: black;background-color:white;position:relative;padding-bottom:10px;">您的购物车是空的</span>
			<span class="spana"><router-link to="/">去首页看看</router-link></span></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Shoppingcart_empty'
	}
</script>

<style scoped>
	h4 {
		font-size: 18px;
	}
	/**/
	
	.qcenter {
		width: 1280px;
		height: 712px;
		margin: 0 auto;
		background-color: white;
		padding-top: 38px;
		border: 1px solid red;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.qcenter span {
		display: inline-block;
		width: 170px;
		height: 42px;
		text-align: center;
		background-color: #ec6a17;
		color: white;
		line-height: 42px;
		border-radius: 3px;
	}
</style>