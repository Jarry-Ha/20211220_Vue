
<template>
    <div>
        <h5>Home Component</h5>
        <div>
            Today: {{new Date().toLocaleString()}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>