<template>
	<div id="app">
		<!--收货人信息, 按钮使用新地址-->
		<div class="abtop">
			<h3>收货人信息</h3>
			<button>使用新地址</button>
		</div>
		<!--收件人详细的信息-->

		<div class="abxxa">
			<span id="abxxa"><span id="abxxb"></span></span>
			<span>但小兵</span>
			<span>北京</span>
			<span>北京市</span>
			<span>昌平区</span>
			<span>天通苑明天第一城4楼101</span>
			<span>固定电话010-21541589</span>
			<span>默认地址</span>
			<span>设置默认地址</span>
			<span>修改</span>
			<span>删除</span>
		</div>
		<div class="abxxb">
			<span>展开其他地址</span>
			<span><img src="../pages/index/assets/aimgd/双下箭头.jpg"/></span>
			<span>收起地址</span>
			<span><img src="../pages/index/assets/aimgd/上双箭头.jpg"/></span>
		</div>
		<!--物品信息的头部-->
		<h4 class="abxxc">商品信息</h4>
		<!--  详细的购买商品信息 -->
		<div class="abxxd">
			<!--商品详细信息头部部分-->
			<div class="abxxda">
				<span>爱果果水果店</span>
				<span>规格</span>
				<span>单价</span>
				<span>数量</span>
				<span>金额</span>
			</div>
			<div class="abxxdb">
				<img src="../pages/index/assets/aimgd/商品信息草莓.jpg" alt="" />
				<p>云南蒙自石榴8个装</p>
				<p>8个装</p>
				<p>¥569</p>
				<p class="abxxdb5"> <span>-</span> <span>1</span> <span>+</span> </p>
				<p>¥569</p>
			</div>
			<div class="abxxdc">
				<span>运费</span>
				<span>¥5.0</span>
				<span>商品金额</span>
				<span>¥108.0</span>
				<span>商家合计</span>
				<span>¥108.0</span>
			</div>
		</div>
		<div class="abxxe">
			<h4 class="abxxc">开票信息</h4>
			<label><input type="radio" name="sex" checked/>不需要</label>			
			 <input id="women" type="radio" name="sex"/>
			 <label for="women">个人</label>
			 <input id="women" type="radio" name="sex"/>
			 <label for="women">单位</label>
			 <div class="abxxe1">
			 	发票抬头：<input type="text"/>&nbsp;&nbsp;&nbsp;✨请填写后认真核对发票信息
			 </div>
		</div>
		<div class="abxxf">
			<h4 class="abxxc">添加订单备注</h4>
			<input type="text"  placeholder="限45个字,请填写有关商品、支付、发票等信息"/>
		</div>
		
		
		<div class="abxxd">
			<!--商品详细信息头部部分-->
			<div class="abxxda">
				<span>爱果果水果店</span>
				<span>规格</span>
				<span>单价</span>
				<span>数量</span>
				<span>金额</span>
			</div>
			<div class="abxxdb">
				<img src="../pages/index/assets/aimgd/商品信息草莓.jpg" alt="" />
				<p>云南蒙自石榴8个装</p>
				<p>8个装</p>
				<p>¥569</p>
				<p class="abxxdb5"> <span>-</span> <span>1</span> <span>+</span> </p>
				<p>¥569</p>
			</div>
			<div class="abxxdc">
				<span>运费</span>
				<span>¥5.0</span>
				<span>商品金额</span>
				<span>¥108.0</span>
				<span>商家合计</span>
				<span>¥108.0</span>
			</div>
		</div>
		<div class="abxxe">
			<h4 class="abxxc">开票信息</h4>
			<label><input type="radio" name="sex" checked/>不需要</label>			
			 <input id="women" type="radio" name="sex"/>
			 <label for="women">个人</label>
			 <input id="women" type="radio" name="sex"/>
			 <label for="women">单位</label>
			 <div class="abxxe1">
			 	发票抬头：<input type="text"/>&nbsp;&nbsp;&nbsp;✨请填写后认真核对发票信息
			 </div>
		</div>
		<div class="abxxf">
			<h4 class="abxxc">添加订单备注</h4>
			<input type="text"  placeholder="限45个字,请填写有关商品、支付、发票等信息"/>
		</div>
		<!-- 次日达.礼拜五专享-->
		<div class="abxxg">
			<div>次日达·礼拜五专享</div>
			<div><span>选择送达时间：</span> <span>2016年9月18日12:00~3:00</span> <span>🐔点击修改</span></div>
			<div>
				
			</div>
		</div>
		<div class="abxxh">
			<div>实付金额：<span>¥2977</span></div>
			<div>订单完成后可获得积分：<span>300积分</span></div>
			<button>提交订单</button>
		</div>
	</div>
</template>

