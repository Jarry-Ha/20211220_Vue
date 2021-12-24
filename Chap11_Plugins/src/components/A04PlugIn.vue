<template>
    <div>
        <h3>A04 Plugin</h3>

        <div>
            Mixin: {{pluginName}}<br>
            Filter: {{ 'Hellow World' | lowercase }}<br>
            Prototype: {{ onMin(10, 2) }}<br>
            <br>

            <div v-confirmBtn="'ALERT'" >Hello World</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>