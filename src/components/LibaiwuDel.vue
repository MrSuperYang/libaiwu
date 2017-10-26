<template>
	<div>
		<zhuanti></zhuanti>
		<zz></zz>
	</div>
</template>

<script>
	import Zz from "./Libaiwu"
	import Zhuanti from "./Mianbaoxie"
	
	export default {
		name: 'app',
		components: {
			Zz,
			Zhuanti
		}
	}
</script>

<style scoped="scoped">
	div{
		width: 1280px;
		margin: 0 auto;
		margin-bottom: 20px;
	}
</style>