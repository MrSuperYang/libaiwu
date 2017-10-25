<template>

			<div class="qcenterright">
				<div class="qcenterrighthead">
					<h4>充值卡兑换</h4>
					<span>查看账单</span>
				</div>

				<input type="text" placeholder="请输入充值卡兑换码进行充值" />
				<div class="qcenterright-but">充值</div>

			</div>



</template>

<script>
	export default {
		name: 'Prepaid_card_exchange',
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
	
	.qcenterrighthead h4 {
		display: inline-block;
		width: 200px;
		height: 60px;
		text-indent: 20px;
	}
	
	.qcenterrighthead span {
		display: inline-block;
		width: 90px;
		height: 30px;
		position: absolute;
		text-align: center;
		background-color: #498e3d;
		color: white;
		line-height: 30px;
		border-radius: 3px;
		top: 15px;
		right: 21px;
	}
	
	.qcenterright input {
		width: 470px;
		height: 53px;
		margin-left: 34px;
		margin-top: 52px;
		font-size: 16px;
		padding-left: 7px;
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
		margin-top: 102px;
		margin-left: 33px;
	}
</style>