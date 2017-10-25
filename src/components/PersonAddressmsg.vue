<template>
	<!--地址信息-->
	
	<div class="Addressmanagement">
		<div class="qcenterright">
			<div class="qcenterrighthead">
				<h4>地址管理</h4>
				<span>添加新地址</span>
			</div>
			<div class="qdzglcrc">
				<ul class="qdzglcrc-header">
					<li>
						<span>收货人</span>
						<span>所在区域</span>
						<span>街道地址</span>
						<span>联系电话</span>
						<span>备注</span>
						<span>操作</span>
					</li>
					<li>
						<span>张强强</span>
						<span>北京&nbsp;北京市&nbsp;朝阳区</span>
						<span>高新区蓝欧科技</span>
						<span>15978526518</span>
						<span>备注</span>
						<span>修改|删除</span>
					</li>
					<li>
						<span>张强强</span>
						<span>北京&nbsp;北京市&nbsp;朝阳区</span>
						<span>高新区蓝欧科技</span>
						<span>15978526518</span>
						<span>备注</span>
						<span>修改|删除</span>
					</li>
					<li>
						<span>张强强</span>
						<span>北京&nbsp;北京市&nbsp;朝阳区</span>
						<span>高新区蓝欧科技</span>
						<span>15978526518</span>
						<span>备注</span>
						<span>修改|删除</span>
					</li>
					<li>
						<span>张强强</span>
						<span>北京&nbsp;北京市&nbsp;朝阳区</span>
						<span>高新区蓝欧科技</span>
						<span>15978526518</span>
						<span>备注</span>
						<span>修改|删除</span>
					</li>

				</ul>

			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'Addressmanagement'
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
	
	.qdzglcrc {
		width: 1044px;
		height: 452px;
		border: 1px solid lightgray;
		display: inline-block;
		margin-left: 22px;
		margin-top: 22px;
	}
	
	.qdzglcrc-header {
		height: 45px;
		background-color: #f2f2f2;
	}
	
	.qdzglcrc-header span {
		display: inline-block;
		height: 45px;
		text-align: center;
		line-height: 45px;
	}
	
	.qdzglcrc-header li {
		border-bottom: 1px solid lightgray;
	}
	
	.qdzglcrc-header li span:nth-child(1) {
		width: 100px;
	}
	
	.qdzglcrc-header li span:nth-child(2) {
		width: 260px;
	}
	
	.qdzglcrc-header li span:nth-child(3) {
		width: 260px;
	}
	
	.qdzglcrc-header li span:nth-child(4) {
		width: 120px;
	}
	
	.qdzglcrc-header li span:nth-child(5) {
		width: 90px;
	}
	
	.qdzglcrc-header li span:nth-child(6) {
		width: 150px;
		color: #b7d4b1;
	}
	
	.qdzglcrc-header li:nth-child(1) span:nth-child(1) {
		width: 100px;
	}
	
	.qdzglcrc-header li:nth-child(1) span:nth-child(2) {
		width: 260px;
	}
	
	.qdzglcrc-header li:nth-child(1) span:nth-child(3) {
		width: 260px;
	}
	
	.qdzglcrc-header li:nth-child(1) span:nth-child(4) {
		width: 120px;
	}
	
	.qdzglcrc-header li:nth-child(1) span:nth-child(5) {
		width: 90px;
	}
	
	.qdzglcrc-header li:nth-child(1) span:nth-child(6) {
		width: 150px;
		color: black;
	}
</style>