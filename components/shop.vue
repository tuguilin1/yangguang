<template>
	<div class="shop">
		<header>
			<div class="shop-info">
				<div class="logo">
					<img :src="shopInfo.logo_url">
				</div>
				<div class="shop-content">
					<p class="shop-name">
						{{shopInfo.title}}
					</p>
					<p class="shop-discount">
						{{shopInfo.coupon_tips}}
					</p>
				</div>
			</div>
			<div class="shop-right">
				<p class="end-time">
					剩余多少天
				</p>
				<p class="goto" @click="jumpUrl(shopInfo)">
					进入专场
				</p>
			</div>
		</header>
		<div class="goods-list">
			<Goods v-for="(items,index) in shopInfo.sub_data" :goods="items" :key="index"></Goods>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Goods from "~/components/goods"
	export default{
		components:{
			Goods
		},
		props:{
			shopInfo:{
				type:Object
			}
		},
		methods:{
			jumpUrl(shopInfo){
				this.$router.push({path:`/brand/${shopInfo.shop_id}`,query:{shopInfo}})
			}
		}
	}
</script>

<style type="text/css" lang="less">
	.shop{
		margin-bottom: 20px;
		header{
			display: flex;
			height: 50px;
			justify-content: space-between;
			.shop-info{
				display: flex;
				.logo{
					margin-right: 10px;
				}
				.shop-content{
					margin-top: 10px;
					.shop-name{
						font-size: 20px;
						font-weight: bolder;
					}
					.shop-discount{
						margin-top: 5px;
						color:#999;
					}
				}
			}
			.shop-right{
				margin-top: 10px;
				margin-right: 20px;
				.goto{
					margin-top: 5px;
					height: 20px;
					width: 120px;
					text-align: center;
					border:1px solid #ff464e;
					color:#ff464e;
					line-height: 20px;
					border-radius: 10px;
					cursor: pointer;
				}
				.goto:hover{
					background:#ff464e;
					color:white;
				}
			}
		}
		height: 350px;
		background:white;
		.goods-list{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
		}
	}
</style>