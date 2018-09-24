// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import ElementUi from 'element-ui'
//import '../node_modules/element-ui/lib/theme-chalk/index.css'
//Vue.use(ElementUi)
 
import Vuex from "vuex"
Vue.use(Vuex)

//new
import './scss/total.scss'
import $ from 'jquery'

import mui from './assets/mui/js/mui.min.js'
Vue.prototype.mui = mui
import './assets/mui/js/mui.poppicker.js'
import './assets/mui/js/mui.picker.js'

//
//import "./assets/mui/css/animate.min.css"  
import "./assets/mui/css/mui.min.css"  
import "./assets/mui/css/mui.poppicker.css" 
import "./assets/mui/css/mui.picker.min.css"  

import "./assets/mui/css/icons-extra.css"  
   
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
//vue复制
import VueClipboard from 'vue-clipboard2' 
Vue.use(VueClipboard)


////odd
//import './scss/total.scss'
//import './assets/bootstrap/css/bootstrap.min.css'
//import './assets/bootstrap/js/bootstrap.min'
//import 'font-awesome/scss/font-awesome.scss'


import layout from './models/layout'
import home from './models/home'
import user from './models/user'
import insurance from './models/insurance'

Vue.config.productionTip = false

const store = new Vuex.Store({
	modules:{
		layout:layout,
		home:home,
//		register:user,
		user:user,
		insuranceDetails:insurance,
		insure:insurance,
		order:insurance,
	}
})

Vue.filter('replace', function (input) {
	 return input.slice(5,10)
})
 /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
