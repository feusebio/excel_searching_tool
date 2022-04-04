<template>
    <div class="block">
        <span class="demonstration">RAM</span>
        <el-checkbox-group v-model="checkList">
<!--            2GB, 4GB, 8GB, 12GB, 16GB, 24GB, 32GB, 48GB, 64GB, 96GB-->
            <el-checkbox label="2GB"></el-checkbox>
            <el-checkbox label="4GB"></el-checkbox>
            <el-checkbox label="8GB"></el-checkbox>
            <el-checkbox label="12GB"></el-checkbox>
            <el-checkbox label="16GB"></el-checkbox>
            <el-checkbox label="24GB"></el-checkbox>
            <el-checkbox label="32GB"></el-checkbox>
            <el-checkbox label="48GB"></el-checkbox>
            <el-checkbox label="64GB"></el-checkbox>
            <el-checkbox label="96GB"></el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {
    name: "Checklist",
    data () {
        return {
            checkList: ['selected and disabled','Option A']
        };
    }
};
</script>
