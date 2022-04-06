<template>
    <div class="container">
        <div>
            <h2>Servers importer file</h2>
            <hr/>
            <el-upload
                class="upload-demo"
                ref="upload"
                action="#"
                :on-change="handleFileUpload"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">select file</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitFile()">upload to server</el-button>
                <div class="el-upload__tip" slot="tip">Excel file format</div>
            </el-upload>
        </div>


        <hr>
        <AdvancedFilter></AdvancedFilter>
        <hr>
        <el-table
            v-loading="loading"
            :data="_servers"
            :default-sort = "{prop: 'date', order: 'descending'}"
            style="width: 100%">
            <el-table-column
                prop="model"
                label="Model"
                sortable
                width="180">
            </el-table-column>
            <el-table-column
                prop="ram"
                label="RAM"
                width="180">
            </el-table-column>
            <el-table-column
                prop="hdd"
                label="HDD">
            </el-table-column>
            <el-table-column
                prop="location"
                label="Location">
            </el-table-column>
            <el-table-column
                prop="price"
                label="Price">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

import AdvancedFilter from "./AdvancedFilter";
import { mapGetters } from 'vuex';

export default {
    components: {AdvancedFilter},
    computed:{
        ...mapGetters({
            _servers: 'SERVERS_FILTERED'
        })
    },
    data(){
        return {
            file: '',
            loading: false,
            serversFiltered: []
        }
    },

    methods: {
        submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            this.loading = true;

            let res = axios.post( '/import',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(({data}) => {
                console.log('SUCCESS!!');
                this.$store.commit('SET_SERVERS', data.data);
                this.$store.commit('SET_SERVERS_FILTERED', data.data);
                this.loading = false;
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        },

        handleFileUpload(){
            this.file = event.target.files[0];
        }
    }
}
</script>
