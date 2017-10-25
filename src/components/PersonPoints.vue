<template>
	<!--我的积分-->
	<div class="My_points">
		<div class="qcenterright">
			<div class="qcenterrighthead">
			<h4>我的积分</h4>	
			</div>
			<div class="qcenterrightcenterh_0902">
				<span >当前积分&nbsp;:&nbsp;</span>
				<span style="color:#f08200;">240分</span>
			</div>
			<div class="qcenterrightcenter_0859">
				<div class="qcenterrightch_0904">
					<span class="qcenterrightch_0904_s1">积分日期</span>
					<span class="qcenterrightch_0904_s2">变动</span>
					<span class="qcenterrightch_0904_s3">来源</span>
				</div>
				<div class="qcenterrightch_one0910">
					<span>2017-10-23&nbsp;09:12:59</span>
					<span>+100</span>
					<span>消费赠送</span>
				</div>
				<div class="qcenterrightch_one0910">
					<span>2017-10-23&nbsp;09:12:59</span>
					<span>+100</span>
					<span>消费赠送</span>
				</div><div class="qcenterrightch_one0910">
					<span>2017-10-23&nbsp;09:12:59</span>
					<span>+100</span>
					<span>消费赠送</span>
				</div>
			</div>
			
			
		</div>	
	</div>
</template>

<script>
		export default {
  name: 'My_points'
}
</script>

<style scoped>
		div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{margin:0;padding:0;}
		ul,li{list-style-type:none;}
		.My_points{margin-left:25px;}
		h4{font-size:18px;}		
		.qcenterright{width:1086px;height:625px;border:1px solid lightgray;}
		.qcenterrighthead{height:60px;line-height:60px;position:relative;border-bottom:1px solid lightgray;}
			.qcenterrighthead h4{display:block;width:100px;height:60px;text-indent:25px;}
		.qcenterrightcenter_0859{width:1045px;height:503px;border:1px solid lightgray;margin:0 auto;}
		.qcenterrightcenterh_0902{line-height:58px;padding-right:940px;}
		.qcenterrightcenterh_0902 span:nth-child(1){margin-left:20px;}
		.qcenterrightch_0904{background-color:#f2f2f2;line-height:47px;}
		.qcenterrightch_0904_s1{margin-left:118px;}
		.qcenterrightch_0904_s2{margin-left:352px;}
		.qcenterrightch_0904_s3{margin-left:352px;}
		.qcenterrightch_one0910{height:52px;border-bottom:1px solid lightgray;line-height:52px;}
		.qcenterrightch_one0910 span:nth-child(1){margin-left:79px;}
		.qcenterrightch_one0910 span:nth-child(2){margin-left:295px;}
		.qcenterrightch_one0910 span:nth-child(3){margin-left:342px;}
		.qcenterrightch_one0910:hover{background-color:#f4fff2;}
</style>