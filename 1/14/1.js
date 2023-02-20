const app = Vue.createApp({
	data() {
		return {
			name: '向军大叔',
			event: 'mouseenter',
			text: '',
			num: 0,
		};
	},
	watch: {
		num(newValue, oldValue) {
			this.text =
				newValue == 0 ? '值不能小于0' : newValue == 10 ? '值不能大于10' : '';
		},
	},
	methods: {
		reduce() {
			if (this.num > 0) {
				this.num--;
			}
		},
		addTo() {
			if (this.num < 10) {
				this.num++;
			}
		},
	},
});
app.mount('#app');
