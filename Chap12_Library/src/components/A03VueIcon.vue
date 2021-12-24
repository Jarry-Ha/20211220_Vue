<template>
    <div>
        <h3>A03 Vue Icon</h3>

        <div>
            <!-- npm i bootstrap@4 bootstrap-vue
                https://bootstrap-vue.org/docs/icons/#bootstrap-icons
                https://icons.getbootstrap.com/#install
            -->
            <h5>Bootstrap ICON</h5>
            <BIconAlarm variant="success" style="width: 30px; height: 30px"></BIconAlarm>
            <BIconAlignTop style="width: 30px; height: 30px; color: orange;"/>
        </div>
        <br>

        <div>
            <!-- npm i vue-material-design-icons
                https://github.com/robcresswell/vue-material-design-icons
                https://materialdesignicons.com/
            -->
            <h5>Material ICON</h5>
            <MenuIcon fillColor="#FF0000" :size="30" />
            <HomeIcon fillColor="orange" :size="30" />
        </div>
        <br>

        <div>
            <!-- npm i vue-unicons
                https://github.com/antonreshetov/vue-unicons
                https://antonreshetov.github.io/vue-unicons/
                uniAdobe, uniAnchor. 대문자가 있으면 - 표기법으로 변경
            -->
            <h5>Unicon ICON</h5>
            <unicon name="adobe"></unicon>
            <unicon name="anchor" fill="orange" width="30" height="30"></unicon>
        </div>

    </div>
</template>

<script>
import {BIconAlarm, BIconAlignTop} from 'bootstrap-vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'

export default {
    components: {BIconAlarm, BIconAlignTop, MenuIcon, HomeIcon}
}
</script>