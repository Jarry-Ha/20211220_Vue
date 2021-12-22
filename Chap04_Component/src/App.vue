<template>
  <div class="card-body">
    <h1>Chap04 Component</h1>

    사용자 정의 태그는 반드시 종료태그가 있어야 한다.<br>
    태그명, 속성명, 이벤트명은 - 표기법으로 바꾸지 않고 바로 사용 가능<br>

    <A04Slot>
      This is App Content 01 
    </A04Slot><br>
    <A04Slot>
      이 내용을 하위 컴퍼넌트가 받아서 처리하도록 한다 => slot
    </A04Slot><br>
    
    <A04Slot></A04Slot><br>

    <A03Module></A03Module><br>

    <A02Style /><br>
    
    <A01Bind></A01Bind><br>

    <A00Comp></A00Comp>
  </div>
</template>

<script>
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

import A00Comp from './components/A00Comp.vue'
import A01Bind from './components/A01Bind.vue'
import A02Style from './components/A02Style.vue'
import A03Module from './components/A03StyleModule.vue'
import A04Slot from './components/A04Slot.vue'

export default {
  name: 'App',
  components: { A00Comp, A01Bind, A02Style, A03Module, A04Slot  },
}
</script>

<style>

</style>
