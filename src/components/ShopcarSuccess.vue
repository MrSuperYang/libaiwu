<template>
	<!--点击购物车添加成功-->
	<div id="amask">
		<div class="amaska">
			<div class="amaskb">
				<p>已成功加入购物车</p>
				<button id="btna">继续购物</button>
				<button id="btnb">查看购物车</button>
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
		height: 305px;
		margin-top: 496px;
		text-align: center;
		border: 5px solid #e2e2e2; 
		background-color: white;
	}
	.amaska p{
		margin-top: 80px;
		line-height: 40px;
		font-size: 26px;
		color: #666666;
		text-indent: 60px;
		background-image: url(../pages/index/assets/aimg/弹框对号.png);
		background-repeat: no-repeat;
		background-position-x: 192px;
	}
	#btna{
		margin-top:60px ;
		width: 170px;
		height: 45px;
		border: none;
		font-size: 18px;
		color: white;
		background-color:#f08200;
		border-radius: 5px;
	}
	#btnb{
		margin-top: 60px;
		margin-left: 40px;
		width: 170px;
		height: 45px;
		border: none;
		font-size: 18px;
		color: white;
		background-color:#498e3d;
		border-radius: 5px;
	}
</style>