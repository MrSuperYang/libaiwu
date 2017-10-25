<template>
	<div class="Integralorder">
			<div class="qcenterright17">
			<div class="qcenterrighthead17">
			<h4>订单积分</h4>	
			<div  class="qcenterrighthead17-right">
				<span>订单状态&nbsp;:&nbsp;</span>
			<span style="color:#f08200;">240</span>
			</div>
			
			</div>
			
		<!--一个组件-->
	<div class="rjfdd-center053">
		<div class="rjfdd_center053_head">
			<span>订单号&nbsp;:&nbsp;123465789123</span>
			<span>下单日期&nbsp;:&nbsp;2017.10.21&nbsp;10:56:04</span>
			<span>订单状态&nbsp;:&nbsp;</span>
			<span style="color:#f08200;">已完成</span>
		</div>
		<div class="rjfdd_center053_center">
			<span></span>
			<span>天上的大月亮</span>
			<span>一个装</span>
			<span>x1</span>
			<span>积分:1e</span>
			<span class="sljfdd_center053_span115"> 
			<div class="rjfdd_center053_span115">查看详情</div>
			<div class="rjfdd_center053_span116">删除订单</div>
			</span>
			
		</div>
		
	</div>
	
		</div>
	</div>
</template>

<script>
	export default {
  name: 'Integralorder'
}
</script>

<style scoped>
	
		h4{font-size:18px;}		
		.qcenterright17{width:1086px;height:625px;border:1px solid lightgray;}
		.qcenterrighthead17{height:60px;line-height:60px;position:relative;border-bottom:1px solid lightgray;}
			.qcenterrighthead17 h4{display:inline-block;width:200px;height:60px;text-indent:20px;}
			.qcenterrighthead17-right{position:absolute;right:23px;display:inline-table;}
			.rjfdd-center053{width:1045px;height:167px;border:1px solid lightgray;margin-top:22px;margin-left:22px;}
		.rjfdd_center053_head{background-color:#f2f2f2;width:1046px;height:48px;}
		.rjfdd_center053_head span{line-height:48px;}
		.rjfdd_center053_head span:nth-child(1){margin-left:22px;}
		.rjfdd_center053_head span:nth-child(2){margin-left:140px;}
		.rjfdd_center053_head span:nth-child(3){margin-left:319px;}
		.rjfdd_center053_center {display:flex;align-items:center;}
		.rjfdd_center053_center span:nth-child(1){width:80px;height:80px;border:1px solid lightgray;margin-top:22px;margin-left:22px;display:inline-block;position:relative;top:-5px;}
		.rjfdd_center053_center span:nth-child(2){margin-left:20px;}
		.rjfdd_center053_center span:nth-child(3){margin-left:127px;}
		.rjfdd_center053_center span:nth-child(4){margin-left:112px;}
		.rjfdd_center053_center span:nth-child(5){margin-left:112px;display:inline-block;width:209px;height:120px;line-height:102px;border-left:1px solid lightgray;border-right:1px solid lightgray;text-align:center;}
		.rjfdd_center053_span115{margin-top:30px;}
		.rjfdd_center053_span116{background-color:#f08200;color:white;display:inline-block;width:90px;height:30px;text-align:center;border-radius:4px;margin-top:10px;}
		.sljfdd_center053_span115{text-align:center;display:inline-block;width:200px;height:121px;}
		
</style>