# Chap04_Component

## A00Comp

Vue-Cil 의 기본 포맷

```html
// App.vue
<template>
  <div>
    <A00Comp></A00Comp>
  </div>
</template>

<script>
import A00Comp from './components/A00Comp.vue'

export default {
  components: { A00Comp,
  },
}
</script>
```

```html
//A00Comp.vue
<template>
  <div>
    <h3>A00Comp.vue</h3>
    <div>
      Title: {{title}}<br>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'A00 Component'
    }
  }
}
</script>
```

## A04Slot

```html
// A04Slot.vue
<slot>전달한 값이 없으면, 기본값으로 이 내용이 표시된다. (필수는 아님. 필요에 따라 설정)</slot>
```

## A05SlotName

- slot에 name 값을 부여해 해당 위치에 슬롯을 끼워넣는 방식

## EventBus

- vue-cli의 EventBus
