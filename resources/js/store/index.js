import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
let _self = this

const state = {
    servers: [],
    serversFiltered: [],
    locations: [],
    initFilters: 0
}

const getters = {
    SERVERS : state => state.servers,
    SERVERS_FILTERED : state => state.serversFiltered,
    LOCATIONS : state => state.locations,
    INIT_FILTERS : state => state.initFilters
}

const mutations = {
    SET_SERVERS: (state, data) => {
        state.servers = data
        state.locations = _.uniq(_.map(data, 'location'));
    },
    SET_SERVERS_FILTERED: (state, data) => { state.serversFiltered = data },
    SET_INIT_FILTERS: (state, data) => { state.initFilters = data }
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
