<template>
  <div class="index">
    <section class="presentation__container">
      <PxProfilePhoto size="100px" />
      <PxPresentation />
    </section>

    <PxStack />
  </div>
</template>

<script>
export default {
  name: 'Index',
  transition: 'slide-left',
  head() {
    return {
      title: 'ScriptKev - Portfolio',
      meta: [
        {
          hid: 'scriptkev portfolio',
          name: 'scriptkev portfolio',
          content: 'scriptkev frontend developer junior'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.home-links {
  a {
    margin-right: 1rem;
    color: red;
  }
}

.presentation__container {
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: flex-start;
}

@media only screen and (min-width: 320px) and (max-width: 923px) {
  .presentation__container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    margin-top: 0;
  }
}
</style>
