<template>
	<div class="goodslist">
		<header>
			<div class="new-goods">今日新品</div>
			<div class="update-info">每天10点上新</div>
		</header>
		<section class="goods-container">
			<Goods v-for = "(item,key) in goodsList" :goods="item" :key="index" />
		</section>
		<footer>
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="1300">
			</el-pagination>
		</footer>
		
	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	import Goods from "./goods.vue"
	export default{
		components:{
			Goods
		},
		props:{
			goodsList:{
				type:Array,
				default:()=>{
					return []
				}
			}
		}
	}
</script>

<style type="text/css" lang="less">
@color:#ff464e;
	.el-main{
		overflow: hidden;
	}
	.goodslist{
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
		footer{
			position: relative;
			width: 100%;
			height: 30px;
			margin-top: 60px;
		}
	}
	.el-pagination{
		position: absolute;
		left:30%;
	}
	.el-pagination.is-background .el-pager li:not(.disabled).active{
		background-color: @color
	}
	.goods-container{
		display: flex;
		flex-wrap: wrap;
	}
</style>