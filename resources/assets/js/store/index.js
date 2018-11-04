import Vue from 'vue';
import Vuex from 'vuex';
import wizardModule from './modules/wizard';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        wizard: wizardModule,
    },
});
