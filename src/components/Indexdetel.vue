<template>
	<div class="content">
		<div class="banner">
			<router-link to="*"><img src="../pages/index/assets/a/banner2.jpg" alt="" /></router-link>
			<router-link to="*"><img src="../pages/index/assets/a/banner1.jpg" alt="" /></router-link>
			<router-link to="*"><img src="../pages/index/assets/a/banner3.jpg" alt="" /></router-link>
			<router-link to="*"><img src="../pages/index/assets/a/banner4.jpg" alt="" /></router-link>
		</div>
		<div class="setInter">
			<div class="text">
				<img src="../pages/index/assets/a/anaozhong.jpg" alt="" />
				<b>礼拜五</b>
				<span>Friday</span>
			</div>
			<div class="time">
				<b>距离开始</b>
				<div class="timer">
					<span class="a">{{day}}天</span>
					<span>{{hour}}</span>
					<strong>:</strong>
					<span>{{minu}}</span>
					<strong>:</strong>
					<span>{{sec}}</span>
				</div>
				<i>更多&gt;</i>
			</div>
		</div>

		<div class="Container">
			<swiper :options="swiperOption" ref="mySwiper" class="ContainerCon">
				<!-- slides -->
				<swiper-slide class="swiperOption_id">
					<div>
						<img src="../pages/index/assets/a/1.jpg" alt="" />
						<span>新西兰佳沛黄金奇异果</span>
						<span>6个装</span>
						<p><b>礼拜五价&nbsp;:&nbsp;</b><i>¥28.80</i></p>
					</div>
				</swiper-slide>
				<swiper-slide class="swiperOption_id">
					<div>
						<img src="../pages/index/assets/a/1.jpg" alt="" />
						<span>新西兰佳沛黄金奇异果</span>
						<span>6个装</span>
						<p><b>礼拜五价&nbsp;:&nbsp;</b><i>¥28.80</i></p>
					</div>
				</swiper-slide>
				<swiper-slide class="swiperOption_id">
					<div>
						<img src="../pages/index/assets/a/1.jpg" alt="" />
						<span>新西兰佳沛黄金奇异果</span>
						<span>6个装</span>
						<p><b>礼拜五价&nbsp;:&nbsp;</b><i>¥28.80</i></p>
					</div>
				</swiper-slide>
				<swiper-slide class="swiperOption_id">
					<div>
						<img src="../pages/index/assets/a/1.jpg" alt="" />
						<span>新西兰佳沛黄金奇异果</span>
						<span>6个装</span>
						<p><b>礼拜五价&nbsp;:&nbsp;</b><i>¥28.80</i></p>
					</div>
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="setInter">
			<div class="text">
				<img src="../pages/index/assets/a/anaozhong.jpg" alt="" />
				<b>礼拜五</b>
				<span>Friday</span>
			</div>
			<div class="more">
				更多&gt;
			</div>
		</div>
		<div class="setInter_cont">
			<div class="cont_ent">
				<img src="../pages/index/assets/a/猕猴桃.jpg" alt=""  class="spec"/>
				<div class="itext">
					<span class="itexta">新西兰佳沛黄金奇异果</span>
					<span class="itextb">果肉绵密、花蜜版的甘甜百吃不厌</span>
					<span class="itextc1">¥28.80&nbsp;</span>
					<span class="itextc2">¥40.00</span>
					<img class="itextc3" src="../pages/index/assets/a/购物车.jpg"/>	
					
				</div>
			</div>
			<div class="cont_ent">
				<img src="../pages/index/assets/a/猕猴桃.jpg" alt=""  class="spec"/>
				<div class="itext">
					<span class="itexta">新西兰佳沛黄金奇异果</span>
					<span class="itextb">果肉绵密、花蜜版的甘甜百吃不厌</span>
					<span class="itextc1">¥28.80&nbsp;</span>
					<span class="itextc2">¥40.00</span>
					<img class="itextc3" src="../pages/index/assets/a/购物车.jpg"/>	
					
				</div>
			</div>
			<div class="cont_ent">
				<img src="../pages/index/assets/a/猕猴桃.jpg" alt=""  class="spec"/>
				<div class="itext">
					<span class="itexta">新西兰佳沛黄金奇异果</span>
					<span class="itextb">果肉绵密、花蜜版的甘甜百吃不厌</span>
					<span class="itextc1">¥28.80&nbsp;</span>
					<span class="itextc2">¥40.00</span>
					<img class="itextc3" src="../pages/index/assets/a/购物车.jpg"/>	
					
				</div>
			</div>
			<div class="cont_ent">
				<img src="../pages/index/assets/a/猕猴桃.jpg" alt=""  class="spec"/>
				<div class="itext">
					<span class="itexta">新西兰佳沛黄金奇异果</span>
					<span class="itextb">果肉绵密、花蜜版的甘甜百吃不厌</span>
					<span class="itextc1">¥28.80&nbsp;</span>
					<span class="itextc2">¥40.00</span>
					<img class="itextc3" src="../pages/index/assets/a/购物车.jpg"/>	
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'one',
		data() {
			return {
				day: '',
				hour: '',
				minu: '',
				sec: '',
				swiperOption: {
					notNextTick: true,
					autoplay: 1000,
					direction: 'horizontal',
					pagination: '.swiper-pagination',
					slidesPerView: 4,
					paginationClickable: true,
					spaceBetween: 30
				}
			}
		},
		mounted() {
			this.set()
		},
		methods: {
			set: function() {
				setInterval(() => {
					this.GetRtime();
				}, 1000)
			},
			GetRtime: function() {
				var aday = document.getElementById("aDay");
				var ahour = document.getElementById("aHour");
				var aminu = document.getElementById("aMinu");
				var asec = document.getElementById("aSec");
				var aEndTime = new Date('2017/10/26 00:00:00');
				var aNowTime = new Date();
				var at = aEndTime.getTime() - aNowTime.getTime();
				var ad = 0;
				var ah = 0;
				var am = 0;
				var ase = 0;
				if(at > 0) {
					ad = Math.floor(at / 1000 / 60 / 60 / 24);
					ah = Math.floor(at / 1000 / 60 / 60 % 24);
					am = Math.floor(at / 1000 / 60 % 60);
					ase = Math.floor(at / 1000 % 60);
				}
				this.day = ad;
				this.hour = ah;
				this.minu = am;
				this.sec = ase;
			}
		}
	}
