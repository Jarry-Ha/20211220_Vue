<template>
    <div>
        <h3>{{title}}</h3>
        <div>
            Num: {{num}}
        </div>
    </div>
</template>
<script>
import localMixin from './../modules/localMixin'

export default {
    mixins: [ localMixin ],
    data: function(){
        return {
            title: 'Component Two',         // component가 우선한다.
        }
    }
}
</script>