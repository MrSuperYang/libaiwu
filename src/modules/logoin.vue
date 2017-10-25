<template>
	<div>
	
			<headers></headers>
			<login-main></login-main>
		<!--	<router-view></router-view>-->
			<footers></footers>
	</div>
		
</template>

<script>
	import LoginMain from '../components/LoginMain'
	import Headers from '../components/LoginHeader'
	import Footers from '../components/Foot'
	export default {
		name: 'logoin',
		components: {
			Headers,
			Footers,
			LoginMain
		}
	}
</script>

<style>
</style>