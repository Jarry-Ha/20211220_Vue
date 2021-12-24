<template>
  <div id="app">
    <h3>A09 Style Binding</h3>

    <div style="color: orange; font-size: 24pt">{{ hello }}</div>
    style을 객체 속성으로 표시하는 경우 -가 붙은 이름은 카멜표기법으로 변경해서 기술<br />
    <div
      :style="{
        color: 'orange',
        fontSize: '24pt',
        backgroundColor: 'lightgray',
      }"
    >
      {{ hello }}
    </div>
    <div :style="styleOne">{{ hello }}</div>
    styleOne은 변경 가능, styleTwo는 읽기 전용<br />
    <div :style="[styleOne, styleTwo]" @mouseenter="enterEvent" @mouseleave="leaveEvent">
      {{ hello }}
    </div>
    <br />

    <h3>Class Binding</h3>

    <div class="one" :class="['two', 'three']">{{ hello }}</div>
    <div class="one" :class="[classTwo, 'three']">{{ hello }}</div>
    <div class="one" :class="classTwo">{{ hello }}</div>
    <br />

    <div class="one" :class="{ two: true, three: isChecked }">{{ hello }}</div>
    <div class="one" :class="{ [classTwo]: true, three: isChecked }">
      {{ hello }}
    </div>
    <input type="checkbox" v-model="isChecked" /> Check<br />
    <br />

    <input type="text" class="form-control" v-model="num" :class="info" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      hello: "Hello World!!",
      styleOne: { color: "orange", fontSize: "24pt" },
      classTwo: "two",
      isChecked: true,
      num: 10,
    };
  },
  computed: {
      styleTwo: function() {
          return {backgroundColor: 'lightgray'}
      },
      info: function() {
          if(this.num  > 100) return {warning: true}
          else return {warning: false}
      }
  },
  methods: {
      enterEvent: function() {
          this.styleOne.color = 'white';
      },
      leaveEvent: function() {
          this.styleOne.color = 'orange';
      }
  }
};
</script>

<style scoped>
  .one { color: orange; }
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
  .warning {background-color: orange; color: gray; }

  [v-cloak] { display: none; }
</style>
