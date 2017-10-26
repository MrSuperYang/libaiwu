<template>
	<div class="login_table">
		<div class="login_mainbox" v-show="!show">
			<p class="login_title"><span>登录</span><span><a href="javascript:void(0)" v-on:click="shows()">账号密码登录</a></span><img src="../pages/index/assets/login/login_icon.jpg" alt="" /></p>
			<ul>
				<li class="phone_reg">
					<input type="text" name="" id="getTel" value="" placeholder="请输入手机号" v-model="Phone"/>
					<div>
						<p v-show="phone"><span>!</span><span>{{msg}}</span></p>
					</div>
				</li>
				<li class="verify_reg phone_reg">
					<input type="text" name="" id="verify_num" value="" placeholder="验证码" />
					<a href="###"><img src="../pages/index/assets/login/verify.jpg" alt="" /></a>
					<a href="###"><span>看不清换一张</span></a>
					<div>
						<p v-show="verify"><span>!</span><span>{{msg}}</span></p>
					</div>
				</li>
				<li class="phone_verify">
					<input type="text" name="" id="getVerify" value="" placeholder="手机验证码" />
					<span>获取验证码</span>
				</li>
				<li class="login_choose">
					<input type="checkbox" id="autoLogin" /><label>自动登录</label>
					<a href="/logosel">忘记密码?</a>
				</li>
				<li class="chooseBtn">
					<button id="login">登录</button>
					<button id="register">会员注册</button>
				</li>
				<li class="login_hint">
					<p>提示:未注册用户将直接注册成为礼拜五用户</p>
					<p><span>---------------</span><span>用合作网站登录</span><span>---------------</span></p>
					<p>
						<img src="../pages/index/assets/login/login_weixinicon.jpg" alt="" /><img src="../pages/index/assets/login/login_qqicon.jpg" alt="" /></p>
				</li>
			</ul>
		</div>
		<div class="login_mainbox" v-show="show">
			<p class="login_title"><span>登录</span><span><a href="javascript:void(0)" v-on:click="shows()">手机验证登录</a></span>
				<img src="../pages/index/assets/login/phone_icon.png" alt="" /></p>
			<ul>
				<li class="phone_reg">
					<input type="text" name="" id="getTel" value="" placeholder="请输入手机号" v-model="Phone"/>
					<div>
						<p v-show="phone"><span>!</span><span>{{msg}}</span></p>
					</div>
				</li>
				<li class="phone_reg num">
					<input type="text" name="" id="getVerify" value="" placeholder="密码" v-model="password"/>
					<div>
						<p v-show="verify"><span>!</span><span>{{msg}}</span></p>
					</div>
				</li>
				<li class="verify_reg phone_reg">
					<input type="text" name="" id="verify_num" value="" placeholder="验证码" v-model="yan"/>
					<a href="###">
						<img src="../pages/index/assets/login/verify.jpg" alt="" /></a>
					<a href="###"><span>看不清换一张</span></a>
					<div><p v-show="verify"><span>!</span><span>{{msg}}</span></p></div>
				</li>

				<li class="login_choose">
					<input type="checkbox" id="autoLogin" /><label>自动登录</label>
					<a href="/logosel">忘记密码?</a>
				</li>
				<li class="chooseBtn">
					<button id="login">登录</button>
					<button id="register">会员注册</button>
				</li>
				<li class="login_hint">
					<p>提示:未注册用户将直接注册成为礼拜五用户</p>
					<p><span>---------------</span><span>用合作网站登录</span><span>---------------</span></p>
					<p>
						<img src="../pages/index/assets/login/login_weixinicon.jpg" alt="" /><img src="../pages/index/assets/login/login_qqicon.jpg" alt="" /></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name: 'logintable',
		data() {
			return {
				msg: '3333',
				phone: true,
				verify: true,
				show: true,
				Phone: '',
				password: '',
				yan:'',
				
			}
		},
		methods: {
			shows: function() {
				this.show = !this.show;
			},
			contrast:function () {
				var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
				var phone = this.Phone;
				var password = this.Password;
				if(reg.test(phone) && ((password.length >= 6) && (password.length <= 18)) && (this.yan.length == 4)) {
					this.$http.post('/api/user/adduser', {
						phone: phone,
						password: password
					}, {}).then((response) => {
						console.log(response);
					})
				} else {
					
				}
			}
		}
	}
</script>

