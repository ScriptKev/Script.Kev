<template>
  <form>
    <h4>Contacto</h4>
    <inputFormServices
      inputType="textInput"
      inputName="input"
      :inputRequired="false"
      inputPlaceHolder="Esto es un Input..."
    />
  </form>
</template>

<style lang="scss" scoped>
form {
  width: 100%;
  height: 100%;
}
</style>

<script>
import inputFormServices from '~/components/PxServicesForm/inputFormServices'

export default {
  name: 'PxServicesForm',
  components: { inputFormServices }
}
</script>
