import LeftComponent from './index.vue'

const myLeft={
	install:function(Vue){
		Vue.component('myLeft',LeftComponent)
	}
}
export  default myLeft