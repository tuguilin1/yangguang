<template>
	<div class="brand-id">
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
				收藏店铺
			</div>
		</header>
		<div class="goods-list">
			<Goods v-for="(item,index) in goodsList" :key="index" :goods="item"></Goods>
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	import Goods from "~/components/goods"
	export default{
		components:{
			Goods
		},
		data(){
			return{
				shopInfo:{}
			}
		},
		methods:{
			init(){
				this.shopInfo = this.$route.query.shopInfo
			}
		},
		mounted(){
			this.init()
		},
		asyncData(context){
			let url = `https://webservice.juanpi.com/api/getBrandGoods?page=1&brand_id=${context.query.shopInfo.goods_id}_${context.query.shopInfo.shop_id}&msort=1&goods_utype=C4&price_range=&cat_threeids=`
			return axios.get("http://127.0.0.1:3000/data",{params:{url}}).then((data)=>{
				return {
					goodsList:data.data.data
				}
			})
		}
	}
</script>

<style type="text/css" lang="less">
	.el-main{
		overflow: inherit;
	}
	.brand-id{
		box-sizing: border-box;
		padding-left: 50px;
		padding-right: 50px;
		min-height: 500px;
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
				height: 20px;
				width: 120px;
				text-align: center;
				border:1px solid #ff464e;
				color:#ff464e;
				line-height: 20px;
				border-radius: 10px;
				cursor: pointer;

			}
			.shop-right:hover{
				background:#ff464e;
				color:white;
			}
		}
		.goods-list{
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>