<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th style="{width:'10%'}">ID</th>
                    <th>Todo</th>
                    <th style="{width:'10%'}">Complete</th>
                    <th style="{width:'10%'}">Delete</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
</template>

<script>
    const sampleTodos = [
        { id: 1, text: '첫 번째 할 일', done: true },
        { id: 2, text: '두 번째 할 일', done: false },
        { id: 3, text: '세 번째 할 일', done: false },
    ];

    export default {
        
    }
</script>

<style scoped>

</style>
