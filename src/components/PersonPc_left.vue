<template>
	
	<div class="pc_left">
		<div class="qleft">
			<div class="qlefthead">
				<h3>个人中心</h3> </div>
			<div class="qleftcenter">
				<ul>
					<li style="font-size:16px;">
						<h4>交易管理&nbsp;&nbsp;&nbsp; ></h4> 
					</li>
					<router-link to="/person/">
						<li>我的账户</li>
					</router-link>

					<router-link to="/person/myorder">
						<li>我的订单</li>
					</router-link>

					<router-link to="/person/My_points">
						<li>我的积分</li>
					</router-link>
					<router-link to="/person/Integralorder">
						<li>积分订单</li>
					</router-link>
					<router-link to="/person/Mywallet">
						<li>我的钱包</li>
					</router-link>
					<li style="font-size:16px;">
						<h4>会员资料&nbsp;&nbsp;&nbsp; ></h4> </li>
					<li>
						<router-link to="/person/Personaldata">个人资料</router-link>
					</li>
					<li>
						<router-link to="/person/Addressmanagement">地址管理</router-link>
					</li>
					<router-link to="/person/Mycollection">
						<li>我的收藏</li>
					</router-link>
					<li>最近浏览 </li>
					<li>
						<router-link to="/person/Modifypassword">修改密码</router-link>
					</li>
					<li style="font-size:16px;">
						<h4>站内信&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></h4> </li>
					<router-link to="/person/Mymessage">
						<li>我的消息</li>
					</router-link>
					<router-link to="/person/Opinionfeedback">
						<li>意见反馈</li>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'pc_left',
				mounted() {
					$("li").click(function() {
						$(this).children("a").siblings().removeClass("a");
						$(this).children("a").addClass("a");
					})
				},
	}
</script>

<style scoped>
	h4 {
		font-size: 18px;
	}
	
	.qleft {
		display: inline-block;
		width: 170px;
		height: 623px;
		border: 1px solid lightgray;
		/*position:absolute;*/
	}
	
	.qlefthead {
		font-size: 19px;
		border-bottom: 1px solid lightgray;
		height: 57px;
		line-height: 57px;
		text-indent: 22px;
	}
	
	.qleftcenter {
		text-indent: 22px;
		font-size: 14px;
		line-height: 36px;
	}
	/*li .a {
		color: green;
		text-decoration: underline
	}*/
	/*.router-link-active {
		color: green;
		text-decoration: underline;
	}*/
</style>