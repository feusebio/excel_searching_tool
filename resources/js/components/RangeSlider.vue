<template>
    <div class="block">
        <span class="demonstration">Storage</span>
        <el-slider
            v-model="value"
            range
            :marks="marks">
        </el-slider>
    </div>
</template>

<script>
export default {
    name: "RangeSlider",
    data() {
        return {
            value: [30, 60],
            marks: {
                // 0, 250GB, 500GB, 1TB, 2TB, 3TB, 4TB, 8TB, 12TB, 24TB, 48TB, 72TB
                0: '0',
                10: '250GB',
                20: '500GB',
                30: '1TB',
                40: '2TB',
                50: '3TB',
                60: '4TB',
                70: '8TB',
                80: '12TB',
                90: '24TB',
                100: '48TB',
                110: {
                    style: {
                        color: '#1989FA'
                    },
                    label: this.$createElement('strong', '72TB')
                }
            }
        }
    }
}
</script>
