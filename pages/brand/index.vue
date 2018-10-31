<template>
	<div class="brand">
		<div class="img">
			<img src="http://jp.juancdn.com/juanpi/images/brand/banner_all.jpg?ts=20181022174388" alt="">
		</div>
		<Shop v-for="(item,index) in shopList" :key="index" :shop-info="item"></Shop>
		<section class="pages">
	        <el-pagination
	          background
	          layout="prev, pager, next"
	          :total="130"
	          @current-change="changePage"
	          >
	        </el-pagination>
	    </section>
	</div>
</template>

<script type="text/javascript">
	import Shop from "~/components/shop"
	import axios from "axios"
	export default{
		components:{
			Shop
		},
		asyncData(context){
			console.log(context)
			let url = `http://webservice.juanpi.com/api/getBrandClearanceGoods?cid=ppqc_jingxuan&zhouyi_ids=p8_c4_l4_0&page=${context.query.num}`
			return axios.get("http://127.0.0.1:3000/data",{params:{url}}).then((data)=>{
				return {
					shopList:data.data.data
				}
			})
		},
		methods:{
			changePage(index){
				this.$router.push({path:"/brand",query:{num:index}})
				window.location.reload()
			}
		},
	}
</script>

<style type="text/css" lang="less">
	.img{
		width: 100%;
		img{
			width: 100%;
		}
	}
	.brand{
		box-sizing: border-box;
		padding-left: 50px;
		padding-right: 50px;
		background:#f6f6f6;
		padding-top: 10px;
	}
	.pages{
        height: 50px;
        margin-top: 100px;
        margin-bottom: 50px;
    }
    .el-pagination{
        position: absolute;
        left:35%;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: #ff464e
    }
</style>