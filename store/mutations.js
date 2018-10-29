import * as type from "./mutation-type.js"

const mutations={
	[type.SET_DATA](state,data){
		state.dataList = data
	}
}

export default mutations