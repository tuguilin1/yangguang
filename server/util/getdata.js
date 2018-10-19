import request from "request"

const asyncGet = (url)=>{
	const options = {
			  url,
			  headers: {
			    'User-Agent': 'request',
			  }
		  };
	return new Promise((res,rej)=>{
		request(options,(err,response,body)=>{
			if(!err&&response.statusCode === 200){
				res(body)
			}else{
				res("err")
			}
		})
	})
} 

const getBanner = async ()=>{
	const url = "https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4&app_name=zhe&app_version=&platform=&catname=newest_zhe";
	const data = await asyncGet(url);
	return data
}

const getPageData = async (index)=>{
	let url1 = `https://webservice.juanpi.com/api/getGoods?page=${index*3-2}&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp&hasMore=true`
	let url2 = `https://webservice.juanpi.com/api/getGoods?page=${index*3-1}&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp&hasMore=true`
	let url3 = `https://webservice.juanpi.com/api/getGoods?page=${index*3}&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp&hasMore=true`
	let data = await Promise.all([asyncGet(url1),asyncGet(url2),asyncGet(url3)]);
	console.log(typeof data,data.length)
	let len = data.length,newData=[];
	while(len--){
		newData = newData.concat(JSON.parse(data[len]).data.goods)
	}
	return newData
}

const getData = async (url)=>{
	const data = await asyncGet(url);
	return data
}

export {getBanner,getData,getPageData}