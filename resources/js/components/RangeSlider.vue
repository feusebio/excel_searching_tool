<template>
    <div class="block">
        <span class="demonstration">Storage</span>
        <el-slider
            v-model="value"
            input-size="mini"
            range
            @change="changeCapacity"
            :show-tooltip="false"
            :marks="marks"
            :max="11"
            show-stops>
        </el-slider>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "RangeSlider",
    computed:{
        ...mapGetters({
            _servers: 'SERVERS'
        })
    },
    data() {
        return {
            value: [0, 5],
            marks: {
                // 0, 250GB, 500GB, 1TB, 2TB, 3TB, 4TB, 8TB, 12TB, 24TB, 48TB, 72TB
                0: '0',
                1: '250GB',
                2: '500GB',
                3: '1TB',
                4: '2TB',
                5: '3TB',
                6: '4TB',
                7: '8TB',
                8: '12TB',
                9: '24TB',
                10: '48TB',
                11: {
                    style: {
                        color: '#1989FA'
                    },
                    label: this.$createElement('strong', '72TB')
                }
            }
        }
    },
    methods:{
        changeCapacity(range){
            console.log('Min: ', range[0])
            console.log('Max: ', range[1])

            let minCapacity = 0
            let maxCapacity = 0

            switch (range[0]){
                case 1: minCapacity = 250 * 1024
                    break
                case 2: minCapacity = 500 * 1024
                    break
                case 3: minCapacity = 1 * 1024 * 1000;
                    break
                case 4: minCapacity = 2 * 1024 * 1000;
                    break
                case 5: minCapacity = 3 * 1024 * 1000;
                    break
                case 6: minCapacity = 4 * 1024 * 1000;
                    break
                case 7: minCapacity = 8 * 1024 * 1000;
                    break
                case 8: minCapacity = 12 * 1024 * 1000;
                    break
                case 9: minCapacity = 24 * 1024 * 1000;
                    break
                case 10: minCapacity = 48 * 1024 * 1000;
                    break
                case 11: minCapacity = 72 * 1024 * 1000;
                    break
            }

            switch (range[1]){
                case 1: maxCapacity = 250 * 1024
                    break
                case 2: maxCapacity = 500 * 1024
                    break
                case 3: maxCapacity = 1 * 1024 * 1000;
                    break
                case 4: maxCapacity = 2 * 1024 * 1000;
                    break
                case 5: maxCapacity = 3 * 1024 * 1000;
                    break
                case 6: maxCapacity = 4 * 1024 * 1000;
                    break
                case 7: maxCapacity = 8 * 1024 * 1000;
                    break
                case 8: maxCapacity = 12 * 1024 * 1000;
                    break
                case 9: maxCapacity = 24 * 1024 * 1000;
                    break
                case 10: maxCapacity = 48 * 1024 * 1000;
                    break
                case 11: maxCapacity = 72 * 1024 * 1000;
                    break
            }



            this.servers = _.filter(this._servers, function(server) {
                return server.storageCapacity >= minCapacity && server.storageCapacity <= maxCapacity
            });
            
            console.log('List: ', this.servers)
            this.$store.commit('SET_SERVERS_FILTERED', this.servers)
        }
    }
}
</script>