<style>
	/* 登录框 */
	
	.login_main .login_table {
		float: right;
		margin-right: 320px;
		background-color: white;
		border-top: 1px solid #eae9e9;
	}
	
	.login_table .login_mainbox {
		padding: 30px 40px 20px;
	}
	/*登录标题*/
	
	.login_mainbox .login_title {}
	
	.login_title span {
		vertical-align: middle;
	}
	
	.login_title span:nth-child(1) {
		float: left;
		margin-right: 142px;
		font-size: 1.375rem;
		color: #666666;
	}
	
	.login_title span:nth-child(2) {
		float: left;
		font-size: 1rem;
		color: #498e3d;
		margin-right: 5px;
	}
	
	.login_title span a {
		color: #498e3d;
	}
	
	.login_title span img {
		vertical-align: baseline;
		float: right;
	}
	/*登录input*/
	
	.login_mainbox ul {
		margin-top: 13px;
	}
	
	.login_mainbox ul li input {
		width: 306px;
		border: 1px solid #d3d3d3;
		height: 44px;
		font-size: 0.9375rem;
		color: #999999;
		padding-left: 13px;
		background-color: #f9f9f9;
	}
	
	.phone_reg div {
		/*height: 30px;*/
	}
	
	.phone_reg p span {
		color: #db2630;
		vertical-align: middle;
		font-size: 0.6875rem;
	}
	
	.phone_reg p span:nth-child(1) {
		display: inline-block;
		width: 12px;
		height: 12px;
		line-height: 12px;
		border-radius: 50%;
		background-color: #db2630;
		color: #fff;
		text-align: center;
		font-size: 0.4375rem;
		margin-right: 5px;
	}
	
	.login_mainbox ul .verify_reg {
		margin-top: 0px;
	}
	
	.verify_reg #verify_num {
		width: 113px;
		height: 44px;
		border: 1px solid #d3d3d3;
		font-size: 0.9375rem;
		color: #999999;
		padding-left: 13px;
		background-color: #f9f9f9;
	}
	
	.verify_reg img {
		vertical-align: middle;
		margin-left: 20px;
	}
	
	.verify_reg a span {
		margin-left: 10px;
		font-size: 0.8165rem;
		color: #f08200;
	}
	
	.login_mainbox ul .phone_verify #getVerify {
		width: 306px;
		height: 44px;
		background-color: #f9f9f9;
		font-size: 0.9375rem;
		color: #999999;
		padding-left: 13px;
	}
	
	.login_mainbox ul .phone_verify {
		position: relative;
		height: 44px;
		margin-top: 9px;
		padding-bottom: 0px;
	}
	
	.phone_verify span {
		position: absolute;
		top: 4px;
		right: 2px;
		display: inline-block;
		padding: 9px 14px;
		background-color: #498e3d;
		color: white;
	}
	
	.login_mainbox ul .login_choose {
		margin-top: 20px;
		overflow: hidden;
	}
	
	.login_choose #autoLogin {
		width: 14px;
		height: 14px;
		border: 1px solid #d3d3d3;
		margin-right: 10px;
		background-color: #498e3d;
	}
	
	.login_choose label {
		font-size: 0.875rem;
		color: #8c8c8c;
	}
	
	.login_choose a {
		float: right;
		font-size: 0.875rem;
		color: #f4a140;
		text-decoration: underline;
	}
	/*按钮*/
	
	.login_mainbox ul .chooseBtn {
		margin-top: 19px;
		overflow: hidden;
	}
	
	.chooseBtn #login,
	.chooseBtn #register {
		border: none;
		width: 133px;
		line-height: 45px;
		background-color: #f08200;
		color: white;
		font-size: 1.0625rem;
		border-radius: 4px;
	}
	
	.chooseBtn #register {
		float: right;
	}
	
	.login_mainbox ul .login_hint {
		text-align: center;
		font-size: 0.875rem;
		color: #8c8c8c;
		margin-top: 15px;
	}
	
	.login_hint p:nth-child(2) {
		margin-top: 10px;
	}
	
	.login_hint p span:nth-child(2) {
		color: #666666;
		padding-left: 10px;
		padding-right: 10px;
	}
	
	.login_hint p:nth-child(3) {
		margin-top: 18px;
		/*padding-bottom: 20px;*/
	}
	
	.login_hint p img:nth-child(2) {
		margin-left: 18px;
	}
</style>