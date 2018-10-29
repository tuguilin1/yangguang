import axios from "axios"

const actions = {
	async UPDATA({commit},index){
		let data = await axios.get(`http://127.0.0.1:3000/data/pagedata?page=${index}`);
		commit("SET_DATA",data.data)
	}
}

export default actions