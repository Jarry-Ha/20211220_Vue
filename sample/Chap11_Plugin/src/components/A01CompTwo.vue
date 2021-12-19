<template>
    <div>
        <h3>{{title}}</h3>
        <div>
            Num: 
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            title: 'Component Two',         // component가 우선한다.
        }
    }
}
</script>