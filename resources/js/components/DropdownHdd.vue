<template>
    <div class="block">
        <span class="demonstration">Harddisk type</span>
        <el-select v-model="value" clearable filterable placeholder="Select" @change="changeType" @clear="cleanFilter">
            <el-option
                v-for="item in options"
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
    name: "DropdownHdd",
    mixins: [mixinFilters],
    computed:{
        ...mapGetters({
            _servers: 'SERVERS'
        })
    },
    data() {
        return {
            servers: [],
            options: [{
                value: 'SAS',
                label: 'SAS'
            }, {
                value: 'SATA',
                label: 'SATA'
            }, {
                value: 'SSD',
                label: 'SSD'
            }],
            value: ''
        }
    },
    methods:{
        changeType(){
            console.log('hddType: ', this.value)
            this.servers = _.filter(this._servers, { 'hddType': String(this.value) });
            this.$store.commit('SET_SERVERS_FILTERED', this.servers)
        }
    }
}
</script>
