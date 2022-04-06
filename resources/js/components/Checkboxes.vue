<template>
    <div class="block">
        <span class="demonstration">RAM</span>
        <el-checkbox-group v-model="checkList" @change="changeRam">
<!--            2GB, 4GB, 8GB, 12GB, 16GB, 24GB, 32GB, 48GB, 64GB, 96GB-->
            <el-checkbox label="2">2GB</el-checkbox>
            <el-checkbox label="4">4GB</el-checkbox>
            <el-checkbox label="8">8GB</el-checkbox>
            <el-checkbox label="12">12GB</el-checkbox>
            <el-checkbox label="16">16GB</el-checkbox>
            <el-checkbox label="24">24GB</el-checkbox>
            <el-checkbox label="32">32GB</el-checkbox>
            <el-checkbox label="48">48GB</el-checkbox>
            <el-checkbox label="64">64GB</el-checkbox>
            <el-checkbox label="96">96GB</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Checklist",
    computed:{
        ...mapGetters({
            _servers: 'SERVERS'
        })
    },
    data () {
        return {
            checkList: []
        };
    },
    methods:{
        changeRam(){
            console.log('Ram ', this.checkList)
            let _self = this
            this.servers = _.filter(this._servers, function(server) {
                return _.includes(_self.checkList, server.ramCapacity);
            });

            this.$store.commit('SET_SERVERS_FILTERED', this.servers)
        }
    }
};
</script>
