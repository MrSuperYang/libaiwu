<template>
	<div class="ww">
			<!--顶部信息-->			
				<div class="wwrapw">
					<!--<div class="wheader">
						<div class="wlogo">
							<img src="../pages/index/assets/chongzhi_pay/ylogo.jpg" alt="" />
						</div>
						<div class="wheader_right">
							<ul>
								<li>我的购物车</li>
								<li>></li>
								<li>确认信息订单</li>
								<li>></li>
								<li>订单提交成功</li>
							</ul>
						</div>
					</div>-->
					<!--订单已提交-->
					<div class="w_submit">
						<img src="../pages/index/assets/chongzhi_pay/zhifu_01.jpg" /><br />
						<em>订单已提交,请在24小时内完成支付</em><em>(订单逾期将被取消)</em>
					</div>
					<!--送货地址-->
					<div class="w_delivery">

						<div class="w_dingwei">
							<img src="../pages/index/assets/chongzhi_pay/zhifu_02.jpg" />
							<span>送货至 : 但小兵 北京市 仓平区 天通苑明天第一城4号楼101 固定电话 010-21541589</span>
						</div>
						<!--应付金额部分-->
						<div class="wamount">
							<!--左边-->
							<div class="wamount_left">
								<span>应付金额 : <i>165.90</i></span> <span>(在线支付)</span><br />
								<strong>支付平台</strong>
							</div>
							<!--右边-->
							<div class="wamount_right">
								<span>订单编号:123456789123</span>
							</div>
						</div>
						<!--付款方式-->
						<div class="wpayment">
							<input type="radio" checked=""  />
							<div class="chongzhi_money">								
								<img src="../pages/index/assets/chongzhi_pay/zhifu_03.jpg" />
							</div>
							
							<input type="radio"  class="pay_in"/>
							<div class="chongzhi_money">
								
								<img src="../pages/index/assets/chongzhi_pay/zhifu_04.jpg" />
							</div>
							<input type="radio" class="pay_in" />
							<div class="chongzhi_money">
								
								<img src="../pages/index/assets/chongzhi_pay/zhifu_05.jpg" /><span>银联支付</span>
							</div>
							<input type="radio" class="pay_in" />
							<div class="chongzhi_money1">
								
								<img src="../pages/index/assets/chongzhi_pay/zhifu_06.jpg" /><span>余额支付( ¥500 )</span>
							</div>
						</div>
						<!--扫码支付-->
						
							<div class="wzhifu_bao">															
								<div class="zhifubao_left">
									<span>使用电脑支付</span>
									<img src="../pages/index/assets/chongzhi_pay/zhifu_pay01.jpg"/>
									<button class="zhifu_pay">立即支付</button>
								</div>
								<strong>或</strong>
								<div class="zhifubao_right">
									<span>使用支付宝钱包扫一扫付款</span>
									<img src="../pages/index/assets/chongzhi_pay/zhifu_pay02.jpg"/>
								</div>
							</div>
							<div class="wzhifu_weixin">
								
								<img src="../pages/index/assets/chongzhi_pay/zhifu_pay03.jpg" class="saoyisao">
								<div class="weixin">
									<span>使用微信扫一扫付款</span>
									<img src="../pages/index/assets/chongzhi_pay/zhifu_pay04.jpg"/>
								</div>								
							</div>
					</div>
				</div>
		</div>
</template>

<script>
	export default {
		//充值成功页面
    name: "rechargeok"   
    }
</script>

