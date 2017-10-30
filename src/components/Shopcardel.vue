<template>
	<div class="detal">
		<div class="shopcar">
			<img src="../pages/index/assets/shopingcar.jpg" alt="" />
			<span>购物车</span>
		</div>
		<div class="del">
			<div class="top">
				<div class="chebox">
					<input type="checkbox" name="" id="but5182" value="" />
					<span>爱果果水果店1</span>
				</div>
				<div class="xuan">
					<span>规格</span>
					<span>单价</span>
					<span>数量</span>
					<span>金额</span>
					<span>操作</span>
				</div>
			</div>
			<div class="content">
				<div class="chebox">
					<input type="checkbox" name="" id="" value="" />
					<img src="../pages/index/assets/草莓.jpg" alt="" />
					<span>云南蒙自石榴8个装</span>
				</div>
				<div class="xuan">
					<span>8个装</span>
					<span>¥596</span>
					<span class="box"><b>➖</b><input type="text" name="" id="" value="1" /><b>➕</b></span>
					<span>¥596</span>
					<span>删除</span>
				</div>
			</div>
			<div class="content">
				<div class="chebox">
					<input type="checkbox" name="" id="" value="" />
					<img src="../pages/index/assets/草莓.jpg" alt="" />
					<span>云南蒙自石榴8个装</span>
				</div>
				<div class="xuan">
					<span>8个装</span>
					<span>¥596</span>
					<span class="box"><b>➖</b><input type="text" name="" id="" value="1" /><b>➕</b></span>
					<span>¥596</span>
					<span>删除</span>
				</div>
			</div>
			<div class="content">
				<div class="chebox">
					<input type="checkbox" name="" id="" value="" />
					<img src="../pages/index/assets/草莓.jpg" alt="" />
					<span>云南蒙自石榴8个装</span>
				</div>
				<div class="xuan">
					<span>8个装</span>
					<span>¥596</span>
					<span class="box"><b>➖</b><input type="text" name="" id="" value="1" /><b>➕</b></span>
					<span>¥596</span>
					<span>删除</span>
				</div>
			</div>
			<div class="content">
				<div class="chebox">
					<input type="checkbox" name="" id="" value="" />
					<img src="../pages/index/assets/草莓.jpg" alt="" />
					<span>云南蒙自石榴8个装</span>
				</div>
				<div class="xuan">
					<span>8个装</span>
					<span>¥596</span>
					<span class="box"><b>➖</b><input type="text" name="" id="" value="1" /><b>➕</b></span>
					<span>¥596</span>
					<span>删除</span>
				</div>
			</div>
			<div class="all">
				<p><span>商品金额</span><b>¥101.00</b></p>
			</div>

		</div>
		<div class="allmoney">
			<div class="choice">
				<span>全选</span>
				<span>批量删除</span>
			</div>
			<div class="money">
				<span>商品总计：</span>
				<b>¥2977</b>
				<i><router-link to="/shopcar/ShopCarDetel">立即购买</router-link></i>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'detl',
		components: {},
		mounted() {
		$('.xuan span:nth-child(5)').on('click',function(){
			this.parentNode.parentNode.remove();
		});
			$('#but5182').on('click',function(){
			$('.chebox input').prop("checked",true);

			});
		}
	}
</script>

<style scoped>
	i{
		font-style: normal;
	}
	img{
		vertical-align: middle;
	}
	.detal {
	
		width: 1280px;
		margin: 0 auto;
		/*background-color: red;*/
	}
	
	.shopcar {
		font-size: 21px;
		word-spacing: 20px;
		line-height: 60px;
	}
	
	.top{
		display: flex;
		justify-content: space-between;
		line-height: 46px;
		border-top: 1px solid #e9e9e9;
		line-height: 46px;
		background-color: #f2f2f2;
	}
	.xuan{
		width: 900px;
		
		display: flex;
		justify-content: space-between;
	}
	.xuan span{
		width: 130px;
		display: block;
		text-align: center;
	}
	.content{
		display: flex;
		/*height: 118px;*/
		justify-content: space-between;
		padding: 20px 0;
		border-bottom: 1px solid #f2f2f2;
	}
	.content .xuan{
		padding-top: 20px;
	}
	input{
		width: 46px;
		line-height: 26px;
		outline:medium;
		border: none;
		text-align: center;
		font-size: 20px;
		border-left: 1px solid #f2f2f2;
		border-right: 1px solid #f2f2f2;
	}
	.content .xuan .box{
		display:block;
		width: 102px;
		height: 28px;
		border: 1px solid #f2f2f2;
	}
	.content .xuan span:nth-child(5){
		color: green;cursor:pointer;
	}
	.content .xuan span:nth-child(2){
		color: gainsboro;
	}
	.content .xuan span:nth-child(1){
		color: gainsboro;
	}
	.all{
		line-height: 80px;
		border-bottom: 1px solid #f2f2f2;
		text-align: right;
	}
	.box b{
		display: inline-block;
		width: 27px;
		height: 27px;
		background-color: #f2f2f2;
	}
	.all span{
		font-size: 18px;
		display: inline-block;
		margin-right: 10px;
	}
	.all b{
		font-size: 24px;
		color: red;
		margin-right: 20px;
	}
	.top,.content{
		padding-left: 20px;
	}
	.allmoney{
		display: flex;
		justify-content: space-between;
		/*height: 133px;*/
		padding: 40px 20px;
	}
	.choice{
		color: green;
		word-spacing: 24px;
	}
	.money span{
		font-size: 20px;
	}
	.money b{
		font-size: 24px;
		color: red;
	}
	.money i{
		font-size: 25px;
		color: white;
		display: inline-block;
		background-color: orange;
		width: 150px;
		text-align: center;
		margin-left: 20px;
		line-height: 50px;
		border-radius: 4px;
	}
</style>