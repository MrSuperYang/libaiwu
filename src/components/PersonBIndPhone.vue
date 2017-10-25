<template>
	<div class="Bind-phone">
		<div class="qcenter">
			<div class="qcenterright">
				<div class="qcenterrighthead">
					<div>绑定手机</div>

				</div>

				<div> <input type="text" name="" id="" placeholder="请输入手机号" /></div>
				<div> <input type="text" placeholder="请输入密码(6-20位号码字符)" /></div>
				<div> <input type="text" placeholder="请再次输入密码确认" /></div>
				<!---->
				<div style="display:flex;align-items:center;margin-top:14px;"> <input type="text" placeholder="验证码" style="width:116px;position:relative;top:-14px;" /> <img src="img/vcode.jpg" alt="" />看不清在换一张</div>
				<div> <input type="text" placeholder="手机验证码" /></div>

				<div class="qcenterright-but">点击绑定</div>

			</div>
			<div class="rcenterright" style="">
				<span><img src="img/check1343.jpg" alt="" /></span> 恭喜您绑定成功
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Bind-phone',
	}
</script>
<style scoped>

	
	h4 {
		font-size: 18px;
	}
	
	.qcenter {
		width: 1086px;
		height: 712px;
		margin: 0 auto;
		background-color: white;
		position: relative;
		border: 1px solid lightgray;
	}
	
	
	
	
	
	
	
	.qcenterrighthead {
		height: 60px;
		line-height: 60px;
		position: relative;
		border-bottom: 1px solid lightgray;
	}
	
	.qcenterright-but {
		width: 151px;
		height: 51px;
		background-color: #f08200;
		color: white;
		line-height: 51px;
		font-size: 20px;
		border-radius: 5px;
		text-align: center;
		margin-top: 40px;
		margin-left: 40px;
	}
	
	.qcenter input {
		margin-top: 30px;
		width: 290px;
		height: 44px;
		font-size: 16px;
		padding-left: 16px;
		margin-left: 40px;
	}
	
	.rcenterright {
		position: absolute;
		width: 455px;
		height: 185px;
		top: 260px;
		border-radius: 15px;
		background-color: #d9d9d9;
		color: #f08200;
		right: 88px;
		font-size: 26px;
		display: flex;
		align-items: center;
		justify-content: center
	}
</style>