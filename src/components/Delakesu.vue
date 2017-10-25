<template>
	<div id="axq">
		<!--导航栏部分-->
		<div class="atop">
			<span>您的当前位置：</span>
			<span>首页</span>
			<span>></span>
			<span>全部商品</span>
			<span>></span>
			<span>苹果</span>
			<span>></span>
			<span>阿克苏</span>
		</div>
		<!--物品详情部分.-->
		<div class="amid">
			<div class="amidLeft">
				<img src="../pages/index/assets/aimg/hamigua.jpg" />
				<ul class="amidTop">
					<li>距离开始还剩</li>
					<li>5天</li>
					<li>15</li>
					<li>:</li>
					<li>35</li>
					<li>:</li>
					<li>20</li>
				</ul>
				<div class="amidLeft2">
					<img src="../pages/index/assets/aimg/右括号.jpg" />
					<img src="../pages/index/assets/aimg/xq小橙子.jpg" />
					<img src="../pages/index/assets/aimg/xq小橙子.jpg" />
					<img src="../pages/index/assets/aimg/xq小橙子.jpg" />
					<img src="../pages/index/assets/aimg/xq小橙子.jpg" />
					<img src="../pages/index/assets/aimg/左括号.jpg" />
				</div>
			</div>
			<div class="amidRight">
				<h2>新疆哈密瓜1500kg</h2>
				<ul class="amidRight2">
					<li>全国</li>
					<li>礼拜五</li>
					<li>次日达</li>
					<li>自营</li>
				</ul>
				<p class="amidRight3">2016年,礼拜五创立于新疆东大门哈密市,礼拜五致力于为注重生活品质的中国都市家庭提供来自全球的优质食材,以及优质的生活服务。属性设置元素的垂直对齐方式。说明 该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。这会使元素降低而不...</p>
				<div class="amidRight4">
					<span>现价：¥ 20.0</span>
					<span>原价：0</span>
				</div>
				<div class="amidRight5">
					请选择规格
					<span>500g</span>
					<span>1000g</span>
					<span>2000g</span>
				</div>
				<div class="amidRight6">
					请选择价格
					<span>500k</span>
					<span>1000w</span>
				</div>
				<div class="amidRight7">
					数量：
					<p class="abxxdb5"><span>-</span> <span>1</span> <span>+</span></p>件
					<button>加入购物车</button>
					<button>立即购买</button>
				</div>
				<div class="amidRight8">
					<img src="../pages/index/assets/aimg/chengsexing.jpg" alt="" />
					<img src="../pages/index/assets/aimg/huisexing.jpg" />
					<span>收藏此商品</span>
					<span>分享到：</span>
					<img src="../pages/index/assets/aimg/fenxiang.jpg" alt="" />
					<img src="../pages/index/assets/aimg/空间.jpg" alt="" />
					<img src="../pages/index/assets/aimg/lanren.jpg" alt="" />
					<img src="../pages/index/assets/aimg/豆瓣.jpg" alt="" />
					<img src="../pages/index/assets/aimg/weibo.jpg" alt="" />
				</div>
			</div>
		</div>
		<ul>
			<li @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="{active:active===index}">
				{{tab.type}}
			</li>
		</ul>
		<component :is="currentView"></component>
	</div>
</template>

