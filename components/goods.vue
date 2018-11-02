<template>
	<div class="goods" @click="jumpUrl(goods)">
		<img :src="goods.pic_url||goods.picurl||goods.pic" alt="">
		<div class="goods-info">
			<div class="goods-name">
				{{goods.cprice||goods.coupon_tips||goods.cp}}
			</div>
			<div class="goods-content">
				<div>{{goods.title}}</div>
				<div class="tint">{{goods.time_left}}</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			goods:{
				type:Object,
				default:()=>{
					return {}
				}
			}
		},
		methods:{
			jumpUrl(goods){
				this.$router.push({name:"detail",query:{goods_id:goods.goods_id||goods.enid}})
			}
		}
	}
</script>

<style type="text/css" lang="less">
	.goods{
		box-sizing: border-box;
		padding: 20px;
		width: 20%;
		height: 240px;
		margin-top: 30px;
		cursor: pointer;
		img{
			display: block;
			height: 200px;
		}
		.goods-info{
			box-sizing: border-box;
			padding-left: 5px;
			padding-right: 5px;
			.goods-name{
				color:#ff464e;
				margin-top: 5px;
			}
			.goods-content{
				display: flex;
				margin-top: 5px;
				justify-content: space-between;
			}
		}
	}
	.tint{
		color:#BBB;
	}
</style>