<template>
	<div class="header">
		<nav class="top-head">
			<div><nuxt-link to = "/login">登录</nuxt-link></div>
			<div>免费注册</div>
			<div>我的订单</div>
			<div>商家入驻</div>
			<div>购物车</div>
			<div>客户服务</div>
		</nav>
		<header>
			<div class="app-name">
				阳光
			</div>
			<activity-tag></activity-tag>
			<div class="header-search">
				<div><input type="search" class="search" name=""></div>
				<div class="btn-search"></div>
			</div>
		</header>
		<nav class="bottom-nav" @click="jumUrl">
			<div :class="activeNum==0?'active':'not-active'">首页</div>
			<div :class="activeNum==1?'active':'not-active'">品牌折扣</div>
			<div :class="activeNum==2?'active':'not-active'">9.9包邮</div>
			<div :class="activeNum==3?'active':'not-active'">即将上线</div>
		</nav>
	</div>

</template>

<script type="text/javascript">
	import activityTag from "@/components/activityTag"
	export default{
		components:{
			activityTag
		},
		data(){
			return{
				activeNum:0
			}
		},
		methods:{
			jumUrl(e){
				switch(e.target.innerHTML){
					case "首页":
						this.activeNum = 0;
						break;
					case "品牌折扣":
						this.activeNum = 1;
						break;
					case "9.9包邮":
						this.activeNum = 2;
						break;
					case "即将上线":
						this.activeNum = 3;
						break

				}
			}
		}
	}
</script>

<style type="text/css" lang="less">

	@color:#ff464e;
	.el-header{
		padding: 0;
	}
	.header{
		margin:0;
		padding: 0;
		.top-head{
			width: 100%;
			display: flex;
			box-sizing: border-box;
			padding-left: 65%;
			height: 30px;
			background: #f6f6f6;
			div{
				font-size: 12px;
				margin-left: 8px;
				margin: 8px;
				cursor: pointer;
			}
		}
		header{
			box-sizing: border-box;
			padding-left: 5%;
			padding-right: 5%;
			padding-top: 10px;
			display: flex;
			height: 60px;
			justify-content:space-between;
			.app-name{
				min-width: 100px;
				font-size: 40px;
				line-height: 60px;
				color:@color;
				cursor: pointer;
			}
			.header-search{
				display: flex;
				box-sizing: border-box;
				padding-top: 12px;
			}
			.search{
				border: none;
				background: #efefef;
				height: 35px;
				outline: none;
			}
			.btn-search{
				width: 35px;
				height: 35px;
				background:@color url("../assets/搜索--1.png") no-repeat;
				background-size: 15px 15px;
				background-position: 10px 10px;
			}
		}
		.bottom-nav{
			box-sizing: border-box;
			padding-left: 5%;
			display: flex;
			height: 40px;
			border-bottom:2px solid @color;
			margin-top: 20px;
			div{
				margin-right: 30px;
				font-size: 15px;
				height: 40px;
				padding-left: 25px;
				padding-right: 25px;
				line-height: 40px;
				border-top-left-radius:5px;
				border-top-right-radius:5px;
				cursor: pointer;
			}
			.not-active:hover{
				color:@color;
			}
			.active{
				background: @color;
				color:white;
			}
		}
	}
</style>
