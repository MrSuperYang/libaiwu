<template>
	<div id="app">
		<div class="atop">
			<span id="atopb3">您的当前位置：</span>
			<span>首页</span>
			<span> > </span>
			<span>全部商品</span>
		</div>
		<div class="atopb aaa">
			<b id="atopb1">一级分类：</b>
			<span>全部</span>
			<span>新鲜水果</span>
			<span>肉类家禽</span>
			<span>海鲜水产</span>
			<span>蛋奶速食</span>
		</div>
		<div class="aatopb ccc">
			<b id="atopb2">二级分类：</b>
			<span>全部</span>
			<router-link v-for="x in lo" :to="{ path:'/Delshapinfenlei?id='+x.id}"><span>{{x.name}}</span></router-link>
		</div>
		<div class="atopc">
			<div class="atopc1">
				排序：
				<span>销量</span>
				<span>价格</span>
				<span>评分最高</span>
			</div>
			<div class="atopc2">
				筛选:
				<span>全国</span>
				<span>次日达</span>
			</div>
		</div>
		<!--头部之后的详情部分-->
		<ul class="bcontent">
			<li v-for=" x in list">
				<router-link :to="{ path: '/Delakesu', query: { id:x.id}}">
					<img :src="x.src" alt="" class="img" />
				</router-link>

				<div class="btext">
					<p class="btexta">{{x.goodsName}}</p>
					<p class="btextb">{{x.sketch}}</p>
					<p class="btextc">
						<span class="btextc1">
							{{x.currentPrice}}&nbsp;
						</span>
						<span class="btextc2">
								{{x.originalPrice}}
							</span>

						<img class="btextc3" src="../pages/index/assets/aimgd/购物车.jpg" />

					</p>
				</div>
			</li>

		</ul>

	</div>
</template>

<script>
	export default {
		name: 'one',
		data() {
			return {
				list: [],
				arr: [],
				Arr: [],
				id: [],
				ids: [],
				lo: []
			}
		},
		mounted() {
			var _this = this;
			this.all();
			var a;
			$(".aaa span").on("click", function() {
				$(".aaa span").css({
					background: "white",
					color: "#666666"
				})
				$(this).css({
					background: "green",
					color: "white"
				});
				a = $(this).html();
				//sel(a);
				console.log(a);
				_this.arr = [];
				_this.Arr = [];
				_this.id = [];
				_this.ids = [];
				_this.lo = [];
				if(a == "全部") {
					_this.$http.post('/api/del/all', {

					}, {}).then((response) => {
						//console.log(response);
						_this.list = response.data;
					})
				} else {
					$(".aatopb").css("display", "block");
					_this.$http.post('/api/del/primary', {
						firstClass: a,
					}, {}).then((response) => {
						//console.log(response);
						_this.list = response.data;
						for(var i = 0; i < _this.list.length; i++) {
							var q = _this.list[i].secondClass;
							var w = _this.list[i].secondId;

							//console.log(_this.list[i].secondId);
							_this.arr.push(_this.list[i].secondClass);
							_this.id.push(_this.list[i].secondId);

						}
						for(var i = 0; i < _this.arr.length; i++) {
							if(_this.Arr.indexOf(_this.arr[i]) == -1) {
								_this.Arr.push(_this.arr[i]);
							}

						}
						for(var i = 0; i < _this.id.length; i++) {
							if(_this.ids.indexOf(_this.id[i]) == -1) {
								_this.ids.push(_this.id[i]);
							}

						}
						for(var i = 0; i < _this.id.length; i++) {
							var q = {
								name: _this.Arr[i],
								id: _this.ids[i]
							};
							_this.lo.push(q);
						}
					});
				}

			});
			$(document).on("click", ".ccc  span", function() {
				var ccc = $(this).html();
				if(ccc == "全部") {
					_this.$http.post('/api/del/primary', {
						firstClass: a
					}, {}).then((response) => {
						//console.log(response);
						_this.list = response.data;
					})
				} else {
					var url = window.location.search;
					//    alert(url.length);
					//    alert(url.lastIndexOf('='));
					var loc = url.substring(url.lastIndexOf('=') + 1, url.length);
					console.log(loc);
					_this.$http.post('/api/del/sel', {
						secondId: loc
					}, {}).then((response) => {
						//console.log(response);
						_this.list = response.data;

					});
				}
			});
		},
		methods: {
			all: function() {
				var url = window.location.search;
				//    alert(url.length);
				//    alert(url.lastIndexOf('='));
				var loc = url.substring(url.lastIndexOf('=') + 1, url.length);
				if(loc == all) {
					this.$http.post('/api/del/all', {

					}, {}).then((response) => {
						console.log(response);
						this.list = response.data;
					});
				} else {
					this.$http.post('/api/del/primary', {
						firstClass: loc,
					}, {}).then((response) => {
						console.log(response);
						this.list = response.data;
					});
				}

			},
			sel: function(a) {
				this.$http.post('/api/del/primary', {
					firstClass: a,
				}, {}).then((response) => {
					console.log(response);
					this.list = response.data;
				})
			},
		}
	}
