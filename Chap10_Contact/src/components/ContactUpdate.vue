<template>
    <div class="container-fluid">
        <h3>Update Contact</h3>

        <div>
            Name: <input type="text" class="form-control" name="name"       :value="contact.name" @input="changeValue" />
            Tel: <input type="text" class="form-control" name="tel"         :value="contact.tel" @input="changeValue"/>
            Address: <input type="text" class="form-control" name="address" :value="contact.address" @input="changeValue"/>
        </div>
        <br />
        <button class="btn btn-outline-primary"     @click="moveContactList(contact)">UPDATE</button>
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
            changeContact: 'changeContactAction',
            updateContact: 'updateContactAction'
        }),
        changeValue(evt) {
            const name = evt.target.name;
            const value = evt.target.value;
            this.changeContact( {name, value} )
        },
        moveContactList(contact) {
            this.updateContact(contact);
            this.$router.push('/ContactGetList')
        }
    }
}
</script>