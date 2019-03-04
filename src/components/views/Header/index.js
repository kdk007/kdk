import HeaderComponent from './index.vue'

const myHeader={
	install:function(Vue){
		Vue.component('myHeader',HeaderComponent)
	}
}
export  default myHeader