<template>
	<div class="activity-tag">
		<div class="kaiqiang">10点开抢</div>
		<div class="kanjia">买手砍价</div>
		<div class="yanhuo">验货质量</div>
	</div>
</template>

<script type="text/javascript">
	export default{

	}
</script>

<style type="text/css" lang="less">
	.position{
		background-size: 40px 40px;
		padding-left: 45px;
		background-position: 0px 10px;
		color:#5e5e5e;
	}
	.activity-tag{
		width: 100%;
		display: flex;
		justify-content: space-around;
		width: 500px;
		div{
			font-size: 20px;
			line-height: 60px
		}
		.kaiqiang{
			background:url("../assets/kaiqiang.png") no-repeat;	
			.position()
		}
		.kanjia{
			background:url("../assets/砍价.png") no-repeat;	
			.position()
		}
		.yanhuo{
			background:url("../assets/验货.png") no-repeat;	
			.position()
		}
	}
</style>