<template>
	<div class="Changetobindmobilephone3">
		<div class="qcenterright">
			<div class="qcenterrighthead">
				<div>换绑手机</div>
				<!--center-->
				<div class="qcenterrightcenter">
					<span>1.验证原手机号</span>
					<span>2.验证新手机号</span>
					<span>3.换绑成功</span>
					<div>
						<input type="" name="" id="" value="15098563256" />
					</div>
					<div>
						<input type="text" placeholder="验证码" style="width:114px;height:44px;margin-right:15px;" />
						<div style="display:inline-block;width:20px;height:20px;border:1px solid red;margin-right:15px;"></div>
						<div style="display: inline-block;color:#f1925d;font-size:14px;">看不清换一张</div>
					</div>
					<div>
						<input type="text" placeholder="输入密码验证身份" />
						<div class="qcenterright-hqyzm">获取验证码</div>
					</div>
					<div class="qcenterright-but">提交验证</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Changetobindmobilephone3'
	}
</script>

<style scoped>
	h4 {
		font-size: 18px;
	}
	
	.qcenterright {
		width: 1086px;
		height: 625px;
		border: 1px solid lightgray;
	}
	
	.qcenterrighthead {
		height: 60px;
		line-height: 60px;
		position: relative;
		border-bottom: 1px solid lightgray;
	}
	
	.qcenterrighthead {
		padding-left: 22px;
	}
	
	.qcenterrightcenter {
		margin-top: 40px;
		margin-left: 20px;
	}
	
	.qcenterrightcenter span:nth-child(1) {
		display: inline-block;
		width: 245px;
		height: 42px;
		background: url(img/jiantou1png.png);
		text-align: center;
		line-height: 42px;
	}
	
	.qcenterrightcenter span:nth-child(2) {
		display: inline-block;
		width: 246px;
		height: 42px;
		background: url(img/jiantou1png.png);
		text-align: center;
		line-height: 42px;
	}
	
	.qcenterrightcenter span:nth-child(3) {
		display: inline-block;
		width: 245px;
		height: 42px;
		background: url(img/jiantouping.png);
		color: white;
		text-align: center;
		line-height: 42px;
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
		margin-top: 30px;
	}
	
	.qcenterrightcenter input {
		width: 308px;
		height: 44px;
		font-size: 16px;
		padding-left: 10px;
		margin-top: 20px;
	}
	
	.qcenterright-hqyzm {
		display: inline-block;
		width: 100px;
		height: 32px;
		background-color: #498e3d;
		text-align: center;
		line-height: 32px;
		position: relative;
		color: white;
		left: -110px;
	}
</style>