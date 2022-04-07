<template>
    <div class="block">
        <span class="demonstration">Location</span>
        <el-select v-model="value" clearable filterable placeholder="Select" @change="changeLocation" @clear="clearFilter">
            <el-option
                v-for="item in locations"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mixinFilters from '../mixins/filters_handle'

export default {
    name: "Location",
    mixins: [mixinFilters],
    computed:{
        ...mapGetters({
            _locations: 'LOCATIONS',
            _servers: 'SERVERS_FILTERED'
        })
    },
    data() {
        return {
            value: '',
            locations: [],
            oldData: [],
            newData: [],
            servers: []
        }
    },
    watch: {
        _locations: function(val){
            let _self = this
            this.locations = [] //cleaning

            _.forEach(val, function(location) {
                _self.locations.push({
                        'value' : location,
                        'label' :  location
                })
            });
        }
    },
    methods:{
        changeLocation(){
            this.servers = _.filter(this._servers, { 'location': this.value });
            this.$store.commit('SET_SERVERS_FILTERED', this.servers)
        }
    }
}
</script>
