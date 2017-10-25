<template>
	<div id="index">
		
			<headers></headers>
			
			<router-view></router-view>
			<footers></footers>
		
	</div>

</template>

<script>
	import Headers from '../components/Head'
	import Footers from '../components/Foot'
	
	export default {
		name: 'index',
		components: {
			
			Headers,
			Footers,
		}
	}
</script>

<style scoped>
	img {
		vertical-align: top;
	}
	
	ul li {
		list-style-type: none;
	}
	
	a {
		text-decoration: none;
	}
	/*礼拜五头部商标部分.*/
	/*礼拜五头部左边部分*/
	
	.cont {
		margin-top: 20px;
	}
	
	.atop {
		width: 1280px;
		height: 70px;
		background-color: #ebffe8;
		border-bottom: 1px solid green;
		display: flex;
		justify-content: space-between;
	}
	/*礼拜五头部左边*/
	
	.atopLeft {
		display: flex;
		justify-content: space-between;
		height: 40px;
		line-height: 40px;
	}
	
	.atopLeft li:nth-child(2) {
		font-size: 35px;
		color: #69a55f;
	}
	
	.atopLeft li:nth-child(3) {
		font-size: 30px;
		color: #bac2b9;
	}
	/*礼拜五头部右边部分.*/
	
	.atopRight {
		display: flex;
		justify-content: space-between;
		height: 40px;
		line-height: 40px;
	}
	
	.atopRight li:nth-child(1) {
		font-size: 35px;
		color: #69a55f;
	}
	
	.atopRight li:nth-child(2) {
		width: 60px;
		height: 40px;
		background-color: #f08200;
		text-align: center;
		line-height: 40px;
		border-radius: 5px;
		font-size: 22px;
		color: white;
	}
	
	.atopRight li:nth-child(3) {
		width: 60px;
		height: 40px;
		background-color: #f08200;
		text-align: center;
		line-height: 40px;
		border-radius: 5px;
		font-size: 22px;
		color: white;
	}
	
	.atopRight li:nth-child(4) {
		width: 22px;
		text-align: center;
		color: #f08200;
	}
	
	.atopRight li:nth-child(5) {
		width: 60px;
		height: 40px;
		background-color: #f08200;
		text-align: center;
		line-height: 40px;
		border-radius: 5px;
		font-size: 22px;
		color: white;
	}
	
	.atopRight li:nth-child(6) {
		width: 22px;
		text-align: center;
		color: #f08200;
	}
	
	.atopRight li:nth-child(7) {
		width: 60px;
		height: 40px;
		background-color: #f08200;
		text-align: center;
		line-height: 40px;
		border-radius: 5px;
		font-size: 22px;
		color: white;
	}
	
	.atopRight a .atopMore {
		font-size: 25px;
		color: #a4ada3;
	}
	/*轮播图部分的内容*/
	
	#awind {
		margin: 0 auto;
		width: 1280px;
		height: 434px;
		background-color: red;
		/*border: 1px solid black;*/
		overflow: hidden;
		position: relative;
	}
	
	#acontenta {
		width: 2262px;
		height: 434px;
		display: flex;
		/*font-size: 0;*/
		justify-content: space-between;
		position: absolute;
	}
	
	#acontenta .aid {
		width: 305px;
		height: 434px;
	}
	/*轮播图下边的span部分*/
	
	#acontentb {
		width: 118px;
		height: 10px;
		margin: 40px auto;
		display: flex;
		justify-content: space-between;
	}
	
	#acontentb .aida {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: gray;
	}
	
	#acontentb .aida:hover {
		background-color: green;
	}
	/*轮播图下边的内容详细情况*/
	
	.atopa {
		width: 1280px;
		height: 70px;
		margin: 0 auto;
		padding-top: 30px;
		background-color: #ebffe8;
		border-bottom: 1px solid green;
		display: flex;
		justify-content: space-between;
	}
	
	.atopLefta {
		display: flex;
		justify-content: space-between;
		margin-left: 20px;
		height: 40px;
		line-height: 40px;
	}
	
	.atopLefta li:nth-child(2) {
		font-size: 35px;
		color: #69a55f;
	}
	
	.atopLefta li:nth-child(3) {
		font-size: 25px;
		color: #bac2b9;
	}
	
	.atopRighta {
		font-size: 25px;
		color: #a4ada3;
	}
	/*轮播图下边的内容详细情况的图片以及内容*/
	
	.bcontent {
		margin: 20px auto 0;
		width: 1280px;
		height: 475px;
		display: flex;
		justify-content: space-between;
	}
	
	.bcontent li {
		width: 304px;
		height: 452px;
		border: 1px solid darkgray;
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
	
	.bcontent li .btext .btextc {
		font-size: 22px;
		margin-left: 20px;
		line-height: 50px;
		display: flex;
		justify-content: space-between;
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
		margin-right: 20px;
	}
</style>