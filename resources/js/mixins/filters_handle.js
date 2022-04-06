import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters({
            _servers: 'SERVERS'
        })
    },
    methods:{
        cleanFilter(){
            let serversList = _.clone(this._servers);
            this.$store.commit('SET_SERVERS_FILTERED', serversList)
        }
    }
}
