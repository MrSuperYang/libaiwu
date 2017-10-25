<template>
	<div id="adl">
		<div class="azhifua">
			<img class="azhifu" src="../pages/index/assets/aimgc/支付成功.jpg" alt="" />
		</div>
		<div class="azhifub">
			<button>查看订单</button>
			<button>返回首页</button>
		</div>
		<p class="azhifuc">订单编号：201710213345ah491</p>
	</div>
</template>

<script>
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.azhifua{
		width: 1280px;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		margin-top: 80px;
    }
    /*支付图片下边两个按钮*/
   .azhifub{
		width: 1280px;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		margin-top: 66px;   
   }
   .azhifub button{
   		width: 170px;
   		height: 45px;
   		border: none;
   		color: white;
   		font-size: 18px;
   		border-radius: 5px;
   }
   .azhifub button:nth-child(1){
   	background-color: #f08200;
   }
   .azhifub button:nth-child(2){
   	background-color: #498e3d;
   	margin-left:40px;
   }
   .azhifuc{
   	width: 1280px;
   	display: flex;
   	justify-content: center;
   	margin: 0 auto;
   	margin-top: 60px;
   	margin-bottom: 90px;
   	font-size: 16px;
   	color: #666666;
   }
</style>