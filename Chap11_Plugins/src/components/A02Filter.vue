<template>
    <div>
        <h3>A2 Filter</h3>

        <div>
            Upper: {{upper | uppercase}}<br>
            Abbr: {{abbr | abbr}}<br>
            Abbr: {{abbr | abbr(10, '***') }}<br>
        </div>
        <br>
    </div>
</template>
<script>
import './../modules/filter';

export default {
    data() {
        return {
            upper: 'Hello World',
            abbr: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세',
        }
    },

}
</script>