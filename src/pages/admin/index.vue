<template>
  <div>
    <textarea v-model.trim="message" maxlength="3000" placeholder="50文字以内で入力してください"></textarea>
    <p>{{ message.length }}/3000</p>
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
textarea{
  width: 100%;
  height: 300px;
}
</style>