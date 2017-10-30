<template>

	<div class="index_main">
		<!--热门商品展示-->
		<div class="index_hotnav">
			<router-link to="*"><img src="../pages/index/assets/a/banner2.jpg" alt="" /></router-link>
			<router-link to="*"><img src="../pages/index/assets/a/banner1.jpg" alt="" /></router-link>
			<router-link to="*"><img src="../pages/index/assets/a/banner3.jpg" alt="" /></router-link>
			<router-link to="*"><img src="../pages/index/assets/a/banner4.jpg" alt="" /></router-link>
		</div>
		<!--热门商品展示结束-->
		<div class="index_itemnav">
			<div class="itemnav_title">
				<div class="itemnav_titleleft">
					<img src="../pages/index/assets/a/anaozhong.jpg" alt=" " /><span class="itemnav_fonts">礼拜五</span>
					<span class="itemnav_gray">Friday</span>
				</div>
				<div class="itemnav_titleright">
					<div class="itemnav_timeout">
						<span class="friday_begin">距离开始</span>
						<span class="timeout_day">0天</span>
						<span class="timeout_day">00</span>
						<span class="timeout_colon">:</span>
						<span class="timeout_day">00</span>
						<span class="timeout_colon">:</span>
						<span class="timeout_day">00</span>
					</div>
					<span class="more">更多></span>
				</div>
			</div>
			<!--礼拜五商品轮播图-->
			<div class="itemnav_friday">
				<router-link to="*">
					<swiper :options="swiperOption" ref="mySwiper">
						<!-- slides -->
						<swiper-slide class="friday_goods">
							<a href=" "><img src="../pages/index/assets/a/1.jpg" alt=" " /></a>
							<div>
								<p>新西兰佳沛黄金奇异果</p>
								<p>6个装</p>
								<span>礼拜五</span>
								<span>:</span>
								<span>¥ 28.80</span>
							</div>
						</swiper-slide>
						<swiper-slide class="friday_goods">
							<a href=" "><img src="../pages/index/assets/a/1.jpg" alt=" " /></a>
							<div>
								<p>新西兰佳沛黄金奇异果</p>
								<p>6个装</p>
								<span>礼拜五</span>
								<span>:</span>
								<span>¥ 28.80</span>
							</div>
						</swiper-slide>
						<swiper-slide class="friday_goods">
							<a href=" "><img src="../pages/index/assets/a/1.jpg" alt=" " /></a>
							<div>
								<p>新西兰佳沛黄金奇异果</p>
								<p>6个装</p>
								<span>礼拜五</span>
								<span>:</span>
								<span>¥ 28.80</span>
							</div>
						</swiper-slide>
						<swiper-slide class="friday_goods">
							<a href=" "><img src="../pages/index/assets/a/1.jpg" alt=" " /></a>
							<div>
								<p>新西兰佳沛黄金奇异果</p>
								<p>6个装</p>
								<span>礼拜五</span>
								<span>:</span>
								<span>¥ 28.80</span>
							</div>
						</swiper-slide>
						<!--<swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>-->
						<!-- Optional controls -->
						<div class="swiper-pagination" slot="pagination"></div>
						<!--<div class="swiper-button-prev " slot="button-prev "></div>
					<div class="swiper-button-next " slot="button-next "></div>-->
						<!--    <div class="swiper-scrollbar "   slot="scrollbar "></div>-->
					</swiper>
				</router-link>
			</div>
		</div>
		<!--礼拜五商品轮播图结束-->
		<!--单类商品展示-->
		<div class="itemnav_goodslist index_itemnav">
			<div class="itemnav_title">
				<div class="itemnav_titleleft">
					<img src="../pages/index/assets/index/fruits.png" alt=" " /><span class="itemnav_fonts">新鲜水果</span>
					<span class="itemnav_gray">采自新疆优质水果生产基地,品质一流</span>
				</div>
				<div class="itemnav_titleright">
					<span class="more">更多></span>
				</div>
			</div>
			<div class="goods_list">
				<ul>
					<li v-for="(item,index) in goodsFruits">
						<router-link :to="{ path: '/Delakesu', query: { id:item.id}}" :data-id="item.id">
							<img :src="item.src" alt=" " class="good_pic" />
						</router-link>
						<div>
							<h4>{{item.goodsName}}</h4>
							<p>{{item.sketch}}</p>
							<p class="money_box"><span class="red">{{item.currentPrice}}</span><span>{{item.originalPrice}}</span>
								<a href="javascript:void(0)" @click="choose()"><img src="../pages/index/assets/a/购物车.jpg" /></a>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--单类商品展示结束-->
		<!--单类商品展示-->
		<div class="itemnav_goodslist index_itemnav">
			<div class="itemnav_title">
				<div class="itemnav_titleleft">
					<img src="../pages/index/assets/index/seafood_icon.png" alt=" " /><span class="itemnav_fonts">水产海鲜</span>
					<span class="itemnav_gray">采自新疆优质水果生产基地,品质一流</span>
				</div>
				<div class="itemnav_titleright">
					<span class="more">更多></span>
				</div>
			</div>
			<div class="goods_list">
				<ul>
					<li v-for="(item,index) in goodsSea">
						<router-link :to="{ path: '/Delakesu', query: { id:item.id}}" :data-id="item.id">
							<img :src="item.src" alt=" " class="good_pic" />
						</router-link>
						<div>
							<h4>{{item.goodsName}}</h4>
							<p>{{item.sketch}}</p>
							<p class="money_box"><span class="red">{{item.currentPrice}}</span><span>{{item.originalPrice}}</span>
								<a href="javascript:void(0)" @click="choose()"><img src="../pages/index/assets/a/购物车.jpg" /></a>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--单类商品展示结束-->
		<!--单类商品展示-->
		<div class="itemnav_goodslist index_itemnav">
			<div class="itemnav_title">
				<div class="itemnav_titleleft">
					<img src="../pages/index/assets/index/meat_icon.png" alt=" " /><span class="itemnav_fonts">肉类禽蛋</span>
					<span class="itemnav_gray">采自新疆优质水果生产基地,品质一流</span>
				</div>
				<div class="itemnav_titleright">
					<span class="more">更多></span>
				</div>
			</div>
			<div class="goods_list">
				<ul>
					<li v-for="(item,index) in goodsMeat">
						<router-link :to="{ path: '/Delakesu', query: { id:item.id}}" :data-id="item.id">
							<img :src="item.src" alt=" " class="good_pic" />
						</router-link>
						<div>
							<h4>{{item.goodsName}}</h4>
							<p>{{item.sketch}}</p>
							<p class="money_box"><span class="red">{{item.currentPrice}}</span><span>{{item.originalPrice}}</span>
								<a href="javascript:void(0)" @click="choose()"><img src="../pages/index/assets/a/购物车.jpg" /></a>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--单类商品展示结束-->
		<!--单类商品展示-->
		<div class="itemnav_goodslist index_itemnav">
			<div class="itemnav_title ">
				<div class="itemnav_titleleft">
					<img src="../pages/index/assets/index/milk_icon.png" alt=" " /><span class="itemnav_fonts">蛋奶速食</span>
					<span class="itemnav_gray">采自新疆优质水果生产基地,品质一流</span>
				</div>
				<div class="itemnav_titleright">
					<span class="more">更多></span>
				</div>
			</div>
			<div class="goods_list">
				<ul>
					<li v-for="(item,index) in goodsMilk">
						<router-link :to="{ path: '/Delakesu', query: { id:item.id}}" :data-id="item.id">
							<img :src="item.src" alt=" " class="good_pic" />
						</router-link>
						<div>
							<h4>{{item.goodsName}}</h4>
							<p>{{item.sketch}}</p>
							<p class="money_box"><span class="red">{{item.currentPrice}}</span><span>{{item.originalPrice}}</span>
								<a href="javascript:void(0)" @click="choose()"><img src="../pages/index/assets/a/购物车.jpg" /></a>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--单类商品展示结束-->
		<!--登录弹框-->
		<div id="login_mask" v-show="this.$store.state.show">
			<div class="login_mask">
				<span id="close">✘</span>
				<login-table></login-table>
			</div>
		</div>
	</div>
