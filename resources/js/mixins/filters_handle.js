import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters({
            _servers: 'SERVERS',
            _initFilters: 'INIT_FILTERS'
        })
    },
    data() {
        return {
            oldData: [],
            newData: [],
            countFilters: 0
        }
    },
    watch: {
        _servers: function(newData, oldData){
            console.log('Mixin-old: ', oldData)
            console.log('Mixin-new: ', newData)
            this.oldData = oldData
            this.newData = newData
        },
        _initFilters: function(){
            console.log('Cleaning')
            this.valueSlider = [0,11],
            this.checkList = [],
            this.value = null
        }
    },
    methods:{
        cleanFilters(){
            console.log('Cleaning...............')
            this.$store.commit('SET_INIT_FILTERS', this.countFilters++)
        },
        clearFilter(){
            this.$store.commit('SET_SERVERS_FILTERED', this.oldData)
        }
    }
}
