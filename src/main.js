import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入对话框组件
//import VuejsDialog from 'vuejs-dialog'
//引入对话框组件样式
//import 'vuejs-dialog/dist/vuejs-dialog.min.css'

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'


//Vue.use(VuejsDialog)
//让VUe使用axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')