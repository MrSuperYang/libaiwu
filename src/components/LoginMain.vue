<template>
 <div class="login_main">
 	<!--<div class="login_fontbox">
 		<div class="login_fonts">
 			<p>礼拜五会员</p>
 			<p>免 费 注 册</p>
 		</div>
 	</div>-->
 	<!--展示在下方-->
   <router-view></router-view>
</div>

</template>

<script>
//	import From from '../from'
	export default{
		name:"loginmain",
		components:{
		},
	}
</script>
<style scoped="scoped">
	div,p,span,input,a{
		margin: 0;
		padding: 0;
	}
	a{
		color: black;
		cursor: pointer;
	}
.login_main{
	background: url(../pages/index/assets/shouye/1.jpg) no-repeat;
	background-size:100% 100%;
	position: relative;
	/*height: 525px;*/
	overflow: hidden;
}
/*中间白色框及文字*/
.login_main .login_fontbox{
	position: absolute;
	width:490px;
	top: 138px;
	left:540px;
	border:2px solid #fff;
}
.login_fontbox .login_fonts{
	margin:10px;
	border:2px solid #fff;
	text-align: center;
	color: #FFFFFF;
	font-size: 2.9375rem;
}
.login_fonts p{
	text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.35);
}
.login_fonts p:first-child{
	margin-top: 28px;
	line-height: 60px;
	
}
.login_fonts p:nth-child(2){
	line-height: 60px;
	margin-bottom:24px;
	word-spacing: 25px;
}
</style>