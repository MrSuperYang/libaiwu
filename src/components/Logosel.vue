<template>
	<div id="adl">
		<div class="bg">
			<div class="adl">
				<div>
					<h2>重置密码</h2>
				</div>

				<input type="text" class="adl1" placeholder="请输入手机号" v-model="Phone" @blur="a" />

				<p class="adla3">{{msg}}</p>

				<!--这里是验证码处的内容-->
				<div class="adla4">
					<input type="text" class="adl4" placeholder="验证码" v-model="yan" />
					<img src="../pages/index/assets/aimgb/验证码.jpg" alt="" />
					<span class="atex4">看不清换一张</span>
				</div>
				<p class="adla3">{{msg1}}</p>
				<input type="text" class="adl2" placeholder="请输入密码(6-20位号码字符)" v-model="Password" />
				<p class="adla3">{{msg2}}</p>
				<input type="text" class="adl3" placeholder="请再次输入密码" v-model="Password1" />
				<p class="adla3">{{msg3}}</p>

				<div class="adl5">
					<input type="text" placeholder="手机验证码" class="adl5a" v-model="zheng" />
					<button class="adl5b">获取验证码</button>
				</div>
				<button class="adl6" @click="btn">提交</button>

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
			btn() {
				var phone = this.Phone;
				var password = this.Password;
				var password1 = this.Password1;
				var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
				if(reg.test(phone) && ((password.length >= 6) && (password.length <= 18)) && (password == password1) && (this.yan == "xqcr") && (this.zheng.length == 6)) {
					this.$http.post('/api/user/move', {
						phone: phone,
						password: password,
					}, {}).then((response) => {
						if(response.data.length === 0) {
							this.msg = "手机号码未注册,请重新输入";
						} else {
							this.msg = "";
							this.Phone = "";
							this.Password = "";
							this.Password1 = "";
							this.yan = "";
							this.zheng = "";
							this.$router.push({
								path: '/logoin'
							});
						}

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
						console.log(response)
						if(response.data.length === 0) {
							this.msg = "手机号码未注册,请重新输入";
						} else {
							this.msg = "";
						}

					})
				}
			}
		}
	}
</script>

<style scoped="scoped">
	input,
	button {
		outline: none;
	}
	
	.bg {
		width: 1920px;
		height: 500px;
		margin: 0 auto;
		margin-top: 38px;
		background-image: url(../pages/index/assets/aimgb/adelu.jpg);
	}
	
	.adl {
		width: 308px;
		height: 470px;
		background-color: white;
		position: relative;
		left: 1212px;
		padding-left: 40px;
		padding-right: 40px;
		padding-top: 20px;
	}
	/*重置密码部分*/
	
	.adl h2 {
		color: #666666;
	}
	
	.adl div:nth-child(1) {
		display: flex;
		justify-content: space-between;
	}
	
	.adl div a {
		padding-top: 7px;
	}
	
	.adl1 {
		width: 305px;
		height: 40px;
		border: 1px solid #d3d3d3;
		font-size: 16px;
		text-indent: 12px;
		margin-top: 16px;
	}
	/*手机号码不正确时,出现的红色警告部分css*/
	
	.adla3 {
		height: 30px;
		font-size: 13px;
		text-indent: 15px;
		line-height: 30px;
		color: red;
		background-image: url(../pages/index/assets/aimgb/叹号.jpg);
		background-repeat: no-repeat;
		/*display: none;*/
	}
	/*请输入密码部分位置*/
	
	.adl2 {
		width: 305px;
		height: 40px;
		border: 1px solid #d3d3d3;
		font-size: 16px;
		text-indent: 12px;
	}
	
	.adl3 {
		width: 305px;
		height: 40px;
		/*margin-top: 30px;*/
		border: 1px solid #d3d3d3;
		font-size: 16px;
		text-indent: 12px;
	}
	/*验证码处的css样式*/
	
	.adla4 {
		display: flex;
		justify-content: space-between;
		/*margin-top: 28px;*/
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
	/*提交部分*/
	
	.adl6 {
		width: 307px;
		height: 45px;
		margin-top: 20px;
		text-align: center;
		line-height: 45px;
		font-size: 20px;
		color: white;
		background-color: #f08200;
		border: none;
	}
</style>