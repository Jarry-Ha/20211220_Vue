<template>
  <ContactForm mode="add"></ContactForm>    <!-- default props를 사용하도록 contact를 넘기지 않음 -->
</template>

<script>
import ContactForm from './ContactForm';
export default {
  components: {ContactForm},
  props: ['contact']
}
</script>