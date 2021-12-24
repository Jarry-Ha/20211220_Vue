<template>
    <div class="container-fluid">
        <h3>Get Contact</h3>

        <div>
            Name: <input type="text" class="form-control" disabled      :value="contact.name"/>
            Tel: <input type="text" class="form-control" disabled       :value="contact.tel"/>
            Address: <input type="text" class="form-control" disabled   :value="contact.address"/>
        </div>
        <br />
        <button class="btn btn-outline-primary"     @click="moveUpdate">수정</button>
        <button class="btn btn-outline-primary">삭제</button>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const contactHelper = createNamespacedHelpers('contact');

export default {
    computed: {
        ...contactHelper.mapGetters({
            contact: 'getContact'
        })
    },
    methods: {
        moveUpdate() {
            this.$router.push('/ContactUpdate')
        }
    }
}
</script>