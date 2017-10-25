<template>
	<div id="amask">
		<div class="amaska">
			<div class="amaskb">
				<div>使用平台支付</div>
				<p>请您在新打开的网上银行页面进行支付,支付完成前请不要关闭该窗口</p>
				<button id="btna">已经完成支付<br /><span>查看订单详情</span></button>
				<button id="btnb">支付失败<br /><span>更换支付方式</span></button>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.amaska{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color:rgba(0,0,0,0.3);
	}
	.amaskb{
		width: 646px;
		height: 430px;
		margin-top: 200px;
		text-align: center;
		border: 5px solid #e2e2e2; 
		background-color: white;
	}
	.amaskb div{
		font-size: 30px;
		margin-top: 100px;
		color: #f08200;
	}
	.amaska p{
		margin-top: 60px;
		line-height: 40px;
		font-size: 18px;
		color: #666666;
		text-align: center;
	}
	#btna{
		margin-top:60px ;
		width: 170px;
		height: 74px;
		border: none;
		font-size: 20px;
		color: white;
		background-color:#f08200;
		border-radius: 5px;
	}
	#btna span{
		font-size: 16px;
	}
	#btnb{
		margin-top: 60px;
		margin-left: 40px;
		width: 170px;
		height: 74px;
		border: none;
		font-size: 20px;
		color: white;
		background-color:#498e3d;
		border-radius: 5px;
	}
	#btnb span{
		font-size: 16px;
	}
</style>