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
		<div class="amid">
			<div class="amida">
				<img src="../pages/index/assets/aimgd/商家大图.jpg" alt="" />
				<div class="amida1">
					<img src="../pages/index/assets/aimg/右括号.jpg" alt="" />
					<img src="../pages/index/assets/aimgd/商家小图.jpg" alt="" />
					<img src="../pages/index/assets/aimgd/商家小图.jpg" alt="" />
					<img src="../pages/index/assets/aimgd/商家小图.jpg" alt="" />
					<img src="../pages/index/assets/aimgd/商家小图.jpg" alt="" />
					<img src="../pages/index/assets/aimg/左括号.jpg" alt="" />
				</div>
			</div>
			<div class="amidb">
				<div class="amidb1">
					礼拜五旗舰店
				</div>
				<div class="amidb2">
					<p>营业时间: 全天24小时 ¥62/人</p>
					<p>18699563623</p>
					<p>浙江省温岭市人民西路281左侧</p>
				</div>
				<div class="amidb3">
					<p>商家公告：</p>
					<p>本店有最新优惠活动,本店有最新优惠活动本店有最新优惠活动</p>
					<p>活动,到店男士享受8折优惠本店19.18有最新优惠活动...</p>
				</div>
			</div>
			<div class="amidc">
				<img src="../pages/index/assets/aimgd/商家评价.jpg" />
			</div>
		</div>
		<!-- 中间部分的导航栏部分内容,首先头部位置内容-->
		<div class="amidTop">
			<span>分类：</span>
			<span>全部</span>
			<span>餐饮</span>
			<span>酒店</span>
			<span>休闲</span>
			<span>电影</span>
			<span>汽车装饰</span>
			<span>家政服务</span>
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
	
	ul li {
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
	/*选中商品详情的部分的总div*/
	
	.amid {
		width: 1280px;
		height: 346px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	/*选中商品a部分*/
	
	.amid .amida {
		width: 500px;
		height: 346px;
	}
	
	.amid .amida .amida1 {
		width: 500px;
		height: 50px;
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	/*选中商品b部分*/
	
	.amid .amidb {
		width: 406px;
	}
	
	.amid .amidb .amidb1 {
		line-height: 74px;
		font-size: 26px;
	}
	
	.amid .amidb .amidb2 {
		height: 155px;
		border-top: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
	}
	
	.amid .amidb .amidb2 p {
		font-size: 15px;
		color: #999999;
		margin-top: 25px;
		text-indent: 26px;
		background-image: url(../pages/index/assets/aimgd/中间小图标.jpg);
		background-repeat: no-repeat;
	}
	
	.amidb2 p:nth-child(1) {
		margin-top: 28px;
	}
	
	.amid .amidb .amidb3 {
		height: 86px;
		margin-top: 30px;
	}
	
	.amidb3 p {
		font-size: 14px;
		color: #999999;
		line-height: 30px;
	}
	
	.amidb3 p:nth-child(1) {
		font-size: 18px;
		color: black;
	}
	/*选中商品c部分*/
	
	.amid .amidc {
		width: 300px;
	}
	/*此处内容是中间部分的头部导航栏部分*/
	
	.amidTop {
		width: 1280px;
		height: 40px;
		margin: 30px auto;
		font-size: 16px;
		border-top: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
		color: #666666;
		padding-top: 16px;
	}
	
	.amidTop span {
		display: inline-block;
		margin-right: 35px;
		text-align: center;
	}
	
	.amidTop span:nth-child(2) {
		width: 54px;
		height: 26px;
		background-color: #498e3d;
		color: white;
	}
	
	.amidTop span:nth-child(3) {
		color: #498e3d;
	}
	
	.amidTop span:hover {
		color: #498e3d;
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
	
	.bcontent li:hover{
		border: 1px solid gold;
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