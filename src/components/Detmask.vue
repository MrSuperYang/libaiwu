<template>
	<div id="amask">
		<div class="amaska">
			<div class="amaskb">
				<div>温馨提示</div>
				<div>
					<p>新疆哈密瓜(8kg装)、葡萄(150kg)</p>
					<p>无法送到指定区域,请到购物车中删除商品</p>
					<p>或修改配送地址后重新提交订单</p>
				</div>
				<button id="btna">返回购物车修改</button>
				<button id="btnb">修改配送区域</button>
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
		background-color:rgba(0,0,0,0.2);
	}
	.amaskb{
		width: 646px;
		height: 430px;
		margin-top: 200px;
		/*text-align: center;*/
		border: 5px solid #e2e2e2; 
		background-color: white;
	}
	.amaskb div:nth-child(1){
		font-size: 18px;
		margin-left: 30px;
		margin-top: 30px;
	}
	.amaskb div:nth-child(2){
		height: 100px;
		margin-top: 60px;
		color: #666666;
		background-image: url(../pages/index/assets/aimgc/警告叹号.jpg);
		background-position-x:115px;
		background-repeat: no-repeat;
	}
	.amaskb div:nth-child(2)  p{
		text-indent: 254px;
		line-height: 30px;
		font-size: 18px;
		color: #707070;
	}
	.amaska div:nth-child(2) p:nth-child(1){
		text-indent: 254px;
		color:#f08200 ;
		line-height: 38px;
	}
	#btna{
		margin-left: 106px;
		margin-top:108px ;
		width: 191px;
		height: 35px;
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
		width: 191px;
		height: 35px;
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