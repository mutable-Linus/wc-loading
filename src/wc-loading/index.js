import Vue from 'vue'
import Loading from './Loading'

export default {
	install (Vue) {
		Vue.prototype.$loading = {
			show () {},
			hide () {}
		}
	}
}