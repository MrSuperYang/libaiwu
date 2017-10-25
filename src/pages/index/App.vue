<template>
  <div id="app">
  		
    	
    <router-view></router-view>
    
  </div>
</template>

<script>
//	import Headers from './../../components/Head'
//	import Footers from './../../components/Foot'
//	import Index from './../../components/a'

export default {
  name: 'app',
  components:{
  		
  }
}
</script>

<style>
	a{
		text-decoration: none;
		color: black;
	}
	*{
		margin: 0;
		padding: 0;
	}
	ul,li{list-style-type:none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
