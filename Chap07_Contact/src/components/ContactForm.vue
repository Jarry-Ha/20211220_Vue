
<template>
  <div class="modal">
    <div class="form">
      <h3 class="heading">:: {{title}}</h3>
      <div class="form-group"                                   v-show="mode !== 'add'">
        <label>일련번호</label>
        <input type="text" name="no" class="long" disabled      :value="contact.no">
      </div>
      <div class="form-group">
        <label>이름</label>
        <input type="text" name="name" class="long" placeholder="이름을 입력하세요" ref="name"  v-model="contact.name">
      </div>
      <div class="form-group">
          <label>전화번호</label>
          <input type="text" name="tel" class="long" placeholder="전화번호를 입력하세요"         v-model="contact.tel">
      </div>
      <div class="form-group">
          <label>주 소</label>
          <input type="text" name="address" class="long" placeholder="주소를 입력하세요"        v-model="contact.address">
      </div>
      <div class="form-group">
          <div>&nbsp;</div>
          <input type="button" class="btn btn-primary" :value="btnTitle"   @click="updateContact(contact)">
          <input type="button" class="btn btn-primary" value="취 소"        @click="cancelEvent">
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from './EventBus.vue'

export default {
  props: {
    mode: String,
    contact: {
      type: Object,
      default: function() {
        return {no: '', name: '', tel: '', address: ''}
      }
    }
  },
  computed: {
    title() {
      return this.mode === 'add' ? '게시물 추가' : '게시물 수정'
    },
    btnTitle() {
      return this.mode === 'add' ? '추가' : '수정'
    }
  },
  methods: {
    cancelEvent() {
      EventBus.$emit('cancelEvent')
    },
    updateContact(contact) {
      if(this.mode === 'add') {
        EventBus.$emit('addContactEvent', contact);
      } else if(this.mode === 'update') {
        EventBus.$emit('updateContactEvent', contact);
      }
    }  
  }
}
</script>


<style scoped>
  .modal { display: block; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); }
  .form { background-color: white; margin:100px auto; max-width: 400px; min-width: 200px; font: 13px "verdana"; padding: 10px 10px 10px 10px;  }
  .form div { padding: 0;  display: block;  margin: 10px 0 0 0; }
  .form label{ text-align: left; margin:0 0 3px 0;  padding:0px; display:block; font-weight: bold; }
  .form input, textarea, select { box-sizing: border-box; border:1px solid #BEBEBE; padding: 7px; margin:0px; outline: none;  }
  .form .long { width: 100%; }
  .form .button{ background: #2B798D; padding: 8px 15px 8px 15px; border: none; color: #fff; }
  .form .button:hover { background: #4691A4; }
  .form .heading { background: #33A17F; font-weight: 300; text-align: left; padding : 20px; color: #fff; margin:5px 0 30px 0; padding: 10px; min-width:200px; max-width:400px; }
</style>
