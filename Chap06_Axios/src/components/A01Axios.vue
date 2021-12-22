<template>
    <div>
        <h3>A01 Axios</h3>

        <div>
            <button @click="getContactList">Get ContactList</button>
            <button @click="getContactListAsync">Get ContactList Async</button>
            <button @click="getContact(50)">Get Contact</button>
            <button @click="addContact">Add Contact</button>
            <button @click="updateContact(1640159005416)">Update Contact</button>
            <button @click="deleteContact(1640159005416)">Delete Contact</button>
        </div>

        <div>
            <textarea cols="100" rows="10" readonly :value="data"></textarea>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return { data: null }
    },
    computed: {
        baseURL() {
            return 'http://localhost:5000/contacts/'
        }
    },
    methods: {
        getContactList: function() {
            axios.get( this.baseURL, {params: {pageno:1, pagesize:10}} )            // ?pageno=1&pagesize=10
            .then( resp => {
                // console.log(resp.data);

                // JSON.stringify           JavaScript data => JSON Data로 변경
                // JSON.parse(resp.data)               JSON data => JavaScript Data로 변경
                this.data = JSON.stringify(resp.data, null, 4);
            })
            .catch( error => console.error(error) )
        },
        getContactListAsync: async function() {
            try {
                const data1 = await axios.get( this.baseURL, {params: {pageno:1, pagesize:10}} );
                console.log(data1.data);

                const data2 = await axios.get( this.baseURL, {params: {pageno:2, pagesize:10}} );
                this.data = JSON.stringify(data2.data, null, 4);
            } catch(error) {
                console.log(error)
            }
        },
        getContact: function(no) {
            axios.get( this.baseURL + no )
            .then( resp => this.data = JSON.stringify(resp.data, null, 4) )
            .catch( error => console.error(error) )
        },

        addContact: function() {
            const data = {
                "name":"강감찬",
                "tel":"010-2222-3339",
                "address":"서울시"
            }
            // post
            axios.post( this.baseURL, data )
            .then( resp => this.data = JSON.stringify(resp.data, null, 4) )
            .catch( error => console.error(error) )
        },
        updateContact: function(no) {
            const data = {
                "name":"이순신",
                "tel":"010-2222-2222",
                "address":"서울시"
            }
            // put
            axios.put( this.baseURL + no, data )
            .then( resp => this.data = JSON.stringify(resp.data, null, 4) )
            .catch( error => console.error(error) )
        },
        deleteContact: function(no) {
            // delete
            axios.delete( this.baseURL + no )
            .then( resp => this.data = JSON.stringify(resp.data, null, 4) )
            .catch( error => console.error(error) )
        },
    }
}
</script>