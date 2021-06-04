<template>
  <div>
    <textarea v-model.trim="message" maxlength="100" placeholder="50文字以内で入力してください"></textarea>
    <p>{{ message.length }}/100</p>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        message: ""
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>