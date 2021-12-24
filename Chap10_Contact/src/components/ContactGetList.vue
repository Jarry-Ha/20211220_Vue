<template>
    <div class="container-fluid">
        <table class="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Tel</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contactList.contacts" :key="contact.no">
                    <td>{{contact.no}}</td>
                    <td><a href="#" @click="moveContact(contact.no)">{{contact.name}}</a></td>
                    <td>{{contact.tel}}</td>
                    <td>{{contact.address}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const contactHelper = createNamespacedHelpers('contact');

export default {
    mounted() {
        this.getContactList({no:1, size:10})
    },
    computed: {
        ...contactHelper.mapGetters({
            contactList: 'getContactList'
        })
    },
    methods: {
        ...contactHelper.mapActions({
            getContactList: 'getContactListAction',
            getContact: 'getContactAction'
        }),
        moveContact(no) {
            this.getContact(no);
            this.$router.push('/ContactGetItem')
        }
    }    
}
</script>