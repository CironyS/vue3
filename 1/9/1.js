// 根组件
const app = Vue.createApp({
	data() {
		return {
			name: '根组件-父亲',
		};
	},
	template: `<div>{{name}} - <xj/></div>`,
});

// 子组件
app.component('xj', {
	data() {
		return {
			name: '向军大叔',
		};
	},
	template: `<h2 style="background:red;color:white">{{name}}</h2>`,
});

app.mount('#app');
