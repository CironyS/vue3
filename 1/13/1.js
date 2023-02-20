const app = Vue.createApp({
	data() {
		return {
			name: '向军大叔',
			text: '',
			num: 1,
			tip: '',
		};
	},
	computed: {
		error: {
			get() {
				const message =
					this.num == 0 ? '值不能小于0' : this.num == 10 ? '值不能大于10' : '';
				if (message) return this.tip + message;
			},
			set(tip) {
				this.tip = tip;
			},
		},
	},
	methods: {
		reduce() {
			this.tip = '警告:';
			if (this.num > 0) {
				this.num--;
			}
		},
		addTo() {
			this.tip = '提示:';
			if (this.num < 10) {
				this.num++;
			}
		},
	},
});
app.mount('#app');
