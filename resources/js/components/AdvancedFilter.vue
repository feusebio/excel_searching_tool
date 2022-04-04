<template>
    <div class="block">
        <p>
            <RangeSlider></RangeSlider>
        </p>
        </br>
        <p>
            <Checkboxes></Checkboxes>
        </p>
        <p>

        </p>
        <el-row>
            <el-col :span="12">
                <DropdownHdd></DropdownHdd>
            </el-col>
            <el-col :span="12">
                <Location></Location>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import RangeSlider from "./RangeSlider";
import Checkboxes from "./Checkboxes";
import Location from "./Location";
import DropdownHdd from "./DropdownHdd";

export default {
    components: {DropdownHdd, Location, Checkboxes, RangeSlider},
    data() {
        return {}
    }
}
</script>
