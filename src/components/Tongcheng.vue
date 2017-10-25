<template>
	<div id="index">
		<wheel></wheel>
		<tongcheng></tongcheng>
	</div>

</template>

<script>
	import Tongcheng from './Local'
	import Wheel from './Wheel'
	export default {
		name: 'index',
		components: {

			Wheel,

			Tongcheng
		}
	}
</script>

<style scoped>

</style>