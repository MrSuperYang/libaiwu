<template>
	<div id="app">
		<div class="atop">
			<span>您的当前位置：</span>
			<span>首页</span>
			<span> > </span>
			<span>全部商品</span>
			<span> > </span>
			<span>>苹果</span>
			<span> > </span>
			<span>阿克苏</span>
		</div>
		<div class="atopc">
			<div class="atopc1">
				排序：
				<span>销量</span>
				<span>价格</span>
				<span>评分最高</span>
			</div>
			<div class="atopc2">
				筛选:
				<span>全国</span>
				<span>次日达</span>
			</div>
		</div>
		<!--头部之后的详情部分-->
		<ul class="bcontent">
			<li>
				<img src="../pages/index/assets/aimgd/猕猴桃.jpg" alt="" />
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
					<p class="btextb">果肉绵密、花蜜版的甘甜百吃不厌</p>
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3" src="../pages/index/assets/aimgd/购物车.jpg"/></span></p>
				</div>
			</li>
			<li>
				<img src="../pages/index/assets/aimgd/葡萄.jpg" alt="" />
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
					<p class="btextb">果肉绵密、花蜜版的甘甜百吃不厌</p>
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3" src="../pages/index/assets/aimgd/购物车.jpg"/></span></p>
				</div>
			</li>
			<li>
				<img src="../pages/index/assets/aimgd/杏子.jpg" alt="" />
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
					<p class="btextb">果肉绵密、花蜜版的甘甜百吃不厌</p>
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3" src="../pages/index/assets/aimgd/购物车.jpg"/></span></p>
				</div>
			</li>
			<li>
				<img src="../pages/index/assets/aimgd/草莓.jpg" alt="" />
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
					<p class="btextb">果肉绵密、花蜜版的甘甜百吃不厌</p>
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3"  src="../pages/index/assets/aimgd/购物车.jpg"/></span></p>
				</div>
			</li>
		</ul>
		<!--分页页码表示数字-->
		<div class="amidBoto">

		</div>
	</div>
</template>

<script>
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	ul li{
		list-style-type: none;
	}
	.atop {
		width: 1240px;
		height: 14px;
		background-color: yellow;
		margin: 20px auto;
		background-color: #f4f4f4;
		font-size: 14px;
		color: #666666;
		padding: 20px;
	}
	
	.atop span {
		margin-left: 10px;
	}
	/*几级分类的下边的那个按钮什么的*/
	
	.atopc {
		width: 1280px;
		height: 52px;
		padding-top: 24px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
	}
	
	.atopc1 span {
		display: inline-block;
		width: 60px;
		height: 24px;
		margin-left: 40px;
		text-align: center;
		border: 1px solid #e7e7e7;
	}
	
	.atopc1 span:nth-child(3) {
		width: 96px;
		height: 24px;
	}
	
	.atopc2 span {
		display: inline-block;
		width: 64px;
		height: 26px;
		text-align: center;
		margin-left: 30px;
	}
	
	.atopc2 span:nth-child(1) {
		background-color: green;
		color: white;
	}
	
	.atopc2 span:nth-child(2) {
		width: 80px;
		background-color: #dedede;
	}
	/*头部下边的详情分类部分*/
	.bcontent {
		margin: 0 auto;
		width: 1280px;
		height: 475px;
		display: flex;
		justify-content: space-between;
	}
	
	.bcontent li {
		width: 304px;
		height: 452px;
		border: 1px solid darkgray;
	}
	
	.bcontent li .btext {
		height: 147px;
		/*line-height: 117px;*/
	}
	
	.bcontent li .btext .btexta {
		font-size: 20px;
		margin-left: 20px;
		line-height: 34px;
	}
	
	.bcontent li .btext .btextb {
		font-size: 14px;
		margin-left: 20px;
		line-height: 36px;
		color: gray;
	}
	
	.bcontent li .btext .btextc {
		font-size: 22px;
		margin-left: 20px;
		line-height: 50px;
		display: flex;
		justify-content: space-between;
	}
	
	.bcontent li .btext .btextc1 {
		font-size: 22px;
		color: red;
	}
	
	.bcontent li .btext .btextc2 {
		color: black;
		font-size: 16px;
		text-decoration: line-through;
	}
	
	.bcontent li .btext .btextc3 {
		margin-right: 20px;
	}
	/*分页页码部分*/
	
	.amidBoto {
		width: 821px;
		height: 32px;
		margin: 40px auto;
		background-color: yellow;
	}
</style>