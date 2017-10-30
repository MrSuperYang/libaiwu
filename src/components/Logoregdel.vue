<template>
	<!--注册-->
	<div id="adl">
		<div class="bg">
			<div class="adl">
				<input type="text" class="adl1" placeholder="请输入手机号" v-model="Phone" @blur="a" />
				<p class="adla3"><span>{{msg}}</span></p>
				<input type="password" class="adl2" placeholder="请输入密码(6-20位号码字符)" v-model="Password" @blur="b" />
				<p class="adla3"><span>{{msg1}}</span></p>
				<input type="password" class="adl3" placeholder="请再次输入密码确认" v-model="Password1" @blur="c" />
				<p class="adla3"><span>{{msg2}}</span></p>
				<!--这里是验证码处的内容-->
				<div class="adla4">
					<input type="text" class="adl4" placeholder="验证码" v-model="yan" @blur="d" />
					<img src="../pages/index/assets/aimgb/验证码.jpg" alt="" />
					<span class="atex4">看不清换一张</span>
				</div>
				<p class="adla3"><span>{{msg3}}</span></p>
				<div class="adl5">
					<input type="text" placeholder="手机验证码" class="adl5a" v-model="zheng" />
					<button class="adl5b">获取验证码</button>
				</div>
				<p class="adla5">我已阅读并同意《礼拜五用户协议》 <span class="adla5a"></span></p>
				<div class="adla6">
					<button><router-link to="/logoin">登录</router-link></button>
					<button @click="Adduser()">会员注册</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'logoreg',
		data() {
			return {
				Phone: '',
				Password: '',
				Password1: '',
				yan: '',
				zheng: '',
				msg: '',
				msg1: '',
				msg2: '',
				msg3: ''
			}
		},
		methods: {
			Adduser() {
				var phone = this.Phone;
				var password = this.Password;
				var password1 = this.Password1;
				var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
				console.log(reg.test(phone));
				if(reg.test(phone) && ((password.length >= 6) && (password.length <= 18)) && (password == password1) && (this.yan === "xqcr") && (this.zheng.length == 6)) {
					this.$http.post('/api/user/adduser', {
						name: phone,
						phone: phone,
						password: password
					}, {}).then((response) => {
						console.log(response);
						this.$store.state.logoin = "您好" + phone;
						this.$store.state.logoreg = "退出";
						this.Phone = "";
						this.Password = "";
						this.Password1 = "";
						this.yan = "";
						this.zheng = "";
						this.$router.push({
							path: '/'
						});
					})
				}
			},
			a: function() {
				var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
				if(!reg.test(this.Phone)) {
					this.msg = "手机号码不正确,请重新输入";
				} else {
					var phone = this.Phone;
					this.$http.post('/api/user/search', {
						phone: phone,
					}, {}).then((response) => {
						console.log(response.data.length)
						if (response.data.length===0) {
							this.msg = "";
						} else{
							this.msg = "手机号码已注册,请重新输入";
						}
						
					})
				}
			},
			b: function() {
				if(this.Password.length <= 6 || this.Password.length >= 18) {
					this.msg1 = "密码不符合要求";
				}
			},
			c: function() {
				if((this.Password != this.Password1) || (this.Password.length <= 6) || (this.Password.length >= 18)) {
					this.msg2 = "两次密码输入不一致";
				}
			},
			d: function() {
				if(this.yan != "xqcr") {
					this.msg3 = "验证码输入错误";
				}
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
	
	.bg {
		width: 1920px;
		height: 500px;
		margin: 0 auto;
		margin-top: 38px;
		background-image: url(../pages/index/assets/shouye/1.jpg);
	}
	
	.adl {
		width: 308px;
		height: 470px;
		background-color: white;
		position: relative;
		left: 1212px;
		padding-left: 40px;
		padding-right: 40px;
		padding-top: 30px;
	}
	/*请输入手机号部分*/
	
	.adl1 {
		width: 305px;
		height: 40px;
		border: 1px solid #d3d3d3;
		font-size: 16px;
		text-indent: 12px;
	}
	/*手机号码不正确时,出现的红色警告部分css*/
	
	.adla3 {
		height: 30px;
		font-size: 13px;
		text-indent: 15px;
		line-height: 30px;
		color: red;
		/*display: none;*/
	}
	/*请输入密码确认*/
	
	.adl2 {
		width: 305px;
		height: 40px;
		border: 1px solid #d3d3d3;
		font-size: 16px;
		text-indent: 12px;
	}
	/*请再次输入密码确认*/
	
	.adl3 {
		width: 305px;
		height: 40px;
		border: 1px solid #d3d3d3;
		font-size: 16px;
		text-indent: 12px;
	}
	/*验证码处的css样式*/
	
	.adla4 {
		display: flex;
		justify-content: space-between;
	}
	
	.adl4 {
		width: 110px;
		height: 42px;
		border: 1px solid #d3d3d3;
		font-size: 16px;
		text-indent: 12px;
	}
	
	.atex4 {
		display: inline-block;
		font-size: 14px;
		color: #f08200;
		line-height: 44px;
	}
	/*此处是验证码下边的input框包裹button按钮*/
	
	.adl5 {
		width: 304px;
		height: 42px;
		border: 1px solid #d3d3d3;
		display: flex;
		justify-content: space-between;
	}
	
	.adl5a {
		font-size: 18px;
		text-indent: 18px;
		border: none;
	}
	
	.adl5b {
		width: 100px;
		height: 32px;
		margin-top: 5px;
		margin-right: 5px;
		font-size: 18px;
		border: none;
		color: white;
		background-color: #498e3d;
	}
	/*我已经阅读并同意礼拜五*/
	
	.adla5 {
		height: 18px;
		line-height: 18px;
		font-size: 16px;
		color: #b3b3b3;
		margin-top: 20px;
		text-indent: 20px;
		background-image: url(../pages/index/assets/aimgb/同意礼拜五图片.jpg);
		background-repeat: no-repeat;
		display: flex;
		justify-content: space-between;
	}
	
	.adla5a {
		width: 14px;
		height: 14px;
		border: 1px solid darkgray;
		border-radius: 50%;
	}
	/*登录,会员的两个按钮位置*/
	
	.adla6 {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	
	.adla6 button {
		width: 134px;
		height: 45px;
		border: none;
		border-radius: 5px;
		font-size: 18px;
		color: white;
	}
	
	.adla6 button:nth-child(1) {
		background-color: #f08200;
	}
	
	.adla6 button:nth-child(2) {
		background-color: #498e3d;
	}
	/*用合作网站登录*/
	
	h5 {
		margin-top: 14px;
		text-align: center;
		color: #666666;
	}
</style>