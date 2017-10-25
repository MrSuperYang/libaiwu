<template>
	<!--添加地址-->
	<div class="Addressmanagement_empty">
		<div class="qcenterright">
			<div class="qcenterrighthead">
			<h4>地址管理</h4>	
			<span>添加新地址</span>	
			</div>
			<div class="qcenterrightcenter">
				<img src="img/pencil-with-paper.jpg" alt="" />&nbsp;
				暂无收货地址,请点击&nbsp;<span>添加新地址</span>	
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
  name: 'Addressmanagement_empty'
}
</script>

<style scoped>
	
		h4{font-size:18px;}
			.qcenterright{width:1086px;height:625px;border:1px solid lightgray;}
			.qcenterrighthead{height:60px;line-height:60px;position:relative;border-bottom:1px solid lightgray;}
			.qcenterrighthead h4{display:inline-block;width:200px;height:60px;text-indent:20px;}
			.qcenterrighthead span{display:inline-block;width:90px;height:30px;position:absolute;text-align:center;background-color:#498e3d;color:white;line-height:30px;border-radius:3px;top:15px;right:21px;}
			.qcenterrightcenter{position:relative;top:258px;height:50px;display:flex;align-items:center;justify-content:center;}
		.qcenterrightcenter span{display:inline-block;width:90px;height:30px;text-align:center;background-color:#498e3d;color:white;line-height:30px;border-radius:3px;top:15px;}
</style>