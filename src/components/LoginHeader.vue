<template>
  <div class="login_header">
    <div class="header_topnav">
			<!--所在城市-->
			<div class="header_adress" @click="see()">
				<span>所在城市:</span>
				<a href="javascript:void(0)">{{address}}</a><img src="../pages/index/assets/header/header_top.jpg" alt="" />
			</div>
			<!--右侧信息-->
			<div class="header_menu">
				<a href="/logoin">登录</a>
				<a href="/logoreg">注册</a>
				<a href="/person/myorder">我的订单</a>
				<a href="/person/Mymessage">我的消息</a>
				<a href="javascript:void(0)">我是商家</a>
				<a href="javascript:void(0)"><img src="../pages/index/assets/header/header_tel.jpg" /><span>400-800-8820</span></a>
			</div>
		</div>
		<!--logo所在区域-->
		<div class="header_middlenav">
			<div class="header_mainnav">
				<div class="header_logo"><a href="/"><img src="../pages/index/assets/header/logo.jpg" alt="" /></a></div>
				<div class="login_title"> 
					<p>会员登录</p>
				</div>
			</div>
		</div>
		<div class="tan" v-show="bol">
			<div class="move">
				<div class="advice"><span>建议收货地址：</span><b>哈密市伊州区</b></div>
				<v-distpicker province="广东省" city="广州市" area="海珠区"></v-distpicker>
				<div class="save" @click="city()">保存</div>
			</div>
		</div>
  </div>
	
</template>

<script>
	export default{
		name:'loginheader',
		components:{
			
		},
		data() {
			return {
				address: '哈密市伊州区',
				bol:false
			}
		},
		mounted() {
		},
		methods:{
			city:function () {
				this.address=$("select").eq(1).val()+$("select").eq(2).val();
				this.bol=false;
			},
			see:function () {
				this.bol=true;
			}
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
	img{
		vertical-align: middle;
	}
	ul,li{
		list-style: none;
	}
	.login_header {
		width: 100%;
		background-color: #eeeeee;
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
	.header_menu  a img{
		margin-right:6px;
	}
	.header_menu  a span{
		color: #666666;
		font-weight: 500;
	}
	.login_header .header_middlenav {
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
	.header_mainnav .login_title{
		float: left;
		margin-left:60px;
		margin-top: 40px;
	}
	.login_title p{
		padding-left:22px;
		border-left:1px solid #cecece;
		line-height: 40px;
		font-size:1.25rem;
		color: #666666;
	}
	.tan {
		z-index: 1000;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
	}
	
	.move {
		background-image: url(../pages/index/assets/dizhi.jpg);
		background-repeat: no-repeat;
		height: 355px;
		width: 702px;
		margin-left: 610px;
		margin-top: 480px;
		padding-left: 65px;
	}
	
	.advice {
		padding-top: 60px;
		padding-bottom: 65px;
		font-size: 18px;
		line-height: 35px;
	}
	
	.advice b {
		display: inline-block;
		width: 178px;
		text-align: center;
		background-color: #498e3d;
		border-radius: 5px;
		color: white;
		font-style: normal;
	}
	
	.save {
		width: 151px;
		line-height: 35px;
		margin-left: 210px;
		margin-top: 60px;
		background-color: #f08200;
		text-align: center;
		color: white;
		border-radius: 5px;
	}
</style>