<template>
  <div id="app">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios) </p>
    </div>
    
    <component :is="currentView" :contact="contact" ></component>
    <contactList :contactList="contactList"></contactList>
  </div>
</template>

<script>
import EventBus from './components/EventBus.vue'

import ContactList from './components/ContactList.vue'
import AddContact from './components/AddContact.vue'
import UpdateContact from './components/UpdateContact.vue'
import UpdatePhoto from './components/UpdatePhoto.vue'

import { getContactListAction, getContactAction } from './api/contactApi'

export default {
  name: 'App',
  components: {
    ContactList, AddContact, UpdateContact,UpdatePhoto, 
  },
  data: function() {
    return {
      currentView: null,
      contactList: { pageno: 1, pagesize: 5, totalcount: 0, contacts: [] },
      contact: { no: 0, name: '', tel: '', address: '', photo: '' }
    }
  },
  mounted() {
    this.getContactList(1, 10)
  },
  created() {
    EventBus.$on('updateViewEvent', (no) => {
      this.getContact(no);
      this.currentView = 'UpdateContact';
    })
  },
  methods: {
    getContactList: function(no, size) {
      getContactListAction(no, size)
      .then( resp => this.contactList = resp.data )
      .catch( error => console.error(error) )
    },
    getContact: function(no) {
      // console.log(no);
      getContactAction(no)
      .then( resp => this.contact = resp.data )
      .catch( error => console.error(error) )
    },
    addContact: function(contact){
      console.log(contact)
    },
    updateContact: function(contact){
      console.log(contact)
    },
    deleteContact: function(no){
      console.log(no)
    },
    updatePhoto: function(no, file) {
      console.log(no, file);
    },
    changePage: function(page){
      console.log(page)
    },
  }
}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css");

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
