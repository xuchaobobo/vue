import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/orderList.js'
Vue.use(Vuex)
export default new Vuex.Store({
	modules:{
		orderList
	}
})