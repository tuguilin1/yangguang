import Vuex from "vuex";
import Vue from "vue"
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import actions from "./action"


Vue.use(Vuex)


let store =()=>{
	return new Vuex.Store({
		  getters,
		  state,
		  mutations,
		  actions
		})
} 

export default store