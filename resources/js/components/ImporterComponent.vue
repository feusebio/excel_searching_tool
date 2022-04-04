<template>
    <div class="container">
        <div>
            <h2>Servers importer file</h2>
            <hr/>
            <label>File
                <input type="file" @change="handleFileUpload( $event )"/>
            </label>
            <br>
            <button v-on:click="submitFile()">Submit</button>
        </div>
        <hr>
        <AdvancedFilter></AdvancedFilter>
        <hr>
        <VueQuintable :loading="loading" :config="config" :rows="remoteRows">
            <template v-slot:loading>
                <div class="text-center py-3 mb-3 text-white bg-success">
                    Loading... <font-awesome-icon class="ml-3" icon="circle-notch" spin></font-awesome-icon>
                </div>
            </template>
        </VueQuintable>
    </div>
</template>

<script>

import AdvancedFilter from "./AdvancedFilter";
export default {
    components: {AdvancedFilter},
    data(){
        return {
            file: '',
            loading:false,
            remoteRows: [],
            config: {
                columns: [
                    {headline: 'model'},
                    {headline: 'ram'},
                    {headline: 'hdd'},
                    {headline: 'location'},
                    {headline: 'price'}
                ],
            },
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
                let rows = [];
                _.forEach(data.data, function(value) {
                    var cell = [
                        {'text' : value.model},
                        {'text' : value.ram},
                        {'text' : value.hdd},
                        {'text' : value.location},
                        {'text' : value.price}
                    ]
                    rows.push(cell);
                });

                console.log('DATA: ', rows);
                this.remoteRows = rows;
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
