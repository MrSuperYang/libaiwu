<template>
	<div class="Recent_browsing">
		<div class="qcenterright">
			<div class="qcenterrighthead">
				<h4>最近浏览</h4>
			</div>
			<ul class="bcontent">
			<li>
				<img src="../pages/index/assets/mihoutao27.png" alt="" />
				<img src="../pages/index/assets/del.png" alt="" class="rbryo12"/>
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
				
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3" src="../pages/index/assets/gouwuche2.png"/></span></p>
				</div>
			</li>
			<li>
				<img src="../pages/index/assets/mihoutao27.png" alt="" />
				<img src="../pages/index/assets/del.png" alt="" class="rbryo12"/>
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
				
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3" src="../pages/index/assets/gouwuche2.png"/></span></p>
				</div>
			</li><li>
				<img src="../pages/index/assets/mihoutao27.png" alt="" />
				<img src="../pages/index/assets/del.png" alt="" class="rbryo12"/>
				<div class="btext">
					<p class="btexta">新西兰佳沛黄金奇异果</p>
				
					<p class="btextc"><span class="btextc1">¥30.00&nbsp;<span class="btextc2">¥0</span></span><span><img class="btextc3" src="../pages/index/assets/gouwuche2.png"/></span></p>
				</div>
			</li>
			
			</ul>
			</div>
	</div>
</template>

<script>
		export default {
		name: 'personal_data',
		mounted(){
			$('.rbryo12').on("click",function(){
				console.log(this.parentNode.parentNode);
				this.parentNode.remove();
			});
			
		}
		
		}
</script>

<style scoped="scoped">
div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{margin:0;padding:0;}
		ul,li{list-style-type:none;}
		h4{font-size:18px;}		
		.qcenterright{width:1086px;height:625px;border:1px solid lightgray;/*position:absolute;right:0;*/}
		.qcenterrighthead{height:60px;line-height:60px;position:relative;border-bottom:1px solid lightgray;}
			.qcenterrighthead h4{display:inline-block;width:200px;height:60px;text-indent:20px;}
			
			.bcontent{margin: 0 auto;
				width: 1085px;}
			.bcontent li{
				width: 304px;
				height: 420px;
				border:1px solid lightgray;margin-left:45px;margin-top:40px;
				float:left;
			}
			.bcontent li img:nth-child(1){margin-left:15px;}
			.bcontent li:hover{
				border:1px solid green;
			}
			.bcontent li .btext{
				height: 147px;}
			.bcontent li .btext .btexta{
				font-size: 20px;
				margin-left: 20px;
				line-height: 34px;
				margin-top:50px;
			}
			
			.bcontent li .btext .btextc{
				font-size: 22px;
				margin-left: 20px;
				line-height: 50px;
				display: flex;
				justify-content: space-between;
				margin-top:00px;
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
			.rbryo12{float:right ;position:relative;top:-255px;}
		
</style>