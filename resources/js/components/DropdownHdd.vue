<template>
    <div class="block">
        <span class="demonstration">Harddisk type</span>
        <el-select v-model="value" filterable placeholder="Select">
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
export default {
    name: "DropdownHdd",
    data() {
        return {
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
    }
}
</script>
