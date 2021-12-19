<template>
  <div id="app">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios) </p>
    </div>
    
    <contactList></contactList>
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue'
// import AddContact from './components/AddContact.vue'
// import UpdateContact from './components/UpdateContact.vue'
// import UpdatePhoto from './components/UpdatePhoto.vue'

export default {
  name: 'App',
  components: {
    ContactList, //AddContact, UpdateContact,UpdatePhoto, 
  },
  data: function() {
    return {
      currentView: null,
      contactList: { pageno: 1, pagesize: 5, totalcount: 0, contacts: [] },
      contact: { no: 0, name: '', tel: '', address: '', photo: '' }
    }
  },
  methods: {
    getContactList: function() {
      
    },
    getContact: function(no) {
      console.log(no)
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
