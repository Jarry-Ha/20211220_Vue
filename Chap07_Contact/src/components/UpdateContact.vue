<template>
  <ContactForm mode="update" :contact="contact"></ContactForm>
</template>

<script>
import ContactForm from './ContactForm';
export default {
  components: {ContactForm},
  props: ['contact']
}
</script>