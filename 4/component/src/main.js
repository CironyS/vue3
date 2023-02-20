import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
/**
 * 添加全局组件：
 * 1.引入全局组件
 * 2.追加到app当中
 */
// 引入全局组件
import Card from './components/Card.vue';
import XInput from './components/XInput.vue';
import XTextarea from './components/XTextarea.vue';

const app = createApp(App);

app.config.unwrapInjectedRef = true;

// 追加到app当中
app.component('card', Card);
app.component('x-input', XInput);
app.component('x-textarea', XTextarea);

app.mount('#app');
