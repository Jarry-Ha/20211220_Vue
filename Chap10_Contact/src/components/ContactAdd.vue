<template>
    <div class="container-fluid">
        <h3>Add Contact</h3>

        Name: <input type="text" class="form-control" name="name"       v-model="contact.name" />
        Tel: <input type="text" class="form-control" name="tel"         v-model="contact.tel" />
        Address: <input type="text" class="form-control" name="address" v-model="contact.address" />
        <br />
        <button class="btn btn-outline-primary"         @click="moveContactList(contact)">ADD</button>
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const contactHelper = createNamespacedHelpers('contact');

export default {
    computed: {
        contact() {
            return {name: '', tel:'', address: ''}
        }
    },
    methods: {
        ...contactHelper.mapActions({
            changeContact: 'changeContactAction',
            addContact: 'addContactAction'
        }),
        moveContactList(contact) {
            this.addContact(contact);
            this.$router.push('/ContactGetList')
        }
    }
}
</script>
