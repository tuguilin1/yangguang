<template>
	<div class="search">
		<header>
			<div class="new-goods">{{header}}</div>
			<div class="update-info">每天10点上新</div>
		</header>
		<section class="goods-container">
			<Goods v-for = "(item,index) in goodsList" :goods="item" :key="index" />
		</section>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	export default{
		data(){
			return{
				goodsList:[],
				header:"123",
				page:1
			}
		}
	}
</script>

<style type="text/css" lang="less">
	@color:#ff464e;
	.search{
		box-sizing: border-box;
		background:white;
		header{
			height: 40px;
			line-height: 40px;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding-left: 30px;
			padding-right:10px;
			.new-goods{
				font-size: 20px;
				font-weight: bolder;
			}
			.update-info{
				color:#999;
			}
		}
	}
</style>