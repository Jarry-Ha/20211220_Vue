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
        <button class="btn btn-outline-primary"     @click="moveContactList(contact.no)">삭제</button>
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
        ...contactHelper.mapActions({
            deleteContact: 'deleteContactAction'
        }),
        moveContactList(no) {
            this.deleteContact(no);
            this.$router.push('/ContactGetList')
        },
        moveUpdate() {
            this.$router.push('/ContactUpdate')
        }
    }
}
</script>