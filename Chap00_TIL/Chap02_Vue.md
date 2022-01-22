# Chap02_Vue

# A01Binding

1. 일반적 바인딩

```html
일반적인 단방향 바인딩: {{name}}
함수의 리턴값: {{onAdd(10, 20)}}
```

1. 바인딩 연산

```html
속성 참조: {{ arr.length }}
속성 참조 연산: {{ arr.length * 100 }} 
비교 연산: {{ user.name === 'NolBu'}} 
비교 연산: {{ arr.length > 4 }} 
삼항 연산: {{ user.name === 'NolBu' ? '놀부' : '흥부' }}
```

1. 바인딩 관련 지시자

```html
<button v-on:click="changeText('Hello World')">Change</button>
```

```javascript
methods: {                         
    changeText: function(text) {
        this.text = '<b><i>' + text + '</i></b>';
    }
}
```

# A02 Attribute

1. 속성 바인딩:

```html
<input type="text" class="form-control"     v-bind:value="name">
```

1. 양방향 바인딩:

```html
<input type="text" class="form-control" v-model="name">
```

# A03Repeat

v-show, v-if는 패스

```html
<tr v-for="(item, index) in students" :key="index">
    <td>{{index + 1}}</td>
    <td>{{item.name}}</td>
    <td>{{item.age}}</td>
    <td>{{item.kor}}</td>
    <td>{{item.eng}}</td>
</tr>
```

# A04Method

1. Method

```html
onPlus: {{onPlus(10, 20)}}
<!-- @input="changeString" -->
Name: {{name}}
<input type="text" name="name" class="form-control" :value="name" @input="changeString">
```

1. Computed

```html
Computed: {{ total }}     <!-- 함수 형태로 작성했지만 속성으로 사용한다 -->
Methods: {{ totalMethod() }}
Computed Params: {{ totalParam(100) }}
```

# A05Computed

사용법. 테이블 리스트 서치 관련 예시

# A06LifeCycle

라이프 사이클 예시

# A07Event

키 입력, esc, enter, shift 등 관련 이벤트 제어 예시

# A08Form

다양한 필드 예시
(텍스트, 라디오, 싱글 체크박스, 복수 체크박스, 셀렉트(리스트) 박스, 멀티 셀렉트 박스 ...)

# A09StyleClass

- style을 객체 속성으로 표시하는 경우 -가 붙은 이름은 카멜표기법으로 변경해서 기술

# A10Currency

- 환전 시스템 예시
