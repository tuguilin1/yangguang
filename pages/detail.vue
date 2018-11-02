<template>
	<div class="detail">
		<div class="detail-content">
			<div class="detail-img">
				<img :src="goods.av_zpic">
				<div class="detail-share">
					<span class="save">收藏</span>
					<span class="share">分享</span>
					<span class="report">举报</span>
				</div>
			</div>
			<div class="detail-info">
				<div class="head">{{goods.title}}</div>
				<div class="price">
					<P>￥{{goods.cprice||goods.coupon_tips||goods.cp}}</P>
				</div>
				<ul>
					<li>
						<div class="left">配送：</div>
						<div>24小时发货</div>
					</li>
					<li>
						<div class="left">{{favNam}}：</div>
						<div class="right">
							<div v-for="(item,index) in favData" :key="index" :class="index == favNum?'active':''" @click="changeFav(index)">{{item}}</div>
						</div>
					</li>
					<li>
						<div class="left">{{zavNam}}：</div>
						<div class="right">
							<div v-for="(item,index) in zavData" :key="index" :class="index==zavNum?'active':''" @click="changeZav(index)">{{item}}</div>
							
						</div>
					</li>
					<li >
						<div class="left">数量：</div>
						<div><el-input-number v-model="num1" :min="1" label="描述文字"></el-input-number></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	export default{
			data(){
				return{
					num1:'',
					favNum:0,
					zavNum:0
				}
			},
			asyncData(context){
				let url = `https://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=${context.query.goods_id}&is_pt_goods=0`;
				return axios.get("http://127.0.0.1:3000/data/detailData",{
						params:{url}
					}).then((data)=>{
						let skudata = JSON.parse(data.data.data).skudata;
						let objData = {},favData = [],zavData = [],goods = skudata.sku[0]
						skudata.sku.forEach((item)=>{
							let {av_fvalue,av_zvalue} = item;
							objData[`${av_fvalue}-${av_zvalue}`] = item;
							if(!favData.includes(av_fvalue)){
								favData.push(av_fvalue)
							}
							if(!zavData.includes(av_zvalue)){
								zavData.push(av_zvalue)
							}
						})
						return {
							objData,
							favData,
							zavData,
							favNam:skudata.info.fav_name,
							zavNam:skudata.info.zav_name,
							goods
						}
					})
			},
			methods:{
				changeFav(index){
					if(this.favNum == index){
						return;
					}
					this.favNum = index;
				},
				changeZav(index){
					if(this.zavNum == index){
						return;
					}
					this.zavNum = index;
				}
			},
			computed:{
				type(){
					return this.objData[`${this.favData[this.favNum]}-${this.zavData[this.zavNum]}`]
				}
			},
			watch:{
				type(newtype){
					if(this.goods.sku_id !== newtype.sku_id){
						this.goods = newtype;
						console.log(this.goods)
					}
				}
			}
	}
</script>

<style type="text/css" lang="less">
	.detail{
		min-width: 800px;
		padding-left: 200px;
		padding-right: 200px;
		margin-top: 100px;
		.detail-content{
			display: flex;
			.detail-img{
				width: 350px;
				img{
					display: block;
					height: 400px;
					width: 100%;
				}
				.detail-share{
					width: 100%;
					height: 100px;
					line-height: 100px;
					display: flex;
					justify-content: space-around;
					cursor: pointer;
					.save{
						padding-left: 18px;
						background: url("../assets/收藏.png") no-repeat;
						background-size: 16px 16px;
						background-position: left center;
					}
					.share{
						padding-left: 18px;
						background: url("../assets/分享.png") no-repeat;
						background-size: 18px 18px;
						background-position: left center;
					}
					.report{
						padding-left: 18px;
						background: url("../assets/举报.png") no-repeat;
						background-size: 16px 16px;
						background-position: left center;
					}
				}
			}
		}
		.detail-info{
			flex:1;
			box-sizing: border-box;
			padding-left: 60px;
			padding-right: 150px;
			.head{
				font-size: 20px;
				font-weight: bolder;
				line-height: 40px;
			}
			.price{
				min-height: 50px;
				display: flex;
				justify-content: space-between;
				p:first-child{
					color:#ff464e;
					font-size: 25px;
				}
			}
			ul{
				li{
					list-style: none;
					width: 400px;
					min-height: 30px;
					display: flex;
					.left{
						min-width: 60px;
					}
					.right{
						display: flex;
						flex-wrap: wrap;
						div{
							width: 80px;
							height: 25px;
							border: 1px solid #DDD;
							margin-right: 20px;
							margin-bottom: 10px;
							text-align: center;
							line-height: 25px;
							cursor: pointer;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.active{
							border-color:#ff464e;
							color:#ff464e;
						}
						.active:hover{
							border-color:#ff464e;
						}
						div:hover{
							border-color:#333;
						}
					}
					
				}
			}
		}
	}
</style>