<style scoped="scoped">
	html, body, div, span,
	h1, h2, p,  img, 
	small,  strong,  i, 
	dl, dt, dd, ol, ul, li,em {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
}
a{text-decoration: none;}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
a{text-decoration:none}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
		.ww {
				width: 1280px;
				margin: 0 auto;
			}
			
			.wwrapw {
				width: 1280px;
				margin: 0 auto;
				margin-top: 20px;
			}			
			.wheader {
				display: flex;
				justify-content: space-between;
				height: 72px;
			}			
			.wheader_right {
				overflow: hidden;
			}			
			.wheader_right li {
				float: left;
				margin-right: 40px;
				margin-top: 50px;
				font-size: 18px;
			}		
			.wheader_right li:nth-child(5) {
				color: rgb(247, 131, 49);
			}			
			.wheader_right li:nth-child(5) {
				margin-right: 0px;
			}
			.w_submit {
				margin-left: 320px;
				margin-top: 100px;
				text-align: center;
				width: 600px;
			}
			
			.w_submit em {
				font-size: 22px;
				color: rgb(140, 140, 140);
				display: inline-block;
				margin-top: 50px;
			}
			
			.w_submit em:nth-of-type(2) {
				color: rgb(247, 131, 39);
				padding-left: 10px;
			}
			/*支付净额.信息*/
			.w_dingwei {
				background: rgb(243, 255, 243);
				height: 40px;
				border-bottom: 1px solid #DCDCDC;
				border-top: 1px solid #DCDCDC;
				line-height: 40px;
				color: rgb(140, 140, 140);
				margin-top: 50px;
			}
			
			.wamount {
				overflow: hidden;
				margin-top: 30px;
				border-bottom: 1px solid #DCDCDC;
			}
			
			.wamount_left {
				width: 350px;
				float: left;
				height: 90px;
				font-size: 20px;
				color: rgb(140, 140, 140);
			}			
			.wamount_left strong {
				display: inline-block;
				padding-top: 20px;
			}
			
			.wamount_left i {
				color: red;
				font-size: 30px;
			}
			
			.wamount_left span:nth-child(2) {
				padding-left: 15px;
			}
			
			.wamount_right {
				float: right;
				margin-top: 20px;
				color: rgb(140, 140, 140);
			}			
			/*支付工具图标*/
			.wpayment {
				margin-top: 25px;
				overflow: hidden;
			}
			.chongzhi_money{
				float: left;
				width: 136px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				border: 1px solid #666666;
			}
			.chongzhi_money1{
				float: left;
				width: 190px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				border: 1px solid #dadada;
			}		
			.wpayment input {
				margin-top: 15px;
				margin-right: 13px;				
				float: left;
			}
			.pay_in{margin-left: 38px;}
			.wpayment input:nth-child(2){
				margin-left: 38px;
			}
			.wpayment img {
				vertical-align: middle;
			}
			/*支付方式*/					
			.wzhifu_bao{
				width: 1280px;
				height: 395px;
				margin: 30px auto;
				border: 1px solid #e8e8e8;
				overflow: hidden;
			}
			.wzhifu_bao span{
				display: inline-block;
				margin-top: 60px;
				font-size: 20px;
				color: #838383;
				padding-bottom: 40px;
			}
			.wzhifu_bao strong{
				display: inline-block;
				margin-top: 170px;
				margin-left: 130px;
				font-size: 20px;
				color: #838383;
				float: left;
			}
			.zhifubao_left{
				width: 200px;
				height: 350px;		
				text-align: center;
				float: left;
				left: 20px;
				margin-left: 280px;
			}				
			.zhifubao_right{
				width: 260px;
				height: 350px;		
				text-align: center;
				float: left;
				margin-left: 150px;
			}			
			.zhifubao_left	 button {
				width: 170px;
				height: 44px;
				font-size: 20px;
				color: white;
				margin-top: 35px;
				background: rgb(247, 131, 39);
				border-radius: 5px;
				outline: none;
				border: none;
			}
			.wzhifu_weixin{
				width: 1280px;
				height: 395px;
				margin: 40px auto;
				overflow: hidden;
				border: 1px solid #e8e8e8;
			}
			.saoyisao{
				margin-left: 260px;
				margin-top: 50px;
				float: left;
			}
			.weixin{
				width: 260px;
				height: 350px;		
				text-align: center;
				float: left;			
				margin-left: 310px;
			}
			.weixin span{
				display: inline-block;
				margin-top: 60px;
				font-size: 20px;
				color: #838383;
				padding-bottom: 40px;
			}
</style>