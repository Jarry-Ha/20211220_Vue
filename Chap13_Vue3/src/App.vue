<template>
  <div class="card-body">

    <TodoCombine></TodoCombine><br>

    <A05SlotName>
      <template v-slot:header>
        <h5>Header</h5>
        <div>Header Content</div>
      </template>
      
      <!-- v-slot은 일반 태그는 사용 불가 template 태그로 사용 v-slot 대신 # 으로 이용 가능, 2.6 -->
      <template v-slot:sidebar>sidebar content</template>
      <template #content>Content </template>

      <!-- 이름을 지정하지 않으면 기본 슬롯에 모두 포함된다 -->
      <div>Footer Content</div>
      <div>Hello World</div>  
    </A05SlotName><br>

    <A04Slot>
      This is App Content  
    </A04Slot><br>

    <A03StyleModule></A03StyleModule><br>

    <A02Style></A02Style><br>

    <A01Bind></A01Bind>
  </div>
</template>

<script>
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import A01Bind from './components/A01Bind.vue'
import A02Style from './components/A02Style.vue'
import A03StyleModule from './components/A03StyleModule.vue'
import A04Slot from './components/A04Slot.vue'
import A05SlotName from './components/A05SlotName.vue'
import TodoCombine from './components/TodoCombine.vue'

export default {
  name: 'App',
  components: { A01Bind, A02Style, A03StyleModule, A04Slot, A05SlotName, TodoCombine }
}
</script>

<style>

</style>
