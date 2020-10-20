import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		usernames: [
			'mojombo',
			'ivey',
			'pjhyett',
			'wycats',
			'evanphx',
			'vanpelt',
			'wayneeseguin',
			'brynary',
			'kevinclark',
			'defunkt',
			'ezmobius',
			'technoweenie',
			'macournoyer',
			'takeo',
			'caged',
			'topfunky',
			'anotherjesse',
			'roland',
			'lukas',
			'fanvsfan',
			'tomtt',
			'railsjitsu',
			'nitay',
			'kevwil',
			'KirinDave',
			'jamesgolick',
			'atmos',
			'errfree',
			'mojodna',
			'bmizerany'
		]
	},
	mutations: {},
	actions: {},
	getters: {
		userNames: (state) => state.usernames
	},
	modules: {}
});
