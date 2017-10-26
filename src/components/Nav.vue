<template>
	<div class="header_topnav">
		<!--所在城市-->
		<div class="header_adress">
			<span>所在城市:</span>
			<a href="javascript:void(0)" class="a_adress">{{dizhi}}</a><img src="../pages/index/assets/小三角.jpg" alt="" />
		</div>
		<!--城市弹框-->
		<div class="mask_back">
			<div class="mask_top">
				<p>建议您的收货地址&nbsp;:&nbsp;<span>哈密市伊州区</span></p>
				<v-distpicker province="河南省" city="郑州市" area="金水区"></v-distpicker>
				<button class="btn1">返回</button><button class="btn2" @click="click()">保存</button>
			</div>
		</div>
		<!--右侧信息-->
		<div class="header_menu">
			<a href="/logoin/">登录</a>
			<a href="/logoreg">注册</a>
			<a href="/person/myorder">我的订单</a>
			<a href="/person/Mymessage">我的消息</a>
			<a href="/Delmerchant">我是商家</a>
			<a href="javascript:void(0)"><img src="../pages/index/assets/电话.jpg" /><span>400-800-8820</span></a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "myheader",
		data() {
			return {
				dizhi: '哈密市伊州区',
			}
		},
		mounted() {
			$(".header_adress").on("click", function() {
				$(".mask_back").css("display", "block");
			});
			$(".btn1").click(function() {
				$(".mask_back").css("display", "none");
			});
			$(".btn2").on("click", function() {
					$(".mask_back").css("display", "none");
			});
		},
		methods:{
			click:function () {
				this.dizhi = $("select").eq(1).val() + $("select").eq(2).val();
			}
		}
	}
</script>

<style scoped="scoped">
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