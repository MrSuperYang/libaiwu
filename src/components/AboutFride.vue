<template>
	<!--关于礼拜五-->
	<div class="app">

		<zhuanti></zhuanti>
		<div class="content">
			<div class="cont_left">
				<div class="left_top">礼拜五商城</div>
				<div class="left_cont">
					<dl>
						<dt>关于礼拜五&nbsp;&gt;</dt>
						<dd>新用户注册</dd>
						<dd>在线下单</dd>
						<dd>支付方式</dd>
					</dl>
					<dl>
						<dt>配送说明&nbsp;&gt;</dt>
						<dd>运费说明</dd>
						<dd>配送方式</dd>
						<dd>发票说明</dd>
					</dl>
					<dl>
						<dt>售后服务&nbsp;&gt;</dt>
						<dd>退换货原则</dd>
						<dd>服务保障承诺</dd>
						<dd>验货与签收</dd>
						<dd>发票说明</dd>
					</dl>
					<dl>
						<dt>加盟礼拜五&nbsp;&gt;</dt>
						<dd>加盟条款</dd>
						<dd>公司简介</dd>
						<dd>服务协议</dd>
					</dl>
				</div>
			</div>
			<div class="cont_right">
				<div class="right_top">关于我们</div>
				<div class="right_cont">
					<h1>新用户注册</h1>
					<p class="dates"><span>分类：关于礼拜五</span><span>日期：2015年9月21日</span></p>
					<p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全</p>
					<img src="../pages/index/assets/about/about1.jpg" alt="" />
					<p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全</p>
					<img src="../pages/index/assets/about/about2.jpg" alt="" />
					<p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全</p>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Zhuanti from "./zhuanti"
	export default {
		name: 'app',
		components: {
			Zhuanti
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
	}
	
	.app {
		width: 1280px;
		padding-top: 20px;
		padding-bottom: 20px;
		margin: 0 auto;
	}
	
	.top {
		padding-left: 20px;
		background-color: #f4f4f4;
		line-height: 50px;
		margin-bottom: 20px;
	}
	
	.content {
		display: flex;
		justify-content: space-between;
	}
	
	.cont_left {
		width: 172px;
		height: 712px;
		border: 1px solid #e7e7e7;
	}
	
	.left_top {
		padding-left: 20px;
		font-size: 20px;
		line-height: 60px;
		border-bottom: 1px solid #e7e7e7;
	}
	
	.left_cont {
		padding-left: 20px;
	}
	
	dt {
		font-size: 18px;
		line-height: 40px;
		color: #666666;
	}
	
	dd {
		font-size: 14px;
		line-height: 30px;
		color: #a0a0a0;
	}
	
	.cont_right {
		width: 1084px;
		border: 1px solid #e7e7e7;
	}
	
	.right_top {
		width: 100%;
		padding-left: 20px;
		line-height: 56px;
		font-size: 20px;
		border-bottom: 1px solid #e7e7e7;
	}
	
	.right_cont {
		padding: 40px 20px;
	}
	
	h1 {
		text-align: center;
		color: green;
	}
	
	.dates {
		text-align: center;
		font-size: 15px;
		line-height: 50px;
	}
	
	.dates span {
		margin-left: 50px;
		margin-right: 50px;
	}
	
	p {
		font-size: 13px;
		line-height: 30px;
	}
	
	img {
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>