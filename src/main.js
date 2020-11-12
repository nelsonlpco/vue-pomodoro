import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import i18n from './globalization/languages';

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
