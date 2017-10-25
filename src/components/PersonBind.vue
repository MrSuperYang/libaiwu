<template>
	<!--Modifypassword.vue 修改密码-->
	<div class="Modifypassword">
		<div class="qcenter">
		
		<div class="qcenterright">
			<div class="qcenterrighthead">
			<div	><h4>修改密码</h4></div>	
			
			</div>
			
		<div>	<input type="text" name="" id="" placeholder="请输入手机号" class="phonenum_1"/> <span style="color:red;" class="yanzheng1">*&nbsp;手机号格式不正确</span></div>
		<div>	<input type="text"  placeholder="请输入密码(6-20位号码字符)" class="password1"/></div>
		<div>	<input type="text" placeholder="请再次输入密码确认" class="password2"/><span style="color:red;" class="yanzheng2">*&nbsp;两次密码不一致</span></div>
		<!---->
		<div style="display:flex;align-items:center;margin-top:14px;">	<input type="text" placeholder="验证码" style="width:116px;position:relative;top:-14px;" class="VerificationCode"/>   <img src="../pages/index/assets/vcode.jpg" alt="" />看不清在换一张<span style="color:red;" class="yanzheng3">*&nbsp;请重新输入</span></div>
		<div>	<input type="text" placeholder="手机验证码" class="VerificationCode2"/>
		<span style="display:inline-block;width:101px;height:37px;line-height:37px; font-size:18px;position:relative;background-color:#498e3d;text-align:center;left:-110px;color:white;top:3px;">获取验证码</span>
		</div>
			<div class="qcenterright-but">保存</div>
		</div>
		<div class="rcenterright">
			<span><img src="../pages/index/assets/check1343.jpg" alt="" /></span>
			恭喜您修改成功
		</div>
		
		</div>
	</div>
</template>

<script>
	export default {
  name: 'Modifypassword',
  mounted(){
  	$('.qcenterright-but').on('click',function() {
  			var phonenum_1=  $('.phonenum_1').val();
  			var password1=$('.password1').val();
  			var password2=$('.password2').val();
  			var VerificationCode=$('.VerificationCode').val();
  			var VerificationCode2=$('.VerificationCode2').val();
  			
  			
  	console.log( );
  	if(!(checkIsMobil(phonenum_1))){
  		
  	}
  	//手机号码
  	function checkIsMobil(s) {
    var patrn = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
    if (!patrn.exec(s)) return false
    return true
}
  	});
  
  }
}
</script>

<style scoped> 	div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{margin:0;padding:0;}
		ul,li{list-style-type:none;}
		h4{font-size:18px;}
			.qcenter{width:1280px;height:712px;margin:0 auto;background-color:white;position:relative;/*padding-top:38px;*/margin-left:25px;}
			.qcenterright{width:1086px;height:625px;border:1px solid lightgray;}
			.qcenterrighthead{height:60px;line-height:60px;position:relative;border-bottom:1px solid lightgray;}
			.qcenterrighthead div{padding-left:10px;}
			.qcenterright-but{width:151px;height:51px;background-color:#f08200;color:white;line-height:51px;font-size:20px;border-radius:5px;text-align:center;margin-top:40px;margin-left:40px;cursor:pointer;}
			.qcenter input{margin-top:30px;width:290px;height:44px;font-size:16px;padding-left:16px;margin-left:40px;}
			.rcenterright{position:absolute;width:455px;height:185px;top:260px;border-radius:15px;background-color:#d9d9d9;color:#f08200;right:200px;font-size:26px;display:flex;align-items: center;justify-content:center;display:none;}
			.yanzheng1{/*display:none;*/}
</style>