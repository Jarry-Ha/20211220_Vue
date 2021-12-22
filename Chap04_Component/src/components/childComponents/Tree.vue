
<template>
    <div>
        <ul>
            <li v-for="sub in subject" :key="sub.name">
                {{sub.name}}
                <tree :subject="sub.subject"></tree>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'tree',
    props: ['subject']
}
</script>

<style>

</style>