</script>

<style scoped="scoped">
	.atop {
		width: 1240px;
		height: 14px;
		background-color: yellow;
		margin: 20px auto;
		background-color: #f4f4f4;
		font-size: 14px;
		color: #666666;
		padding: 20px;
	}
	
	.atop span {
		margin-left: 10px;
	}
	/*一级分类部分*/
	
	.atopb {
		width: 1280px;
		height: 40px;
		margin: 0 auto;
		padding-top: 16px;
		color: #666666;
		border-bottom: 1px solid #f4f4f4;
	}
	
	.aatopb {
		width: 1280px;
		height: 40px;
		margin: 0 auto;
		padding-top: 16px;
		color: #666666;
		border-bottom: 1px solid #f4f4f4;
		display: none;
	}
	
	.atopb span {
		width: 100px;
		margin-left: 20px;
		display: inline-block;
		text-align: center;
	}
	
	.aatopb span {
		width: 100px;
		margin-left: 20px;
		display: inline-block;
		text-align: center;
	}
	
	.aatopb a span {
		color: #666666;
	}
	
	.atopb span:hover {
		/*width: 64px;
		height: 23px;*/
		color: white;
		background-color: green;
	}
	
	.aatopb span:hover {
		/*width: 64px;
		height: 23px;*/
		color: white;
		background-color: green;
	}
	
	#atopb1 {
		width: 80px;
		height: 23px;
		text-align: left;
		margin-left: 0px;
	}
	
	#atopb2 {
		width: 80px;
		height: 23px;
		text-align: left;
		margin-left: 0px;
	}
	
	#atopb3 {
		width: 100px;
		height: 23px;
		text-align: left;
		margin-left: 0px;
	}
	
	.atopb span:nth-child(1) {
		color: #666666;
		background-color: white;
	}
	
	.aatopb .ccc {
		color: whitesmoke;
		background-color: green;
	}
	
	.atopb span:nth-child(2) {
		/*width: 54px;
		height: 26px;*/
		color: white;
		background-color: green;
	}
	/*.aatopb span:nth-child(2) {
		width: 54px;
		height: 26px;
		color: white;
		background-color: green;
	}*/
	/*几级分类的下边的那个按钮什么的*/
	
	.atopc {
		width: 1280px;
		height: 52px;
		padding-top: 24px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
	}
	
	.atopc1 span {
		display: inline-block;
		width: 60px;
		height: 24px;
		margin-left: 40px;
		text-align: center;
		border: 1px solid #e7e7e7;
	}
	
	.atopc1 span:nth-child(3) {
		width: 96px;
		height: 24px;
	}
	
	.atopc2 span {
		display: inline-block;
		width: 64px;
		height: 26px;
		text-align: center;
		margin-left: 30px;
	}
	
	.atopc2 span:nth-child(1) {
		background-color: green;
		color: white;
	}
	
	.atopc2 span:nth-child(2) {
		width: 80px;
		background-color: #dedede;
	}
	/*头部下边的详情分类部分*/
	
	.bcontent {
		margin: 0 auto;
		width: 1280px;
		display: flex;
		/*flex-direction: row-reverse;*/
		flex-wrap: wrap;
		/*justify-content: space-between;*/
	}
	
	.bcontent li {
		width: 304px;
		height: 452px;
		border: 1px solid darkgray;
		margin: 7px;
	}
	
	.bcontent li .img {
		width: 100%;
	}
	
	.bcontent li .btext {
		height: 147px;
		/*line-height: 117px;*/
	}
	
	.bcontent li .btext .btexta {
		font-size: 20px;
		margin-left: 20px;
		line-height: 34px;
	}
	
	.bcontent li .btext .btextb {
		font-size: 14px;
		margin-left: 20px;
		line-height: 36px;
		color: gray;
	}
	
	.bcontent li .btext .btextc img {
		vertical-align: middle;
	}
	
	.bcontent li .btext .btextc {
		font-size: 22px;
		margin-left: 20px;
		line-height: 50px;
		/*display: flex;
		justify-content: space-between;*/
	}
	
	.bcontent li .btext .btextc1 {
		font-size: 22px;
		color: red;
	}
	
	.bcontent li .btext .btextc2 {
		color: black;
		font-size: 16px;
		text-decoration: line-through;
	}
	
	.bcontent li .btext .btextc3 {
		float: right;
		margin-top: 10px;
		margin-right: 20px;
	}
</style>