<script>
	//商品详情部分的js

	import DelDel from '../components/DelDel'
	import Delpingjia from '../components/Delpingjia'

	export default {
		name: 'index',
		components: {

			Delpingjia,
			DelDel,
		},
		data: {
			active: 0,
			currentView: 'DelDel',
			tabs: [{
					type: 'tab1',
					view: 'DelDel'
				},
				{
					type: 'tab2',
					view: 'Delpingjia'
				}
			]
		},
		methods: {
			toggle(i, v) {
				this.active = i
				this.currentView = v
			}
		}
	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	ul li {
		list-style-type: none;
	}
	/*导航栏部分的css*/
	
	.atop {
		width: 1280px;
		height: 54px;
		margin: 20px auto;
		line-height: 54px;
		font-size: 15px;
		color: #787878;
		text-indent: 20px;
		background-color: #f4f4f4;
	}
	/*导航栏下边物品详情部分的内容*/
	
	.amid {
		width: 1280px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	/*物品详情左边的图片*/
	
	.amidLeft {
		width: 500px;
		position: relative;
		border: 1px solid #e4e4e4, ;
	}
	
	.amidTop {
		width: 366px;
		height: 57px;
		border-radius: 0 0 18px 18px/0 0 18px 18px;
		padding-left: 40px;
		padding-right: 40px;
		padding-top: 15px;
		display: flex;
		justify-content: space-between;
		background-color: rgba(255, 255, 255, 0.4);
		position: absolute;
		top: 0;
		left: 28px;
	}
	
	.amidTop li:nth-child(1) {
		font-size: 20px;
		color: #333333;
	}
	
	.amidTop li:nth-child(2) {
		width: 46px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 5px;
		background-color: #ff5757;
		color: white;
		margin-left: 20px;
	}
	
	.amidTop li:nth-child(3) {
		width: 46px;
		height: 30px;
		margin-left: 5px;
		text-align: center;
		line-height: 30px;
		border-radius: 5px;
		background-color: #ff5757;
		color: white;
	}
	
	.amidTop li:nth-child(4) {
		color: #ff5757;
	}
	
	.amidTop li:nth-child(5) {
		width: 46px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 5px;
		background-color: #ff5757;
		color: white;
	}
	
	.amidTop li:nth-child(6) {
		color: #ff5757;
	}
	
	.amidTop li:nth-child(7) {
		width: 46px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 5px;
		background-color: #ff5757;
		color: white;
	}
	
	.amidLeft2 {
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
	}
	
	.amidRight {
		width: 740px;
		height: 498px;
		/*background-color: yellow;*/
	}
	/*物品详情右边的详细内容*/
	
	h2 {
		margin-top: 15px;
		color: #4d4d4d;
	}
	
	.amidRight2 {
		margin-top: 20px;
	}
	
	.amidRight2 li {
		display: inline-block;
		padding-left: 15px;
		padding-right: 15px;
		height: 26px;
		margin-right: 20px;
		line-height: 26px;
		font-size: 18px;
		background-color: #498e3d;
		color: white;
		text-align: center;
	}
	
	.amidRight2 li:nth-child(2) {
		background-color: #f08200;
	}
	
	.amidRight3 {
		height: 142px;
		border: 1px solid #ededed;
		margin-top: 23px;
		background-image: url(../pages/index/assets/aimg/绿色橙子.jpg);
		background-repeat: no-repeat;
		padding-top: 38px;
		color: #8c8c8c;
		padding-left: 150px;
		line-height: 30px;
	}
	
	.amidRight4 {
		margin-top: 30px;
	}
	
	.amidRight4 span:nth-child(1) {
		font-size: 28px;
		color: red;
	}
	
	.amidRight4 span:nth-child(2) {
		font-size: 18px;
		color: #666666;
		margin-left: 30px;
		text-decoration: line-through;
	}
	
	.amidRight5 {
		margin-top: 30px;
		font-size: 20px;
		color: #666666;
	}
	
	.amidRight5 span {
		margin-left: 20px;
		width: 81px;
		height: 32px;
		text-align: center;
		border: 1px solid #666666;
	}
	
	.amidRight6 {
		margin-top: 20px;
		font-size: 20px;
		color: #666666;
	}
	
	.amidRight6 span {
		margin-left: 20px;
		width: 81px;
		height: 32px;
		text-align: center;
		border: 1px solid #666666;
	}
	/*商品详情部分的内容css*/
	
	.amiddleTop {
		width: 1280px;
		height: 48px;
		margin: 0 auto;
		margin-top: 40px;
		background-color: #f4f4f4;
	}
	
	.amiddleTop button {
		width: 122px;
		height: 48px;
		border: 1px solid #e4e4e4;
		background-color: #f4f4f4;
	}
	
	.amiddleTop button:nth-child(1) {
		border: none;
		background-color: white;
		border-top: 2px solid green;
	}
	
	.amiddleTopa {
		width: 1242px;
		margin: 0 auto;
		border-left: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		padding-top: 40px;
		padding-left: 38px;
	}
	
	.amiddleTopa h3 {
		color: #ec6a17;
	}
	
	.amiddleTopa p {
		margin-top: 20px;
		font-size: 15px;
		color: #8f8f8f;
	}
	
	.amiddleTopa img {
		display: block;
		margin-top: 30px;
	}
	/*评价部分内容css*/
	
	.amiddleBottom {
		width: 1280px;
		height: 48px;
		margin: 0 auto;
		margin-top: 40px;
		background-color: #f4f4f4;
	}
	
	.amiddleBottom button {
		width: 122px;
		height: 48px;
		border: 1px solid #e4e4e4;
		background-color: #f4f4f4;
	}
	
	.amiddleBottom button:nth-child(2) {
		border: none;
		background-color: white;
		border-top: 2px solid green;
	}
	
	.amiddleBottomA {
		width: 1280px;
		height: 238px;
		margin: 0 auto;
		border: 1px solid #e9e9e9;
	}
	/*评价内部评论部分的内容*/
	
	.amiddleBottomAa {
		width: 1236px;
		height: 158px;
		margin: 0 auto;
		color: #858585;
		margin-top: 40px;
		/*background-color: yellow;*/
		border-bottom: 1px solid #e9e9e9;
		position: relative;
	}
	
	.amiddleBottomAa div {
		display: inline-block;
	}
	
	.amiddleBottomAa .amBAa2 {
		width: 270px;
		margin-left: 20px;
	}
	
	.amiddleBottomAa .amBAa2 .amBAa2Text {
		line-height: 34px;
	}
	
	.amiddleBottomAa .amBAa3 {
		width: 209px;
		height: 23px;
		display: inline-block;
		position: absolute;
		top: 0;
		right: 0;
	}
	/*加减法插件*/
	
	.amidRight7 {
		margin-top: 30px;
	}
	
	.amidRight7 .abxxdb5 {
		width: 105px;
		height: 26px;
		border: 1px solid #d3d3d3;
		display: inline-block;
	}
	
	.amidRight7 .abxxdb5 span {
		display: inline-block;
	}
	
	.amidRight7 .abxxdb5 span:nth-child(1) {
		width: 22px;
		height: 26px;
		border: 1px solid #d3d3d3;
		text-align: center;
	}
	
	.amidRight7 .abxxdb5 span:nth-child(2) {
		width: 46px;
		height: 26px;
		text-align: center;
	}
	
	.amidRight7 .abxxdb5 span:nth-child(3) {
		width: 22px;
		height: 26px;
		border: 1px solid #d3d3d3;
		text-align: center;
	}
	
	.amidRight7 button {
		width: 150px;
		height: 50px;
		border: none;
		color: white;
		font-size: 20px;
		background-color: #f08200;
		display: inline-block;
	}
	
	.amidRight7 button:nth-child(2) {
		margin-left: 40px;
	}
	
	.amidRight7 button:nth-child(3) {
		margin-left: 20px;
	}
	/*微博空间,等等分享*/
	
	.amidRight8 {
		margin-top: 50px;
		font-size: 18px;
	}
	
	.amidRight8 img {
		margin-left: 10px;
	}
</style>