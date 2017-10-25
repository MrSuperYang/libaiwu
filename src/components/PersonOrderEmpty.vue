<template>
	<div class="MyorderisEmpty">
			<div class="qcenterright">
			<div class="qcenterrighthead">
			<h4>我的订单</h4>	
			
			</div>
			<div class="swddd_heads96">
				<!--105  125-->
			<a href=""><span class="rwddd_header931" >全部</span></a>	
			<div>|</div>
				<span class="rwddd_header932">待付款</span>
				<div>|</div>
				<span class="rwddd_header933">待发货</span>
				<div>|</div>
				<span class="rwddd_header934">待收货</span>
				<div>|</div>
				<span class="rwddd_header935"><router-link to="/person/Orderevaluation">待评价</router-link></span>
				<div>|</div>
				<span class="rwddd_header936">退款/售后</span>
				<div>|</div>
				<span class="rwddd_header937">已完成/关闭</span>
				<span class="rwddd_header938">订单回收站</span>
				
			</div>
			<div class="rwddd_centers">
				<div class="rwddd_center021">
					<!--<img src="../img/xz20.png" alt="" />-->
				<div class="rwddd_center022">	您还没有订单哦!</div>
				<div class="rwddd_center023"><router-link to="/">去首页看看</router-link></div>	
			</div>
				
				</div>
		
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
  name: 'MyorderisEmpty'
}
</script>

<style scoped>
	div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{margin:0;padding:0;}
		ul,li{list-style-type:none;}
		h4{font-size:18px;}		
		.qcenterright{width:1086px;height:625px;border:1px solid lightgray;}
		.qcenterrighthead{height:60px;line-height:60px;position:relative;border-bottom:1px solid lightgray;}
			.qcenterrighthead h4{display:inline-block;width:200px;height:60px;text-indent:20px;}
			.swddd_heads96{margin-top:22px;}
			.rwddd_header931{background-color:#f08200;color:white;cursor:pointer;}
			.swddd_heads96 span{ display:inline-block;/*width:80px;*/height:29px;padding:0 15px;line-height:29px;font-size:14px;}
			.swddd_heads96 span:hover{background-color:#f08200;color:white;cursor:pointer;}
			.swddd_heads96 div{ display:inline-block;height:29px;padding:0 15px;line-height:29px;font-size:14px;}
			.rwddd_header931{margin-left:24px;}
			.rwddd_header938{margin-left:116px;color:#dbead8;}
			.rwddd_centers div{display:inline-block;}
			.rwddd_center021{margin-left:375px;margin-top:198px;}
			.rwddd_center022{position:relative;margin-left:40px;top:-76px;font-size:20px;color:#8c8c8c;}
			.rwddd_center023{width:170px;height:45px;border-radius:4px;color:white;background-color:#f08200;font-size:18px;text-align:center;line-height:45px;position:relative;left:-170px;top:-14px;}
			.rwddd_center023:hover{cursor:pointer;}
</style>