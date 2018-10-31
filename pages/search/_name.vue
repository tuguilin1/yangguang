<template>
	<div class="search-page">
		<header>
			<div class="new-goods">{{$route.params.name}}</div>
			<div class="update-info">每天10点上新</div>
		</header>
		<section class="goods-container">
			<Goods v-for = "(item,index) in goodsList" :goods="item" :key="index" :class="later?'goods-transition':''" />
		</section>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	import Goods from "~/components/goods"
	import {getScrollTop,getScrollHeight,getWindowHeight} from "~/assets/util"
	export default{
		components:{
			Goods
		},
		data(){
			return{
				header:"123",
				page:2,
				later:true
			}
		},
		asyncData(context){
			return axios.get("http://127.0.0.1:3000/data",
				{
					"params":{"url":`https://m.juanpi.com/search?keyword=${encodeURI(context.params.name)}&item=&user_groupids=p8_c4_l4_222&page=1&is_ajax=1&order=&sort=&cat_threeids=&price_range=&filter_id=`}
				}).then((data)=>{
				return{
					goodsList:data.data.data
				}
			})
		},
		methods:{
			handleScroll(){
				console.log(getWindowHeight()+getScrollTop()>getScrollHeight()-300)
				if(getWindowHeight()+getScrollTop()>getScrollHeight()-300){
					window.removeEventListener("scroll",this.handleScroll);
					this.addData()
				}
			},
			async addData(){
				let url = `https://m.juanpi.com/search?keyword=${encodeURI(this.$route.params.name)}&item=&user_groupids=p8_c4_l4_222&page=${this.page++}&is_ajax=1&order=&sort=&cat_threeids=&price_range=&filter_id=`
				let data = await axios.get("http://127.0.0.1:3000/data",{params:{url}});
				
				if(data.data.status){
					this.goodsList = this.goodsList.concat(data.data.data)
				}
				window.addEventListener("scroll",this.handleScroll)
			},
			init(){
				window.addEventListener("scroll",this.handleScroll);
			}
		},
		mounted(){
			this.init()
		}
	}
</script>

<style type="text/css" lang="less">
	@color:#ff464e;
	.search-page{
		min-width: 1200px;
		box-sizing: border-box;
		background:white;
		padding-left: 50px;
		padding-right: 50px;
		header{
			height: 40px;
			line-height: 40px;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			.new-goods{
				font-size: 20px;
				font-weight: bolder;
			}
			.update-info{
				color:#999;
			}
		}
		.goods-container{
			display: flex;
			flex-wrap: wrap;
		}
		.goods-transition{
			animation: goods 1s ;
		}
		@keyframes goods{
			from{
				opacity: 0;
				margin-top: 50px;
			}
			to{
				opacity: 1;
				margin-top: 30px;
			}
		}
	}
</style>