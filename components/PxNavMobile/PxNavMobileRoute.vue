<template>
  <li class="navMobile__route">
    <nuxt-link to='/about'>
    </nuxt-link>
  </li>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: 'PxNavMobileRoute',
  props: ['to', 'title', 'icon']
}
</script>
