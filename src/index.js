import { createApp } from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css';

const app = createApp(App).mount('#app')

export default app

if (__SNOWPACK_ENV__.MODE === 'development') {
	// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
	// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
	if (undefined /* [snowpack] import.meta.hot */) {
		undefined /* [snowpack] import.meta.hot */.accept();
		undefined /* [snowpack] import.meta.hot */.dispose(() => {
			app.$destroy();
		});
	}
}