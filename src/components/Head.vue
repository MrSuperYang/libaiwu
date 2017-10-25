<template>
	<!--头部组件-->
	<div class="header">
		<!--头部灰色部分-->
		<div class="header_topnav">
			<!--所在城市-->
			<div class="header_adress">
				<span>所在城市:</span>
				<a href="javascript:void(0)" class="a_adress">{{address}}</a><img src="../pages/index/assets/小三角.jpg" alt="" />
			</div>
			<!--城市弹框-->
			<div class="mask_back">
				<div class="mask_top">
					<p>建议您的收货地址&nbsp;:&nbsp;<span>哈密市伊州区</span></p>
					<v-distpicker province="河南省" city="郑州市" area="金水区"></v-distpicker>
					<button class="btn1">返回</button><button class="btn2">保存</button>
				</div>
			</div>
			<!--右侧信息-->
			<div class="header_menu">
				<a href="/logoin/">登录</a>
				<a href="/logoreg">注册</a>
				<a href="/person/myorder">我的订单</a>
				<a href="/person/Mymessage">我的消息</a>
				<a href="javascript:void(0)">我是商家</a>
				<a href="javascript:void(0)"><img src="../pages/index/assets/电话.jpg" /><span>400-800-8820</span></a>
			</div>
		</div>
		<!--logo所在区域-->
		<div class="header_middlenav">
			<div class="header_mainnav">
				<div class="header_logo">
					<a href="/"><img src="../pages/index/assets/logo.jpg" alt="" /></a>
				</div>
				<div class="header_search">
					<div class="search_box">
						<input type="text" name="search" id="search" value="" />
						<a href="javascript:void(0)" class="search_icon"><img src="../pages/index/assets/sel.jpg" alt="" /></a>
						<div class="header_minnav">
							<span>热门:</span>
							<a href="javascript:void(0)">奇异果</a>
							<a href="javascript:void(0)">牛排</a>
							<a href="javascript:void(0)">山竹</a>
							<a href="javascript:void(0)">牛油果</a>
						</div>
					</div>
				</div>
				<div class="header_user">
					<a href="/user">
						<img src="../pages/index/assets/用户.jpg" alt="" />
						<span>个人中心</span>
					</a>
					<a href="/cart/index">
						<img src="../pages/index/assets/car.jpg" alt="" />
						<span>购物车</span>
					</a>
				</div>
			</div>
		</div>
		<div class="header_bottomnav">
			<div id="header_nav">
				<div class="header_nav">
					<div class="nav_all">
						<a href="/goods/index"><span>全部分类</span><img src="../pages/index/assets/header/list_icon.png" alt="" /></a>
					</div>
					<!--隐藏菜单-->
					<ul class="list_menu">
						<li>
							<img src="../pages/index/assets/header/fruits_icon.jpg" alt="" />
							<a href="###">新鲜水果</a>
							<div class="submenu">
								<span>应季水果</span>
								<ul>
									<li><a href="">草莓</a></li>
									<li><a href="">草莓</a></li>
									<li><a href="">草莓</a></li>
									
								</ul>
								<ul>
									<li><a href="">草莓</a></li>
									<li><a href="">草莓</a></li>
									<li><a href="">草莓</a></li>
								</ul>
							</div>
						</li>
						<li>
							<img src="../pages/index/assets/header/seafood_icon.jpg" alt="" />
							<a href="">生猛海鲜</a>
							<div class="submenu">
								<span>应季海鲜</span>
								<ul>
									<li><a href="">龙虾</a></li>
									<li><a href="">龙虾</a></li>
									<li><a href="">龙虾</a></li>
									
								</ul>
								<ul>
									<li><a href="">龙虾</a></li>
									<li><a href="">龙虾</a></li>
									<li><a href="">龙虾</a></li>
								</ul>
							</div>
						</li>
						<li>
							<img src="../pages/index/assets/header/meat_icon.jpg" alt="" />
							<a href="">肉类家禽</a>
							<div class="submenu">
								<span>肉类家禽</span>
								<ul>
									<li><a href="">鸡肉</a></li>
									<li><a href="">鸡肉</a></li>
									<li><a href="">鸡肉</a></li>
									
								</ul>
								<ul>
									<li><a href="">鸡肉</a></li>
									<li><a href="">鸡肉</a></li>
									<li><a href="">鸡肉</a></li>
								</ul>
							</div>
						</li>
						<li>
							<img src="../pages/index/assets/header/milk_icon.jpg" alt="" />
							<a href="">蛋奶速食</a>
							<div class="submenu">
								<span>蛋奶速食</span>
								<ul>
									<li><a href="">牛奶</a></li>
									<li><a href="">牛奶</a></li>
									<li><a href="">牛奶</a></li>
									
								</ul>
								<ul>
									<li><a href="">牛奶</a></li>
									<li><a href="">牛奶</a></li>
									<li><a href="">牛奶</a></li>
								</ul>
							</div>
						</li>
						<li>
							<img src="../pages/index/assets/header/veggie_icon.jpg" alt="" />
							<a href="">田园蔬菜</a>
							<div class="submenu">
								<span>田园蔬菜</span>
								<ul>
									<li><a href="">菠菜</a></li>
									<li><a href="">菠菜</a></li>
									<li><a href="">菠菜</a></li>
									
								</ul>
								<ul>
									<li><a href="">菠菜</a></li>
									<li><a href="">菠菜</a></li>
									<li><a href="">菠菜</a></li>
								</ul>
							</div>
						</li>
						<li>
							<img src="../pages/index/assets/header/sock_icon.jpg" alt="" />
							<a href="">零食酒水</a>
							<div class="submenu">
								<span>零食酒水</span>
								<ul>
									<li><a href="">饼干</a></li>
									<li><a href="">饼干</a></li>
									<li><a href="">饼干</a></li>
									
								</ul>
								<ul>
									<li><a href="">饼干</a></li>
									<li><a href="">饼干</a></li>
									<li><a href="">饼干</a></li>
								</ul>
							</div>
						</li>
						<li>
							<img src="../pages/index/assets/header/groceries.jpg" alt="" />
							<a href="">粮食杂货</a>
							<div class="submenu">
								<span>粮食杂货</span>
								<ul>
									<li><a href="">大米</a></li>
									<li><a href="">大米</a></li>
									<li><a href="">大米</a></li>
									
								</ul>
								<ul>
									<li><a href="">大米</a></li>
									<li><a href="">大米</a></li>
									<li><a href="">大米</a></li>
								</ul>
							</div>
						</li>
						<li>
							<img src="../pages/index/assets/header/gift_icon.jpg" alt="" />
							<a href="">礼品卡券</a>
							<div class="submenu">
								<span>礼品卡券</span>
								<ul>
									<li><a href="">礼品</a></li>
									<li><a href="">礼品</a></li>
									<li><a href="">礼品</a></li>
									
								</ul>
								<ul>
									<li><a href="">礼品</a></li>
									<li><a href="">礼品</a></li>
									<li><a href="">礼品</a></li>
								</ul>
							</div>
						</li>
						<li>
							<img src="../pages/index/assets/header/home_icon.jpg" alt="" />
							<a href="">家具用品</a>
							<div class="submenu">
								<span>家具用品</span>
								<ul>
									<li><a href="">沙发</a></li>
									<li><a href="">沙发</a></li>
									<li><a href="">沙发</a></li>
									
								</ul>
								<ul>
									<li><a href="">沙发</a></li>
									<li><a href="">沙发</a></li>
									<li><a href="">沙发</a></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<ul class="nav_list">
					<li class="active li">
						<a href="/">首页</a>
					</li>
					<li class="li">
						<a href="/city">同城</a>
					</li>
					<li class="li">
						<a href="/friday">礼拜五</a>
					</li>
					<li class="li">
						<a href="/jifenshop">积分商城</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "myheader",
		data() {
			return {
				address: '哈密市伊州区',
			}
		},
		mounted(){
			$(".a_adress").on("click", function() {
				$(".mask_back").css("display", "block");
			});
			$(".btn1").click(function() {
				$(".mask_back").css("display", "none");
				this.address = $("select").eq(1).val() + $("select").eq(2).val();
			});
		}
	}
