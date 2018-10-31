<template>
	<div class="pagenum">
		<section class="container">
	       <goods-list :goods-list="goodsData"></goods-list>
	    </section>
	    <section class="pages">
	        <el-pagination
	          background
	          layout="prev, pager, next"
	          :total="130"
	          @current-change="changePage"
	          :current-page='2'
	          >
	        </el-pagination>
	    </section>

	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	import goodsList from "~/components/goodslist.vue"
	export default{
		components:{
			goodsList
		},
		asyncData(context) {
		    return axios.get(`http://127.0.0.1:3000/data/pagedata?page=${context.route.query.pageNum}`).then((data)=>{
		      return {
		        "goodsData":data.data
		      }
		    })
		},
		methods:{
			async changePage(index){
				this.$router.push({path:"/page",query:{pageNum:index}})
				window.location.reload()
			}
		},
	}
</script>

<style type="text/css" lang="less">
	.pagenum{
		min-width:1200px;
      	margin-top: 30px;
        height: 3400px;
        box-sizing: border-box;
        padding-left: 50px;
        padding-right: 50px;
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