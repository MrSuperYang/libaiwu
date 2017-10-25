<template>
	<div class="Mymessage">
		<div class="qcenterright">
			<div class="qcenterrighthead">
			<h4>我的消息</h4>	
		
			</div>
			<div class="qdzglcrc">
				<ul class="qdzglcrc-header">
					<li >
						<span>标题</span>
						<span>发货时间</span>
						<span>状态</span>
						
						<span>操作</span>
					</li>
					<li>
						<span>您的货物已发货您的货物已发货您的货物已发货</span>
						<span>2017年10月23日&nbsp;11:07</span>
						
						<span>未查看</span>
						<span><div style="" class="wdxx_11fv"> 查看</div>&nbsp;|&nbsp;<div style="" class="wdxx_12vh">删除</div> </span>
						
					</li>
					<li>
						<span>您的货物已发货您的货物已发货您的货物已发货</span>
						<span>2017年10月23日&nbsp;11:07</span>
						
						<span>未查看</span>
						<span><div style="" class="wdxx_11fv"> 查看</div>&nbsp;|&nbsp;<div style="" class="wdxx_12vh">删除</div> </span>
						
					</li>
					<li>
						<span>您的货物已发货您的货物已发货您的货物已发货</span>
						<span>2017年10月23日&nbsp;11:07</span>
						
						<span>未查看</span>
						<span><div style="" class="wdxx_11fv"> 查看</div>&nbsp;|&nbsp;<div style="" class="wdxx_12vh">删除</div> </span>
						
					</li><li>
						<span>您的货物已发货您的货物已发货您的货物已发货</span>
						<span>2017年10月23日&nbsp;11:07</span>
						
						<span>未查看</span>
						<span><div style="" class="wdxx_11fv"> 查看</div>&nbsp;|&nbsp;<div style="" class="wdxx_12vh">删除</div> </span>
						
					</li><li>
						<span>您的货物已发货您的货物已发货您的货物已发货</span>
						<span>2017年10月23日&nbsp;11:07</span>
						
						<span>未查看</span>
						<span><div style="" class="wdxx_11fv"> 查看</div>&nbsp;|&nbsp;<div style="" class="wdxx_12vh">删除</div> </span>
						
					</li>
				</ul>
				
			</div>
			
		</div>
	</div>
	
</template>

<script>
		export default {
  name: 'Mymessage',
   mounted(){
var see_wdxxs=document.getElementsByClassName('wdxx_11fv');
var del_wdxxs=document.getElementsByClassName('wdxx_12vh');
for (var i = 0; i < see_wdxxs.length; i++) {
	see_wdxxs[i].onclick=function() {
		console.log(this.parentNode.parentNode);
	}
};
for (var i = 0; i < del_wdxxs.length; i++) {
	del_wdxxs[i].onclick=function() {
	this.parentNode.parentNode.remove();
	}
};
   }
}
</script>

<style scoped="scoped">
	div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{margin:0;padding:0;}
		ul,li{list-style-type:none;}
		h4{font-size:18px;}
			.qcenterright{width:1086px;height:625px;border:1px solid lightgray;}
			.qcenterrighthead{height:60px;line-height:60px;position:relative;border-bottom:1px solid lightgray;}
			.qcenterrighthead h4{display:block;width:100px;height:60px;text-indent:20px;}
			
			.qdzglcrc{width:1046px;height:452px;border:1px solid lightgray;display:inline-block;margin-left:22px;margin-top:22px;}
			.qdzglcrc-header{height:48px;background-color:#f2f2f2;}
			.qdzglcrc-header  span{display:inline-block;height:47px;text-align:center;line-height:47px;}
			.qdzglcrc-header li{height:54px;line-height:54px;}
			
			
			.qdzglcrc-header li:nth-child(1){height:48px;line-height:48px;}
			.qdzglcrc-header li:nth-child(1):hover{background-color:#f2f2f2;}
			.qdzglcrc-header li:hover{background-color:#f4fff2;}
		.qdzglcrc-header li {border-bottom:1px solid lightgray;}	
		.qdzglcrc-header li span:nth-child(1){ width:410px;}
		.qdzglcrc-header li span:nth-child(2){ width:340px;}
		
		.qdzglcrc-header li span:nth-child(3){ width:150px;}
		.qdzglcrc-header li span:nth-child(4){ width:130px;color:green;}
			
		.qdzglcrc-header li:nth-child(1) span:nth-child(1){ width:410px;}
		.qdzglcrc-header li:nth-child(1) span:nth-child(2){ width:340px;}
		.qdzglcrc-header li:nth-child(1) span:nth-child(3){ width:150px;}
		.wdxx_11fv{display:inline-block; width:50px;}
		.qdzglcrc-header div:hover{cursor:pointer;}
		.wdxx_12vh{display:inline-block;width:50px;}
		
</style>