<template>
  <div>
    <h3>A00Comp.vue</h3>
    <div>
      Title: {{title}}<br>
      <img src="/images/tree.jpg" alt="사진">
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