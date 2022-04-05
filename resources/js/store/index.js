import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
let _self = this

const state = {
    servers: [],
    serversFiltered: []
}

const getters = {
    SERVERS : state => state.servers,
    SERVERS_FILTERED : state => state.serversFiltered,
}

const mutations = {
    SET_SERVERS: (state, data) => { state.servers = data },
    SET_SERVERS_FILTERED: (state, data) => { state.serversFiltered = data },
}

const actions = {
}

export default new Vuex.Store({
    modules: {},
    state,
    getters,
    mutations,
    actions,
    strict: debug
})
