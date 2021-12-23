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

import { getContactListAction, getContactAction, updateContactAction, addContactAction, deleteContactAction, updatePhotoAction } from './api/contactApi'

export default {
  name: 'App',
  components: {
    ContactList, AddContact, UpdateContact, UpdatePhoto, 
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
    // update contact modal 표시
    EventBus.$on('updateViewEvent', (no) => {
      this.getContact(no);
      this.currentView = 'UpdateContact';
    }),
    // add contact modal 표시
    EventBus.$on('addViewEvent', () => {
      this.currentView = 'AddContact';
    });
    // update photo modal 표시
    EventBus.$on('photoViewEvent', (no) => {
      this.getContact(no);
      this.currentView = 'UpdatePhoto';
    });

    // update 요청
    EventBus.$on('updateContactEvent', (contact) => {
      this.updateContact(contact);
      this.currentView = null;
    });
    // add 요청
    EventBus.$on('addContactEvent', (contact) => {
      this.addContact(contact);
      this.currentView = null;
    });
    // 삭제 요청
    EventBus.$on('deleteContactEvent', (no) => {
      this.deleteContact(no);
    });
    // 사진 변경 요청
    EventBus.$on('updatePhotoEvent', (no, file) => {
      this.updatePhoto(no, file);
      this.currentView = null;
    });

    // page 변경 요청
    EventBus.$on('changePageEvent', (page) => {
      this.getContactList(page)
    })

    // cancel
    EventBus.$on('cancelEvent', () => {
      this.currentView = null;
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
      // console.log(contact);
      addContactAction(contact)
      .then( () => this.getContactList() )
      .catch( (error) => console.error(error) )
    },
    updateContact: function(contact){
      // console.log(contact)
      updateContactAction(contact)
      .then( () => this.getContactList() )
      .catch( (error) => console.error(error) )
    },
    deleteContact: function(no){
      // console.log(no)
      deleteContactAction(no)
      .then( () => this.getContactList() )
      .catch( (error) => console.error(error) )
    },
    updatePhoto: function(no, file) {
      // console.log(no, file);
      updatePhotoAction(no, file)
      .then( () => this.getContactList() )
      .catch( (error) => console.error(error) )
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
