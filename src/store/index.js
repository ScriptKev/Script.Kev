import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        clientDomain: {
            name: '',
            ext: '',
            businessName: '',
            webType: '',
        }
    },
    actions: {
    },
    modules: {
    }
})
