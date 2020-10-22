<template>
  <section class="projects__grid">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.projects__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-content: center;
}
</style>

<script>
export default {
  name: 'PxProjectGrid'
}
</script>
