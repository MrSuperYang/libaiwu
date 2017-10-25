<template>
	<div>
	
			<headers></headers>
			<login-main></login-main>
		<!--	<router-view></router-view>-->
			<footers></footers>
	</div>
		
</template>

<script>
	import LoginMain from '../components/Logosel'
	import Headers from '../components/LogoSelhead'
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