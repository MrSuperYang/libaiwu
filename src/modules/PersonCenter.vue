<template>
	<div id="personcenter">

		<headers></headers>

		<div class="content">
			<pcleft></pcleft>
			<router-view></router-view>
		</div>
		<footers></footers>

	</div>
</template>

<script>
	import Headers from '../components/Head'
	import Footers from '../components/Foot'
	import Pcleft from '../components/PersonPc_left'
	export default {
		name: 'PersonCenter',
		components: {
			Pcleft,
			Headers,
			Footers,
		},
		
	}
</script>

<style scoped>
	.content {
		width: 1280px;
		margin: 40px auto;
		display: flex;
		justify-content: space-between;
	}
</style>