</script>

<style scoped>
	@import url("../pages/index/assets/swiper-3.4.2.min.css");
	
	
	img {
		vertical-align: top;
	}
	
	.content {
		width: 1280px;
		margin: 20px auto;
	}
	
	.banner {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-bottom: 20px;
	}
	.swiperOption_id:hover{
		border: 1px solid green;
	}
	/*悬浮事件 礼拜五倒计时下边的图片边框*/
	.cont_ent:hover{
		border: 1px solid green;
	}
	.setInter {
		background-color: #ebffe8;
		display: flex;
		justify-content: space-between;
		height: 70px;
		padding-top: 30px;
	}
	
	.setInter img {
		vertical-align: top;
	}
	
	.text {
		width: 270px;
		text-align: right;
	}
	
	.text span {
		font-size: 18px;
		color: gainsboro;
	}
	
	i,
	b {
		font-style: normal
	}
	
	.setInter b {
		font-size: 30px;
		color: green;
	}
	
	.time {
		width: 530px;
		text-align: left;
	}
	
	.time b {
		display: inline-block;
		margin-right: 20px;
	}
	
	.time span,
	.time b {
		vertical-align: middle;
	}
	
	.time span {
		display: inline-block;
		width: 60px;
		line-height: 41px;
		background-color: orange;
		border-radius: 5px;
		color: white;
		font-size: 16px;
		text-align: center;
	}
	
	.timer {
		color: orange;
		display: inline-block;
		width: 305px;
	}
	
	.time .timer .a {
		margin-right: 10px;
	}
	
	.Container {
		height: 522px;
		margin-top: 20px;
		position: relative;
	}
	
	.swiperOption_id {
		height: 432px;
		text-align: center;
		background-color: #f8f6f7;
	}
	
	.swiperOption_id img {
		width: 100%;
	}
	
	.swiperOption_id span {
		display: block;
		font-size: 19px;
		line-height: 28px;
	}
	
	.swiperOption_id b {
		color: darkorange;
		font-size: 18px;
	}
	
	.swiperOption_id i {
		font-size: 25px;
		color: red;
		line-height: 60px;
	}
	
	.ContainerCon {
		height: 100%;
	}
	
	.swiper-pagination {
		position: absolute;
		bottom: 30px;
		left: 0;
		right: 0;
	}
	
	.more {
		line-height: 50px;
		padding-right: 20px;
		font-size: 21px;
		color: lightgrey;
	}
	
	.setInter_cont {
		margin-top: 20px;
		height: 430px;
		display: flex;
		justify-content: space-between;
	}
	/*悬浮事件*/
	
	.cont_ent{
		width: 305px;
		height: 100%;
		border: 1px solid gainsboro;
	}
	.itext{
		padding: 10px 20px 20px;
	}
	.itexta{
		font-size: 18px;
		line-height: 18px;
	}
	.cont_ent .spec{
		width: 100%;
	}
	.itextb{
		display: block;
		font-size: 14px;
		line-height: 30px;
		color: #7a7a7a;
	}
	.itextc1{
		font-size: 25px;
		font-weight: bolder;
		color: red;
	}
	.itextc2{
		text-decoration: line-through;
	}
	.itextc3{
		margin-left: 80px;
	}
</style>