</template>

<script>
	import LoginTable from './LoginTable'
	export default {
		name: "HomeMain",
		components: {
			LoginTable
		},
		data() {
			return {
				swiperOption: { //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
					// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					// swiper configs 所有的配置同swiper官方api配置
					autoplay: 2000,
					direction: 'horizontal',
					pagination: '.swiper-pagination',
					slidesPerView: 4,
					paginationClickable: true,
					spaceBetween: 20,
					freeMode: true
				},
				show: false,
				goodsFruits: [],
				goodsSea: [],
				goodsMeat: [],
				goodsMilk: [],
				day: "",
				hour: "",
				minu: "",
				sec: ""
			}
		},
		methods: {
			reg: function() {

			},
			shows: function() {
				this.show = !this.show;
			},
			choose: function() {
				if(window.localStorage.name) {
					this.$store.state.show = false;
				}
			}
		},
		mounted() {
			//登录弹框消失
			$("#close").click(function() {
				$("#login_mask").css("display", "none");
			});
			//每类商品请求4条数据
			//新鲜水果
			var firstId1 = 11;
			this.$http.post("/api/del/index", {
				firstId: firstId1
			}, {}).then(function(req) {
				this.goodsFruits = req.data;
				console.log(this.goodsFruits);
			});
			//水产海鲜
			var firstId2 = 44;
			this.$http.post("/api/del/index", {
				firstId: firstId2
			}, {}).then(function(req) {
				this.goodsSea = req.data;
				console.log(this.goodsSea);
			});
			//肉类
			var firstId3 = 33;
			this.$http.post("/api/del/index", {
				firstId: firstId3
			}, {}).then(function(req) {
				this.goodsMeat = req.data;
				console.log(this.goodsMeat);
			});
			var firstId4 = 77;
			this.$http.post("/api/del/index", {
				firstId: firstId4
			}, {}).then(function(req) {
				this.goodsMilk = req.data;
				console.log(this.goodsMilk);
			});
		}
	}
