<template>
  <div class="card-body">
    <h1>Chap04 Component</h1>

    사용자 정의 태그는 반드시 종료태그가 있어야 한다.<br>
    태그명, 속성명, 이벤트명은 - 표기법으로 바꾸지 않고 바로 사용 가능<br>

    <A07DynamicComp></A07DynamicComp><br>

    <A06ScopedSlot>
      <template name="default" slot-scope="one">    <!-- slot props에서 전달한 값을 one이라는 이름으로 참조 -->
        Kor: {{one.kor}}, Eng: {{one.eng}}, Total: {{one.kor + one.eng}}<br>
        Person: {{one.person.name}} / {{one.person.age}}
      </template>
    </A06ScopedSlot>
    <br>
    <A06ScopedSlot>
      <template v-slot:default="two">    <!-- slot-scope은 v-slot으로  -->
        Kor: {{two.kor}}, Eng: {{two.eng}}, Total: {{two.kor + two.eng}}<br>
        Person: {{two.person.name}} / {{two.person.age}}
      </template>
    </A06ScopedSlot>
    <br>
    <A06ScopedSlot>
      <template v-slot:jumsu="two">    <!-- 이름이 있는 경우 해당 이름을 기술 -->
        Kor: {{two.kor}}, Eng: {{two.eng}}, Total: {{two.kor + two.eng}}<br>
        Person: {{two.person.name}} / {{two.person.age}}
      </template>
    </A06ScopedSlot>
    <br>
    <A06ScopedSlot>
      <template v-slot:jumsu="{kor, eng, person, math=100}">    <!-- 디스트럭처링(구조 분해) -->
        Kor: {{kor}}, Eng: {{eng}}, Math: {{math}}, Total: {{kor + eng + math}}<br>
        Person: {{person.name}} / {{person.age}}
      </template>
    </A06ScopedSlot>
    <br>
    

    <A05SlotName>
      <div slot="header">
        <h5>Header</h5>
        <div>Header Content</div>
      </div>
      
      <!-- v-slot은 일반 태그는 사용 불가 template 태그로 사용 v-slot 대신 # 으로 이용 가능, 2.6 -->
      <template v-slot:sidebar>sidebar content</template>
      <template #content>Content </template>

      <!-- 이름을 지정하지 않으면 기본 슬롯에 모두 포함된다 -->
      <div>Footer Content</div>
      <div>Hello World</div>
    </A05SlotName>

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
import A05SlotName from './components/A05SlotName.vue'
import A06ScopedSlot from './components/A06ScopedSlot.vue'
import A07DynamicComp from './components/A07DynamicComp.vue'

export default {
  name: 'App',
  components: { A00Comp, A01Bind, A02Style, A03Module, A04Slot,
    A05SlotName, A06ScopedSlot, A07DynamicComp
  },
}
</script>

<style>

</style>
