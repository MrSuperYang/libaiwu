<template>
	<div id="app">
		<div class="mark">
			<span>4</span>
			<img src="../pages/index/assets/404/0.jpg" alt="" />
			<span>4</span>
		</div>
		<div class="txt">
			<span class="color">抱歉!</span>
			<span>你访问的页面不存在</span>
		</div>
		<div class="text">
			您要查看的网址可能已被删除、名称已被更改、或者暂时不可用
		</div>
		<div class="return"> 
			<span class="first">返回上一页面</span>
			<span class="sec"><router-link to="/">返回网站首页</router-link></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'nosel',
		components: {
		}
	}
</script>

<style scoped>
	#app{
		text-align: center;
	}
	.mark{
		font-size: 200px;
		color: #498e3d;
		margin-top: 230px;
	}
	.txt{
		word-spacing: 15px;
		font-size: 50px;
		letter-spacing:7px;
	}
	.color{
		color: orange;
	}
	.text{
		margin-top: 50px;
		font-size: 18px;
	}
	.return{
		width: 440px;
		margin: 100px auto 0;
		display: flex;
		justify-content: space-between;
	}
	.return span{
		display: inline-block;
		width: 170px;
		line-height: 45px;
		border-radius: 4px;
	}
	.first{
		background-color: #f08200;
	}
	.sec{
		background-color: #498E3D;
	}
</style>