<script>
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.abtop {
		width: 1280px;
		height: 58px;
		line-height: 58px;
		margin: 36px auto 0;
		display: flex;
		justify-content: space-between;
	}
	
	.abtop h3 {
		color: #797979;
	}
	
	.abtop button {
		width: 90px;
		height: 30px;
		margin-top: 15px;
		color: white;
		border: none;
		background-color: #f08200;
		border-radius: 5px;
	}
	/*手贱人的详细信息,地址,等等*/
	
	.abxxa {
		width: 1280px;
		height: 28px;
		background-color: #f4fff2;
		margin: 0 auto;
		margin-bottom: 10px;
		padding-top: 10px;
		color: #666666;
	}
	
	.abxxa #abxxa {
		display: inline-block;
		width: 15px;
		height: 15px;
		text-align: center;
		border: 1px solid #d2d4d2;
		border-radius: 50%;
	}
	
	.abxxa #abxxb {
		display: inline-block;
		width: 8px;
		height: 8px;
		/*background-color: green;*/
		border-radius: 50%;
	}
	
	.abxxa span {
		margin-left: 5px;
	}
	
	.abxxa span:nth-child(9) {
		margin-left: 410px;
		color: #f08200;
	}
	/*上下双箭头*/
	
	.abxxb {
		width: 1280px;
		height: 40px;
		margin: 0 auto;
		margin-bottom: 15px;
	}
	
	.abxxb span {
		display: inline-block;
		margin-right: 10px;
		color: green;
	}
	/*物品信息详情内容头部*/
	
	.abxxc {
		width: 1280px;
		height: 60px;
		color: #b3b3b3;
		line-height: 60px;
		margin: 0 auto;
		border-top: 1px solid #e9e9e9;
		/*padding-left: 56px;*/
	}
	/*详细物品商品信息*/
	
	.abxxd {
		width: 1280px;
		margin: 0 auto;
		border: 1px solid #e9e9e9;
		margin-bottom: 30px;
	}
	/*商品信息头部部分*/
	
	.abxxda {
		width: 1280px;
		height: 46px;
		background-color: #f2f2f2;
		color: blacke;
		line-height: 46px;
	}
	
	.abxxda span {
		display: inline-block;
	}
	
	.abxxda span:nth-child(1) {
		margin-left: 58px;
	}
	
	.abxxda span:nth-child(2) {
		margin-left: 318px;
	}
	
	.abxxda span:nth-child(3) {
		margin-left: 148px
	}
	
	.abxxda span:nth-child(4) {
		margin-left: 148px
	}
	
	.abxxda span:nth-child(5) {
		margin-left: 148px
	}
	/*详细商品部分 图片加文字*/
	
	.abxxdb {
		height: 118px;
		/*line-height: 118px;*/
		border-bottom: 1px solid #e9e9e9;
	}
	
	.abxxdb img {
		float: left;
		margin-left: 56px;
		margin-top: 20px;
	}
	
	.abxxdb p {
		float: left;
	}
	
	.abxxdb p:nth-child(2) {
		margin-left: 20px;
		margin-top: 52px;
	}
	
	.abxxdb p:nth-child(3) {
		margin-left: 186px;
		margin-top: 52px;
	}
	
	.abxxdb p:nth-child(4) {
		margin-left: 140px;
		margin-top: 52px;
	}
	
	.abxxdb p:nth-child(5) {
		margin-left: 112px;
		margin-top: 52px;
	}
	
	.abxxdb p:nth-child(6) {
		margin-left: 110px;
		margin-top: 52px;
	}
	/*清理浮动*/
	
	.abxxdb p:after {
		content: "";
		display: block;
		clear: both;
	}
	/*加减法插件*/
	
	.abxxdb5 {
		width: 105px;
		height: 26px;
		border: 1px solid #d3d3d3;
	}
	
	.abxxdb5 span {
		display: inline-block;
	}
	
	.abxxdb5 span:nth-child(1) {
		width: 22px;
		height: 26px;
		border: 1px solid #d3d3d3;
		text-align: center;
	}
	
	.abxxdb5 span:nth-child(2) {
		width: 46px;
		height: 26px;
		text-align: center;
	}
	
	.abxxdb5 span:nth-child(3) {
		width: 22px;
		height: 26px;
		border: 1px solid #d3d3d3;
		text-align: center;
	}
	/*商品详情部分下边的合计部分*/
	
	.abxxdc{
		width: 590px;
		height: 80px;
		line-height: 80px;
		margin-left: 690px;
		border-bottom: 1px solid #e9e9e9;
	}
	.abxxdc span:nth-child(2n-1){
		font-size: 18px;
		color: #666666;
		margin-right: 25px;
	}
	.abxxdc  span:nth-child(2n){
		font-size: 20px;
		color: #ff5757;
		margin-right: 40px;
	}
	/*开票信息*/
	.abxxe{
		width: 1280px;
		margin: 0 auto;
		color: #7a7a7a;
		border-top:1px solid #d3d3d3 ;
		border-bottom:1px solid #d3d3d3 ;
	}
	.abxxe1{
		margin-top: 20px;
		margin-bottom: 20px;
		height: 36px;
		line-height: 36px;
	}
	.abxxe1 input{
		width: 368px;
		height: 32px;
	}
	/*添加订单备注部分*/
	.abxxf{
		width: 1280px;
		height: 124px;
		margin: 0 auto;
		margin-bottom:20px ;
		border-bottom: 1px solid #e9e9e9;
	}
	.abxxf input{
		width: 625px;
		height: 34px;
	}
	/*次日达,礼拜五专享*/
	.abxxg{
		width: 1280px;
		margin: 0 auto;
		font-size: 18px;
		border-top: 1px solid #e9e9e9;
		border-bottom: 1px solid #e9e9e9;
	}
	.abxxg div:nth-child(1){
		margin-top: 20px;
		color: green;
	}
	.abxxg div:nth-child(2){
		margin-top: 30px;
		color: #8c8c8c;
	}
	/*提交订单部分*/
	.abxxh{
		width: 1280px;
		height: 228px;
		margin: 0 auto;
		line-height: 76px;
	}
	.abxxh div:nth-child(1) span{
		color: #ff5757;
		font-size: 20px;
	}
	.abxxh div:nth-child(2) span{
		color: #f29220;
		font-size: 20px;
	}
	.abxxh div:nth-child(1){
		margin-left: 1110px;
	}
	.abxxh div:nth-child(2){
		margin-left: 1025px;
	}
	.abxxh button{
		width: 150px;
		height: 50px;
		color: white;
		background-color: #f08200;
		border: none;
		margin-bottom: 38px;
		border-radius: 5px;
		margin-left: 1130px;
	}
</style>