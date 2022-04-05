<template>
    <div class="block">
        <span class="demonstration">Harddisk type</span>
        <el-select v-model="value" filterable placeholder="Select" @change="changeType">
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

export default {
    name: "DropdownHdd",
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
            console.log('T: ', this.value)
            this.servers = _.filter(this._servers, { 'hddType': String(this.value) });
            console.log('Serv: ', this.servers)
            this.$store.commit('SET_SERVERS_FILTERED', this.servers)
        }
    }
}
</script>
