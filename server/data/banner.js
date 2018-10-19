import Router from "koa-router";
import {getBanner} from "../util/getdata.js"
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

export default router