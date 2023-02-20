const app = Vue.createApp({
	data() {
		return {
			name: '向军大叔',
			names: '向军大叔1',
			id: 'ids',
			n: 1,
			value: 'id123',
			arg: 'id',
		};
	},
});

const vm = app.mount('#app');

setTimeout(() => {
	vm.$data.n++;
	vm.$data.arg = 'href';
	vm.$data.value = 'https://www.baidu.com';
	vm.$data.names = '向军大叔12 ';
}, 2000);