</script>

<style>
	@import url("../pages/index/assets/swiper-3.4.2.min.css");
	img {
		vertical-align: top;
	}
	
	ul li {
		float: left;
	}
	
	.box {
		width: 100%;
	}
	
	.index_main {
		width: 1280px;
		margin: 20px auto 20px;
		z-index: -1;
	}
	/*热门商品展示*/
	
	.index_main .index_hotnav a {
		margin-right: 15px;
	}
	
	.index_main .index_hotnav a:last-child {
		margin-right: 0;
	}
	
	.index_main .index_itemnav {
		margin-top: 18px;
	}
	
	.index_itemnav .itemnav_title {
		background-color: #ebffe8;
		padding: 30px;
		border-bottom: 1px solid #498e3d;
		overflow: hidden;
	}
	
	.itemnav_title .itemnav_titleleft {
		float: left;
	}
	
	.itemnav_titleleft span {
		vertical-align: middle;
	}
	
	.itemnav_titleleft .itemnav_fonts {
		font-size: 1.875rem;
		color: #498e3d;
		margin-left: 19px;
	}
	
	.itemnav_titleleft .itemnav_gray {
		font-size: 1.125rem;
		color: #a4a7a4;
		margin-left: 20px;
	}
	
	.itemnav_title .itemnav_titleright {
		float: right;
		overflow: hidden;
	}
	
	.itemnav_titleright .itemnav_timeout {
		float: left;
	}
	
	.itemnav_timeout span {
		vertical-align: middle;
	}
	
	.itemnav_timeout .friday_begin {
		font-size: 1.4375rem;
		color: #498e3d;
	}
	
	.itemnav_timeout .timeout_day {
		display: inline-block;
		text-align: center;
		font-size: 1.0625rem;
		background-color: #f08200;
		width: 60PX;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border-radius: 3px;
		color: white;
		font-size: 0.9375rem;
	}
	
	.itemnav_timeout span:nth-child(2) {
		margin-left: 20px;
		margin-right: 20px;
	}
	
	.itemnav_timeout .timeout_colon {
		margin-left: 10px;
		margin-right: 10px;
		color: #f08200;
	}
	
	.itemnav_titleright .more {
		margin-left: 30px;
		text-align: center;
		display: inline-block;
		padding-top: 10px;
		font-size: 1rem;
		color: #6f706f;
	}
	
	.index_itemnav {}
	
	.itemnav_friday {
		position: relative;
		height: 530px;
		z-index: 0;
	}
	/*  礼拜五轮播展示  */
	
	.itemnav_friday .swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
	}
	
	.swiper-pagination {
		/*position: absolute;*/
	}
	
	.friday_goods {
		height: 435px;
		margin: 20px auto;
	}
	
	.friday_goods div {
		background-color: #f8f6f7;
		text-align: center;
		padding: 10px 60px 30px;
	}
	
	.friday_goods div p:nth-child(1) {
		font-size: 1.0625rem;
		color: #333333;
		margin-bottom: 11px;
	}
	
	.friday_goods div p:nth-child(2) {
		font-size: 1.0625rem;
		color: #707070;
		margin-bottom: 20px;
	}
	
	.friday_goods div span:nth-child(3) {
		font-size: 1.0625rem;
		color: #f08200;
	}
	
	.friday_goods div span:nth-child(4) {
		color: #f08200;
	}
	
	.friday_goods div span:nth-child(5) {
		font-size: 1.1875rem;
		color: #ff5757;
	}
	
	.swiper-pagination-bullet-active {
		background: #498e3d;
	}
	/*商品展示 */
	
	.itemnav_goodslist {
		/*overflow: hidden;*/
	}
	
	.itemnav_goodslist .goods_list {
		overflow: hidden;
		margin-top: 20px;
	}
	
	.itemnav_goodslist .goods_list ul li {
		border: 1px solid #ececec;
		margin-right: 20px;
	}
	
	.itemnav_goodslist .goods_list ul li:last-child {
		margin-right: 0px;
	}
	
	.itemnav_goodslist .goods_list ul li div {
		margin: 10px 19px 30px;
	}
	
	.goods_list ul li div h4 {
		font-size: 1rem;
		font-weight: normal;
		color: #333333;
		margin-bottom: 17px;
	}
	
	.goods_list ul li div p {
		font-size: 0.875rem;
		color: #707070;
	}
	
	.goods_list ul li div .money_box {
		overflow: hidden;
		margin-top: 22px;
		line-height: 19px;
	}
	
	.goods_list ul li div .money_box .red {
		float: left;
		font-size: 1.1875rem;
		color: #ff5757;
	}
	
	.goods_list ul li div .money_box a {
		display: inline-block;
		height: 100%;
		float: right;
	}
	
	.goods_list ul li div .money_box a img {
		vertical-align: top;
	}
	
	.goods_list ul li div .money_box span:nth-child(2) {
		color: #666666;
		font-size: 0.875rem;
		margin-left: 17px;
		line-height: 19px;
		display: inline-block;
		float: left;
		text-decoration: line-through;
	}
	/* 登录弹框 */
	
	body #login_mask {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.6);
	}
	
	#login_mask .login_mask {
		width: 405px;
		/*height: 510px;*/
		background-color: #FFFFFF;
		border: 5px solid #e2e2e2;
		position: absolute;
		top: 50%;
		margin-top: -255px;
		left: 50%;
		margin-left: -202px;
		overflow: hidden;
	}
	
	.login_mask .login_table {
		margin-right: 0;
	}
	
	.login_table #register {
		margin-left: 40px;
	}
	
	.login_mask #close {
		position: absolute;
		right: 5px;
		top: 5px;
		text-align: center;
		display: inline-block;
		width: 20px;
		height: 20px;
		border: 1px solid #ccc;
		border-radius: 50%;
		color: red;
		line-height: 20px;
	}
	
	.goods_list ul li .good_pic {
		width: 302px;
		height: 303px;
	}
</style>