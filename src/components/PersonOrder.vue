<template>
	<!--我的订单不为空-->
	<div class="Myorder">
		<div class="qcenterright">
			<div class="qcenterrighthead">
				<h4>我的订单</h4>
			</div>
			<div class="swddd_heads96">
				<!--105  125-->
				<a href=""><span class="rwddd_header931">全部</span></a>
				<div>|</div>
				<span class="rwddd_header932">待付款</span>
				<div>|</div>
				<span class="rwddd_header933">待发货</span>
				<div>|</div>
				<span class="rwddd_header934">待收货</span>
				<div>|</div>
				<span class="rwddd_header935">待评价</span>
				<div>|</div>
				<span class="rwddd_header936">退款/售后</span>
				<div>|</div>
				<span class="rwddd_header937">已完成/关闭</span>
				<span class="rwddd_header938">订单回收站</span>

			</div>

			<div class="rwddd-center1149">
				<div class="rjfdd_center0532_head">
					<span>订单号&nbsp;:&nbsp;123465789123</span>
					<span>下单日期&nbsp;:&nbsp;2017.10.21&nbsp;10:56:04</span>
					<span>爱月亮点点</span>
					<span>订单状态&nbsp;:&nbsp;</span>
					<span style="color:#f08200;">已完成</span>
				</div>
				<!--用浮动,几大块,中间用弹性盒子,后面是时间随机数-->
				<div class="swddd_center11501">
					<span></span>
					<span>云南邵通丑苹果</span>
					<span>6个装</span>
					<span>¥35.0x1</span>
				</div>
				<div class="swddd_center11501">
					<span></span>
					<span>云南邵通丑苹果</span>
					<span>6个装</span>
					<span>¥35.0x1</span>
				</div>
				<div class="swddd_center11503">
					<span>店铺合计&nbsp;:&nbsp;¥105.0</span>
					<span>(含运费&nbsp;:&nbsp;¥8.0)</span>
				</div>
				<div class="swddd_center11504">
					<span>查看详情</span>
					<span>去支付</span>
					<span>取消订单</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Myorder'
	}
</script>

<style scoped>
div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{margin:0;padding:0;}
		ul,li{list-style-type:none;}
		h4{font-size:18px;}		
		.qcenterright{width:1086px;height:625px;border:1px solid lightgray;/*position:absolute;right:0;*/}
		.qcenterrighthead{height:60px;line-height:60px;position:relative;border-bottom:1px solid lightgray;}
			.qcenterrighthead h4{display:inline-block;width:200px;height:60px;text-indent:20px;}
			.swddd_heads96{margin-top:22px;}
			.rwddd_header931{background-color:#f08200;color:white;cursor:pointer;}
			.swddd_heads96 span{ display:inline-block;/*width:80px;*/height:29px;padding:0 15px;line-height:29px;font-size:14px;}
			.swddd_heads96 span:hover{background-color:#f08200;color:white;cursor:pointer;}
			.swddd_heads96 div{ display:inline-block;height:29px;padding:0 15px;line-height:29px;font-size:14px;}
			.rwddd_header931{margin-left:24px;}
			.rwddd_header938{margin-left:116px;color:#dbead8;}
		.rwddd-center1149{width:1046px;height:288px;border:1px solid lightgray;margin-top:22px;margin-left:22px;}
		.rjfdd_center0532_head{background-color:#f2f2f2;width:1046px;height:48px;}
		.rjfdd_center0532_head span{line-height:48px;}
		.rjfdd_center0532_head span:nth-child(1){margin-left:22px;}
		.rjfdd_center0532_head span:nth-child(2){margin-left:51px;}
		.rjfdd_center0532_head span:nth-child(3){margin-left:52px;color:#bad3b6;}
		.rjfdd_center0532_head span:nth-child(4){margin-left:267px;}
		.swddd_center11501{display:inline-block;width:700px;height:118px;border-top:1px solid lightgray;float:left;border-right:1px solid lightgray;float:left;display:flex;align-items:center;}
		.swddd_center11501 span:nth-child(1){display:inline-block;width:80px;height:80px;border:1px solid lightgray;margin-left:21px;}
		.swddd_center11501 span:nth-child(2){margin-left:22px;}
		.swddd_center11501 span:nth-child(3){margin-left:152px;color:#a7a7a7;}
		.swddd_center11501 span:nth-child(4){margin-left:113px;}
		.swddd_center11503{display:inline-block;width:209px;height:241px;border-right:1px solid lightgray;text-align:center;}
		.swddd_center11503 span:nth-child(1){display:block;margin-top:90px;}
		.swddd_center11503 span:nth-child(2){display:block;margin-top:18px;}
		.swddd_center11504{display:inline-block;text-align:center;width:128px;height:241px;}
		.swddd_center11504 span:nth-child(1){display:block;}
		.swddd_center11504 span:nth-child(2){display:inline-block;width:90px;height:30px;background-color:#f08200;color:white;text-align:center;line-height:30px;border-radius:4px;margin-top:10px;}
		.swddd_center11504 span:nth-child(3){display:inline-block;width:90px;height:30px;background-color:#999999;color:white;text-align:center;line-height:30px;border-radius:4px;margin-top:10px;}
</style>