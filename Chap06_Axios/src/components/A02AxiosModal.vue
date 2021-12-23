<template>
    <div>
        <h3>A02 Axios Modal</h3>

        <div>
            <div>
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
                            <td><a href="#" v-b-modal.modalGetContact @click="getContact(contact.no)">{{contact.name}}</a></td>
                            <td>{{contact.tel}}</td>
                            <td>{{contact.address}}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <b-button  variant="outline-danger" size="sm" 
                                    @click="$bvModal.show('modalAddContact'); clearContact()">ADD</b-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <!-- Add Contact -->
        <b-modal id="modalAddContact" title="Add Contactt">
            <div>
                Name: <input type="text" class="form-control"       v-model="contact.name" />
                Tel: <input type="text" class="form-control"        v-model="contact.tel" />
                Address: <input type="text" class="form-control"    v-model="contact.address" />
            </div>
            <template #modal-footer>
                <div class="w-100">
                    <b-button variant="primary" size="sm" class="float-right" 
                        @click="$bvModal.hide('modalAddContact'); addContact(contact)">ADD</b-button>
                </div>
            </template>
        </b-modal>


        <b-button  variant="outline-danger" size="sm" @click="$bvModal.show('modalGetContact')">ADD</b-button>
        <!-- Get Contact -->
        <b-modal id="modalGetContact" title="Get Contactt">
            <div>
                Name: <input type="text" class="form-control" disabled      :value="contact.name" />
                Tel: <input type="text" class="form-control" disabled       :value="contact.tel"/>
                Address: <input type="text" class="form-control" disabled   :value="contact.address"/>
            </div>
            <template #modal-footer>
                <div class="w-100">
                    <b-button variant="primary" size="sm" class="float-left" 
                        @click="$bvModal.hide('modalGetContact'); $bvModal.show('modalUpdateContact');">UPDATE</b-button>
                    <b-button variant="danger" size="sm" class="float-left" 
                        @click="$bvModal.hide('modalGetContact');           deleteContact(contact.no)">DELETE</b-button>
                    <b-button size="sm" class="float-right" @click="$bvModal.hide('modalGetContact')">CLOSE</b-button>
                </div>
            </template>
        </b-modal>


        <!-- Update Contact -->
        <b-modal id="modalUpdateContact" title="Update Contactt">
            <div>
                Name: <input type="text" class="form-control"       v-model="contact.name" />
                Tel: <input type="text" class="form-control"        v-model="contact.tel" />
                Address: <input type="text" class="form-control"    v-model="contact.address" />
            </div>
            <template #modal-footer>
                <div class="w-100">
                    <b-button variant="primary" size="sm" class="float-right" 
                        @click="$bvModal.hide('modalUpdateContact');  updateContact(contact)">UPDATE</b-button>
                </div>
            </template>
        </b-modal>


    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            contactList: {pageno: 1, pagesize: 10, totalcount: 0, contacts: []},
            contact: {no: '', name: '', tel: '', address: ''}
        }
    },
    mounted() {
        this.getContactList()
    },
    methods: {
        getContactList: function(no, size) {
            axios.get( '/api/contacts/', {params: {pageno: no || 1, pagesize: size || 10}} )            // ?pageno=1&pagesize=10
            .then( resp => {
                // console.log(resp.data);
                this.contactList = resp.data;
            })
            .catch( error => console.error(error) )
        },
        getContact: function(no) {
            axios.get( '/api/contacts/' + no )
            .then( resp => {
                // console.log(resp.data);
                this.contact = resp.data;
            } )
            .catch( error => console.error(error) )
        },
        updateContact: function(contact) {
            axios.put( '/api/contacts/' + contact.no, contact )
            .then( () => this.getContactList() )
            .catch( error => console.error(error) )
        },
        deleteContact: function(no) {
            axios.delete( '/api/contacts/' + no )
            .then( () => this.getContactList(1, 10) )
            .catch( error => console.error(error) )
        },
        clearContact() {
            this.contact = {no: '', name: '', tel: '', address: ''};
        },
        addContact: function(data) {
            // post
            axios.post( '/api/contacts/', data )
            .then( () => this.getContactList(1, 10) )
            .catch( error => console.error(error) )
        },
    }
}
</script>