</script>
<style scoped="scoped">
	body {
		width: 100%;
	}
	
	body,
	div {
		margin: 0;
		padding: 0;
	}
	
	img {
		vertical-align: middle;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	.header {
		width: 100%;
		background-color: #eeeeee;
		/*position: relative;*/
		z-index: 1;
	}
	
	.header_topnav {
		width: 1280px;
		margin: auto;
		padding-top: 10px;
		padding-bottom: 10px;
		color: #787878;
		font-size: 0.8125rem;
		overflow: hidden;
	}
	
	.header_topnav a {
		color: #787878;
	}
	
	.header_topnav .header_adress {
		float: left;
	}
	
	.header_adress img {
		margin-left: 5px;
	}
	
	.header_topnav .header_menu {
		float: right;
	}
	
	.header_menu a {
		padding-left: 13px;
		padding-right: 13px;
		border-right: 1px solid #999999;
	}
	
	.header_menu a:last-child {
		border-right: 0;
	}
	
	.header_menu a img {
		margin-right: 6px;
	}
	
	.header_menu a span {
		color: #666666;
		font-weight: 500;
	}
	
	.header .header_middlenav {
		background-color: white;
	}
	
	.header_middlenav .header_mainnav {
		width: 1280px;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.header_mainnav .header_logo {
		padding-top: 25px;
		padding-bottom: 38px;
		float: left;
	}
	
	.header_mainnav .header_search {
		float: left;
		padding-top: 50px;
		padding-bottom: 22px;
		margin-left: 125px;
	}
	
	.header_search .search_box {
		/*background-color: #4b943d;*/
		float: left;
	}
	
	.search_box #search {
		border: 2px solid #4b943d;
		width: 450px;
		height: 40px;
	}
	
	.search_box .search_icon {
		display: inline-block;
		float: right;
		padding: 0px 6px;
		height: 46px;
		line-height: 46px;
		background-color: #4b943d;
	}
	
	.search_box .header_minnav {
		padding-top: 6px;
		color: #787878;
		font-size: 0.8125rem;
	}
	
	.header_minnav a {
		color: #787878;
	}
	
	.header_minnav a:nth-child(2) {
		padding-left: 11px;
	}
	
	.header_minnav a:nth-child(3) {
		padding-left: 26px;
	}
	
	.header_minnav a:nth-child(4) {
		padding-left: 28px;
	}
	
	.header_minnav a:nth-child(5) {
		padding-left: 27px;
	}
	
	.header_mainnav .header_user {
		float: left;
		padding-top: 50px;
		padding-bottom: 22px;
		margin-left: 30px;
		font-size: 0.75rem;
	}
	
	.header_user a {
		display: inline-block;
		text-align: center;
		padding: 13px 20px;
		background-color: #f8f8f6;
		border: 1px solid #e5e5e5;
		color: #787878;
	}
	
	.header_user a img {
		vertical-align: middle;
		margin-right: 10px;
	}
	
	.header_user a span {
		vertical-align: middle;
	}
	
	.header_user a:nth-child(2) {
		margin-left: 20px;
	}
	
	.header .header_bottomnav {
		background-color: #fff;
		width: 100%;
	}
	
	.header_bottomnav #header_nav {
		width: 1280px;
		margin: 0 auto;
		font-size: 0.9375rem;
	}
	
	.header_bottomnav .header_nav {
		float: left;
		position: relative;
		z-index: 999;
	}
	.header_nav:hover .list_menu{
		display: block;
	}
	 /*隐藏页面*/
	.header_nav .list_menu{
		position: absolute;
		text-align: center;
		width: 168px;
		top:50px;
		left: 0;
		background-color:#FFFFFF;
		/*font-size: 20rem;*/
		color: white;
		border:1px solid #efeeec;
		display: none;
		z-index: 1;
	}
	.header_nav .list_menu li{
		text-align: center;
		float: none;
		padding-top:16px;
		padding-bottom: 15.4px;
		border-bottom:1px solid #EFEEEC;
	}
	.header_nav .list_menu li a{
		margin-left: 12px;
		vertical-align: middle;
		color: #333333;
	}
	/*hover 显示*/
	.header_nav .list_menu li:last-child{
		border-bottom:none;
	}
	.header_nav .list_menu li .submenu{
		position: absolute;
		background:#ebffe7;
		left:168px;
		top:-1px;
		height: 490px;
		width: 420px;
		padding-top: 20px;
		padding-left:40px;
		display: none;
	}
	/*hover 显示*/
	.header_nav .list_menu li:hover .submenu{
		display: block;
	}
	.header_nav .list_menu li:hover{
		background-color:#ebffe7 ;
	}
	.header_nav .list_menu li .submenu span{
		 float: left;
		 display: inline-block;
		 font-size: 1.125rem;
		 color: #498e3d;
	}
	.header_nav .list_menu li .submenu ul{
		float: right;
		width:  280px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.header_nav .list_menu li .submenu ul:nth-of-type(2){
		margin-top:15px;
	}
	.header_nav .list_menu li .submenu ul li{
		/*float: left;*/
		border-bottom: none;
		border-right:1px solid black;
		padding-left:23px;
		padding-right: 23px;
		padding-top:0;
		padding-bottom:0;
		font-size: 1.0625rem;
		color: #3f413f;
	}
	.header_nav .list_menu li .submenu ul li:last-child{
		border-right: 0;
	}
	.header_bottomnav::after{
		content: '';
		display: block;
		clear: both;
	}
	.header_nav .nav_all {
		height: 50px;
		line-height: 50px;
		width: 170px;
		text-align: center;
		/*float: left;*/
	}
	
	.nav_all a {
		color: #333333;
	}
	
	.nav_all a img {
		margin-left: 15px;
	}
	
	.header_nav .nav_list {
		float: left;
		overflow: hidden;
		/*width: 1000px;*/
	}
	
	.nav_list li {
		float: left;
		/*padding-left:60px;
		/*padding-right:60px;*/
		*/ height: 50px;
		line-height: 50px;
		text-align: center;
	}
	
	.nav_list li a {
		color: #333;
		padding-left: 60px;
		padding-right: 60px;
		border-left: 1px solid #E8E8E8;
	}
	
	.nav_list li.active {
		background-color: #f08200;
	}
	
	.nav_list li.active a {
		color: white;
	}
	
	.nav_list li:hover {
		background-color: #f08200;
	}
	
	.nav_list li:hover a {
		color: white;
	}
	/*城市弹框*/
	.mask_back {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 100;
		display: none;
	}
	
	.mask_top {
		width: 702px;
		height: 356px;
		background: url(../pages/index/assets/header/mask_bg.png) no-repeat;
		position: absolute;
		top: 50%;
		margin-top: -178px;
		left: 50%;
		margin-left: -351px;
		text-align: center;
	}
	
	.mask_top p {
		margin: 60px 0 65px 0;
		font-size: 18px;
		color: rgb(51, 51, 51);
		line-height: 1.667;
	}
	
	.mask_top p span {
		border-radius: 5px;
		display: inline-block;
		line-height: 35px;
		color: white;
		background-color: rgb(73, 142, 61);
		width: 178px;
		height: 35px;
	}
	
	.mask_top .address {
		/*text-align: left;*/
	}
	
	.mask_top button {
		border-radius: 5px;
		background-color: rgb(240, 130, 0);
		outline: none;
		border: 0;
		margin-top: 60px;
		width: 151px;
		height: 35px;
		color: white;
	}
	
	.mask_top .btn1 {
		background-color: rgb(153, 153, 153);
		margin-right: 20px;
	}
</style>