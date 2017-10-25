<template>

	<ul class="breadcrumb">
		<li>您当前所在位置：</li>
		<li v-for="(item,index) in brumblist" :key="index">
			<router-link :to="item.path">{{item.meta.breadcrumbName}}</router-link>
			<span class="separator" v-if="index !== brumblist.length-1">></span>
		</li>
	</ul>

</template>

<script>
	export default {
		created() {
			this.getBreadcrumb();
		},
		data() {
			return {
				title: '', // 页面标题
				brumblist: '' // 路由集合
			}
		},
		//props: ['separator'],
		methods: {
			getBreadcrumb() {
				this.brumblist = this.$route.matched;
				this.$route.matched.forEach((item, index) => {
					// 判断父级路由是否为空字符串或者meta是否为首页,直接复写路径到根目录
					// 后面的就是判断路由和当前遍历的项目是否一致,是的话把标题的值给上
					item.meta.breadcrumbName === '首页' ? item.path = '/' : this.$route.path === item.path;
				})
			}
		},
		watch: {
			$route() {
				this.getBreadcrumb();
			}
		}
	}
</script>

<style scoped>
	.breadcrumb {
		width: 1260px;
		margin: 0 auto;
		line-height: 54px;
		padding-left: 20px;
		background-color: #f4f4f4;
		margin-top: 20px;
		color: #666666;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	li {
		display: inline-block;
	}
	a{
		color: #666666;
	}
</style>