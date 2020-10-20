import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './../node_modules/bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faLocationArrow,
	faUserFriends,
	faLink,
	faLaptopCode,
	faUser,
	faTag
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLocationArrow);
library.add(faUserFriends);
library.add(faLink);
library.add(faLaptopCode);
library.add(faUser);
library.add(faTag);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
	store,
	render: (h) => h(App)
}).$mount('#app');
