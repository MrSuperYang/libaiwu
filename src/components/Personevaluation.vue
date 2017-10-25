<template>
	<div class="Order-evaluation">
		<div class="qcenterright">
			<div class="qcenterrighthead">
				<div>订单评价</div>
			</div>

			<div>
				<div class="qcenterscoreddpj">
					<!--<img src="img/276nfjkhx.jpg" alt="" />-->
				</div>
				<span class="qcenterscoreddpjword">珍享&nbsp;南非进口红心葡萄柚&nbsp;西柚柚子</span>
				<div>
					<!--商品评价代码块-->
					<div class="qddpj-centerleftl">
						<div>商品评分</div>
						<div>评价商品</div>
						<div>晒图片</div>
					</div>
					<div>
						<div>
							<!--星星模块-->
							<div class="star">
								<span class="star1"> <!--<img src="img/starb.jpg" alt="" />--></span>
								<span class="star1"><!--<img src="img/starb.jpg" alt="" />--></span>
								<span class="star1"><!--<img src="img/starb.jpg" alt="" />--></span>
								<span class="star1"><!--<img src="img/starb.jpg" alt="" />--></span>
								<span class="star1"><!--<img src="img/starb.jpg" alt="" />--></span>
							</div>
						</div>
						<div class="qddpj-centerleftr-word">
							<!--写文字的地方-->
							<textarea name="" rows="10" cols="10" placeholder="商品评价,最少10个字,最多50个字"></textarea>
						</div>
						<div class="qddpj-centerleftr-sun">
							<!--晒图片-->
							<span>+</span>
							<span>+</span>
							<span>+</span>
							<span>+</span>
						</div>
					</div>

				</div>

				<div class="qddpj-centerleftr-line"></div>
			</div>

			<div style="text-align: center;margin-top:52px;">
				<span style="margin-right:33px;margin-left:-33px;">
				服务态度<span> <!--<img src="img/starhong.jpg" alt="" />--></span>
				<span> <!--<img src="img/starhong.jpg" alt="" />--></span>
				<span> <!--<img src="img/starhong.jpg" alt="" />--></span>
				<span><!--<img src="img/starb.jpg" alt="" />--></span>
				<span><!--<img src="img/starb.jpg" alt="" />--></span></span>
				<span>
				描述相符<span> <!--<img src="img/starhong.jpg" alt="" />--></span>
				<span> <!--<img src="img/starhong.jpg" alt="" />--></span>
				<span> <!--<img src="img/starhong.jpg" alt="" />--></span>
				<span><!--<img src="img/starb.jpg" alt="" />--></span>
				<span><!--<img src="img/starb.jpg" alt="" />--></span>
				</span>

			</div>

			<div class="qcenterrightfoot">
				<span>提交评价</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Order-evaluation',

	}
</script>

<style scoped>

	
	h4 {
		font-size: 18px;
	}
	
	.qcenterright {
		width: 1086px;
		/*height: 625px;*/
		border: 1px solid lightgray;
	}
	
	.qcenterrighthead {
		height: 60px;
		line-height: 60px;
		position: relative;
		border-bottom: 1px solid lightgray;
	}
	
	.qcenterrighthead div {
		display: inline-block;
		width: 200px;
		height: 60px;
		text-indent: 20px;
		font-size: 20px;
	}
	
	.qcenterscoreddpj {
		display: inline-block;
		width: 260px;
		height: 260px;
		border: 1px solid lightgray;
		margin-left: 20px;
		margin-top: 30px;
	}
	
	.qcenterscoreddpjword {
		position: relative;
		top: 25px;
		font-size: 16px;
		left: -260px;
	}
	
	.star {
		position: absolute;
		right: 0;
		left: 461px;
		top: 102px;
	}
	
	.star span {
		display: inline-block;
		width: 19px;
		height: 19px;
	}
	
	.qddpj-centerleftr-word {
		position: absolute;
		right: 0;
		left: 461px;
		top: 160px;
	}
	
	.qddpj-centerleftr-word textarea {
		width: 583px;
		height: 123px;
		resize: none;
		padding-left: 12px;
		padding-top: 12px;
		font-size: 15px;
	}
	
	.qddpj-centerleftr-sun {
		position: absolute;
		right: 0;
		left: 461px;
		top: 317px;
	}
	
	.qddpj-centerleftr-sun span {
		font-size: 30px;
		display: inline-block;
		width: 62px;
		height: 62px;
		background-color: #e4e4e4;
		text-align: center;
		color: #c5c5c5;
		line-height: 62px;
	}
	
	.qddpj-centerleftl {
		height: 230px;
		display: inline-block;
		width: 64px;
		position: absolute;
		left: 385px;
		top: 102px;
	}
	
	.qddpj-centerleftl div:nth-child(2) {
		margin-top: 31px;
	}
	
	.qddpj-centerleftl div:nth-child(3) {
		margin-top: 138px;
		margin-left: 16px;
	}
	
	.qddpj-centerleftr-line {
		display: inline-block;
		width: 1040px;
		border: 1px dotted lightgray;
		margin-left: 25px;
		margin-top: 60px;
	}
	
	.qcenterrightfoot {
		text-align: center;
	}
	
	.qcenterrightfoot span {
		display: inline-block;
		width: 150px;
		height: 50px;
		background-color: #f08200;
		color: white;
		line-height: 50px;
		border-radius: 3px;
		top: 15px;
		right: 21px;
		font-size: 20px;
		text-align: center;
	}
</style>