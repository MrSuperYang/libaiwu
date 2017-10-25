<template>
	<div id="two">
		<hr />
		<div class="footer">
			<ul>
				<li>
					<img src="../pages/index/assets/精选特惠.jpg" alt="" />
					<span>礼拜五特惠</span>
				</li>
				<li class="bor">
					<img src="../pages/index/assets/正品保障.jpg" alt="" />
					<span>优先保障</span>
				</li>
				<li class="bor">
					<img src="../pages/index/assets/全面监控.jpg" alt="" />
					<span>全程监控</span>
				</li>
				<li class="bor">
					<img src="../pages/index/assets/直供.jpg" alt="" />
					<span>基地直供</span>
				</li>
				<li class="bor">
					<img src="../pages/index/assets/准时.jpg" alt="" />
					<span>准时达</span>
				</li>
			</ul>
			<hr />
			<div class="ifooter">
				<div class="ifooter_banner">
					<img src="../pages/index/assets/logo.jpg" alt="" />
					<p>
						服务时间 : 08:00 - 22:00
						<span>
							<img src="../pages/index/assets/dianhua.jpg" alt="" />
							<span>400 - 800 - 8820</span>
						</span>
					</p>
				</div>
				<div class="code">
					<div class="code_i">
						<img src="../pages/index/assets/图层38.jpg" alt="" />
						<p>礼拜五官方微信</p>
					</div>
					<div class="code_i">
						<img src="../pages/index/assets/图层38.jpg" alt="" />
						<p>礼拜五APP</p>
					</div>
				</div>
				<div class="list">
					<dl>
						<dt class="specil">关于礼拜五</dt>
						<dt>新用户注册</dt>
						<dt>在线下单</dt>
						<dt>支付方式</dt>
					</dl>
					<dl>
						<dt class="specil">关于礼拜五</dt>
						<dt>新用户注册</dt>
						<dt>在线下单</dt>
						<dt>支付方式</dt>
					</dl>
					<dl>
						<dt class="specil">关于礼拜五</dt>
						<dt>新用户注册</dt>
						<dt>在线下单</dt>
						<dt>支付方式</dt>
					</dl>
					<dl>
						<dt class="specil">关于礼拜五</dt>
						<dt>新用户注册</dt>
						<dt>在线下单</dt>
						<dt>支付方式</dt>
					</dl>
				</div>
			</div>
			<hr />
			<div class="footer_foot">
				<p>版权所有©礼拜五 保留所有权利 | 沪ICP备1204216</p>
				<p class="font">礼拜五  纵向品质</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'two',
		data() {
			return {
				msg: 'I am two'
			}
		}
	}
</script>

<style scoped>
	div,
	p,
	span,
	ul,
	li,
	img,
	a,
	hr {
		margin: 0;
		padding: 0;
		/*font-family: '微软雅黑';*/
	}
	
	ul,
	li {
		list-style: none;
	}
	
	ul,
	li,
	p {
		display: inline-block;
	}
	
	.footer ul {
		display: flex;
		width: 1280px;
		margin: 0 auto;
		justify-content: space-between;
		text-align: center;
		margin-bottom: 22px;
	}
	
	.footer {
		padding-top: 22px;
	}
	
	.footer ul li {
		width: 256px;
		line-height: 60px;
		font-size: 25px;
	}
	
	.footer ul li img {
		vertical-align: middle;
	}
	
	.bor {
		border-left: 1px solid gainsboro;
	}
	
	.ifooter {
		display: flex;
		justify-content: space-between;
		width: 1280px;
		margin: 0 auto;
		margin-top: 20px;
		margin-bottom: 10px;
	}
	
	.ifooter_banner {
		padding-left: 20px;
	}
	
	.ifooter_banner img {
		margin-bottom: 20px;
	}
	
	.ifooter_banner p {
		text-align: center;
		display: block;
		margin-top: 10px;
		width: 370px;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
	}
	
	.ifooter_banner p img {
		vertical-align: middle;
	}
	
	.code {
		width: 300px;
		display: flex;
		justify-content: space-between;
		text-align: center;
	}
	
	.code_i {
		width: 130px;
	}
	
	.list {
		width: 500px;
		display: flex;
		justify-content: space-between;
		color: darkgray;
		font-size: 14px;
		line-height: 28px;
	}
	
	.specil {
		font-size: 17px;
		margin-top: 10px;
		color: black;
		margin-bottom: 15px;
	}
	.footer_foot{
		height: 83px;
		margin-top: 10px;
	}
	.footer_foot p {
		display: block;
		text-align: center;
		line-height: 25px;
		font-size: 14px;
		
	}
	.font{
		color: orange;
	}
</style>