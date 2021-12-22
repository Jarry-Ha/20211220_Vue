<template>
  <div class="card-body">
    <h3>{{title}}</h3>

    <div id="header">
      <h5>1. 일반적 바인딩</h5>
      data에 있는 변수의 이름을 this 없이 그대로 이름만 참조해서 사용<br />
      <br />

      일반적인 단방향 바인딩: {{ name }}<br />
      함수의 리턴값: {{ onAdd(10, 20) }}<br />
      함수의 리턴값: {{ onMin(10, 5) }} <br />

      <!-- undefined, null, false, 0, NaN => false -->
      자바스크립트의 값이 false인 요소는 화면에 표시되지 않음<br />
      배열: {{ arr[0] }} / {{ arr[1] }} / {{ arr[10] }} <br />
      객체: {{ user.name }} / {{ user.age }} / {{ user.address }} <br />
    </div>
    <br />

    <div>
      <h5>2. 바인딩 연산</h5>
      바인딩 식에서 연산자는 사용 가능<br />

      일반적 연산: {{ 10 + 20 }}<br />
      속성 참조: {{ arr.length }}<br />
      속성 참조 연산: {{ arr.length * 100 }} <br />
      비교 연산: {{ user.name === "NolBu" }} <br />
      비교 연산: {{ arr.length > 4 }} <br />
      삼항 연산: {{ user.name === "NolBu" ? "놀부" : "흥부" }}<br />
    </div>
    <br />

    <div>
      <h5>3. 바인딩 관련 지시자</h5>
      지시자(Directive)라 한다. DOM에서 사용할 수 있는 내장 명령<br />

      v-text: <span v-text="text"></span><br />
      v-html: <span v-html="text"></span><br />
      v-once: <span v-once>{{ text }}</span
      ><br />
      <!-- 변수의 값이 변경되도 1번만 바인딩되고 변경 안되도록 하겠다 -->
      v-pre: <span v-pre>{{ pre }}</span
      ><br />
      <!-- {{}}를 바인딩 표현법인 아닌 일반 텍스트로 사용 -->
      <br />
      <button v-on:click="changeText('Hello World')">Change</button>
      <button @click="changeText('Hi World')">Change</button>
      <br />
    </div>

    <div>
      data에 정의되지 않은 기본형, 참조형 변수를 정의하면 에러.
      <!-- Data에 존재하지 않는 변수: {{num}} -->
      <!-- Data에 존재하지 않는 객체: {{obj && obj.name}} -->
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "A01 Binding 표현식",
      name: "NolBu",
      arr: [10, 11, 100],
      user: { name: "HungBu", age: 20 },
      text: "<b>Hello World</b>",
    };
  },
  methods: {
    // 실행 함수를 정의.
    onAdd: function (x, y) {
      // console.log('일반 함수', this);                  // Vue 객체
      console.log(this.title);
      return x + " + " + y + " = " + (x + y);
    },
    onMin: (x, y) => {
      // console.log('Arrow ', this);                 // window
      // console.log(this.title);                     // this
      return x + " - " + y + " = " + (x - y);
    },
    changeText: function (text) {
      // 내부 data 변수는 this로 참조한다. Arrow 함수는 안됨(this가 window)
      this.text = "<b><i>" + text + "</i></b>";
    },
  },
};
</script>

<style>
  /* scoped가 없으면 전역에서 사용할 수 있는 css */
  bgColor { color: 'black' }
</style>
