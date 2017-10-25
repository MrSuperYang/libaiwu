<template>
	<!--我的账户-->
	<div class="myaccount">

		<div class="qcenterright_1ue">
			<div class="qwdzh_header_2ei">
				<span><!--<img src="../pages/index/assets/guo87.png" alt="" />--></span>
				<span>您好&nbsp;,&nbsp;</span>
				<span>136****2356</span>
				<span>
						<div>当前积分</div>
						<div>124</div>
					</span>
				<span>
						<div>我的钱包</div>
						<div>¥1222.0</div>
					</span>
				<span>
						<div style="color:#4b943d;">充值有礼>></div>
						<div>
							<router-link to="/person/Prepaidcardexchange">
							充值卡兑换>>
							</router-link>
						</div>
				</span>
			</div>
			<div class="qwdzh_center_3qq">
				<img src="../pages/index/assets/wdzz_tu.jpg" alt="" />
			</div>

		</div>

	</div>

</template>

<script>
	export default {
		name: 'myaccount',
	}
</script>

<style scoped>
	h4 {
		font-size: 18px;
	}
	
	.qcenterright_1ue {
		width: 1086px;
		height: 625px;
		border: 1px solid lightgray;
		/*position: absolute;*/
	}
	
	.qwdzh_header_2ei {
		width: 1086px;
		height: 222px;
		border: 1px solid lightgray;
		background-color: #f4fff2;
		display: flex;
		align-items: center;
		font-size: 16px;
		margin-bottom: 20px;
	}
	
	.qwdzh_header_2ei span {
		display: inline-block;
	}
	
	.qwdzh_header_2ei span:nth-child(1) {
		margin-left: 42px;
	}
	
	.qwdzh_header_2ei span:nth-child(2) {
		margin-left: 42px;
	}
	
	.qwdzh_header_2ei span:nth-child(3) {
		margin-left: 42px;
		color: #e96942;
	}
	
	.qwdzh_header_2ei span:nth-child(4) {
		margin-left: 220px;
	}
	
	.qwdzh_header_2ei span:nth-child(5) {
		margin-left: 84px;
	}
	
	.qwdzh_header_2ei span:nth-child(6) {
		margin-left: 84px;
	}
	
	.qwdzh_header_2ei div:nth-child(1) {
		margin-bottom: 17px;
	}
	
	.qwdzh_header_2ei div:nth-child(2) {
		margin-top: 17px;
		color: #e96942;
	}
</style>