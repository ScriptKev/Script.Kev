<template>
  <input
    :type="inputType"
    :name="inputName"
    class="input"
    :placeholder="inputPlaceHolder"
  >
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: 'inputFormServices',
  props: {
    inputType: {
      type: String,
      required: true,
      default: 'text'
    },
    inputName: {
      type: String,
      required: true,
      default: 'inputName'
    },
    inputPlaceHolder: {
      type: String,
      required: true,
      default: 'input...'
    }
  }
}
</script>
