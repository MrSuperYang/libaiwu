<template>
	<div class="Mycollection">
			<div class="qcenterright">
			<div class="qcenterrighthead">
			<h4>我的收藏</h4>	
			
			</div>
			<ul class="bcontent">
			<li>
				<img src="../pages/index/assets/mihoutao27.jpg" alt="" />
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
					<p class="btextb">果肉绵密、花蜜版的甘甜百吃不厌</p>
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3" src="../pages/index/assets/gouwuche2.jpg"/></span></p>
				</div>
				<div style="text-align:center;">
					<span style="display:inline-block;color:white;background-color:#999999;width:150px;height:36px;border-radius:18px;text-align:center;line-height:36px;">已失效</span>
				</div>
			</li>
			<li>
				<img src="../pages/index/assets/mihoutao27.jpg" alt="" />
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
					<p class="btextb">果肉绵密、花蜜版的甘甜百吃不厌</p>
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3" src="../pages/index/assets/gouwuche2.jpg"/></span></p>
				</div>
				<div style="text-align:center;">
					<span style="display:inline-block;color:white;background-color:green;width:150px;height:36px;border-radius:18px;text-align:center;line-height:36px;">点击收藏</span>
				</div>
			</li>
			<li>
				<img src="../pages/index/assets/mihoutao27.jpg" alt="" />
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
					<p class="btextb">果肉绵密、花蜜版的甘甜百吃不厌</p>
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3" src="../pages/index/assets/gouwuche2.jpg"/></span></p>
				</div>
				<div style="text-align:center;">
					<span style="display:inline-block;color:white;background-color:green;width:150px;height:36px;border-radius:18px;text-align:center;line-height:36px;">已失效</span>
				</div>
			</li>
			
			</ul>
			</div>
	</div> 
</template>

<script>
	export default {
  name: 'Mycollection'
}
</script>

<style scoped="scoped">
	div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{margin:0;padding:0;}
		ul,li{list-style-type:none;}
		h4{font-size:18px;}		
			.qcenterright{width:1086px;height:625px;border:1px solid lightgray;}
		.qcenterrighthead{height:60px;line-height:60px;position:relative;border-bottom:1px solid lightgray;}
			.qcenterrighthead h4{display:block;width:100px;height:60px;text-indent:20px;}
			.bcontent{margin: 0 auto;
				width: 1085px;}
			.bcontent li{
				width: 304px;
				height: 478px;
				border:1px solid darkgray;margin-left:45px;margin-top:40px;
				float:left;
			}
			.bcontent li .btext{
				height: 147px;}
			.bcontent li .btext .btexta{
				font-size: 20px;
				margin-left: 20px;
				line-height: 34px;
			}
			.bcontent li .btext .btextb{
				font-size: 14px;
				margin-left: 20px;
				line-height: 36px;
				color: gray;
			}
			.bcontent li .btext .btextc{
				font-size: 22px;
				margin-left: 20px;
				line-height: 50px;
				display: flex;
				justify-content: space-between;
			}
			.bcontent li .btext .btextc1{
				font-size: 22px;
				color: red;
			}
			.bcontent li .btext .btextc2{
				color: black;
				font-size: 16px;
				text-decoration: line-through;	}
			.bcontent li .btext .btextc3{
				margin-right: 20px;
			}
</style>