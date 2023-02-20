const app = Vue.createApp({
	data() {
		return {
			name: '向军大叔',
			event: 'mouseenter',
			text: '',
			num: 0,
		};
	},
	methods: {
		add() {
			alert(this.name);
		},
		go(event) {
			// event.preventDefault();
			alert(this.name);
		},
		reduce() {
			this.text = '';
			if (this.num > 0) {
				this.num--;
			} else {
				this.text = '值不能小于0';
			}
		},
		addTo() {
			this.text = '';
			if (this.num < 10) {
				this.num++;
			} else {
				this.text = '值不能大于10';
			}
		},
	},
});
app.mount('#app');
