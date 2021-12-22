
<template>
    <div>
        <h5>About Component</h5>
        <div>
            Today: {{ new Date().toLocaleString() }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>