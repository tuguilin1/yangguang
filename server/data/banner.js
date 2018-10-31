import Router from "koa-router";
import {getBanner,getData} from "../util/getdata.js"
import {getPageData} from "../util/getdata.js"
const router = new Router({
	prefix:"/data"
});

router.get("/banner",async (ctx)=>{
	let data = await getBanner();
	if(data == "err"){
		ctx.status=500;
		ctx.body = {
			status:0,
			message:"no data"
		}
	}else{
		ctx.status = 200;
		ctx.body = JSON.parse(data).adsInfo.slide_ads.config.slide
	}
})

router.get("/pagedata",async (ctx)=>{
	let index = ctx.query.page
	let data = await getPageData(index);
	ctx.status = 200;
	ctx.body = data
})

router.get('/',async (ctx)=>{
	let url = ctx.query.url;
	let data = await getData(url);
	if(data === "err"){
		ctx.status = 404;
		ctx.body = {
			status:0,
			data:"err"
		}
	}else{
		// let _data = JSON.parse(data).data?JSON.parse(data).data.goods:JSON.parse(data).goods;
		let _data
		if(!JSON.parse(data).data){
			_data = JSON.parse(data).goods;
		}else if(!JSON.parse(data).data.goods){
			_data = JSON.parse(data).data.list
		}else{
			_data = JSON.parse(data).data.goods
		}
		ctx.status=200
		ctx.body={
			status:1,
			data:_data
		}
	}
})

export default router