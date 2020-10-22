<template>
  <div class="layout">
    <PxNav v-show="!isMobile" />

    <transition name="slide-fade" mode="out-in">
      <Nuxt />
    </transition>

    <PxNavMobile v-show="isMobile" />
  </div>
</template>

<script>
import PxNavMobile from '~/components/PxNavMobile'
export default {
  name: 'DefaultLayout',
  components: { PxNavMobile },
  data: () => ({
    isMobile: false,
  }),

  created () {
    if (process.client) {
      window.scrollTo(0, 0);

      this.handleView();
      window.addEventListener('resize', this.handleView);
    }
  },

  methods: {
    handleView () {
        this.isMobile = window.innerWidth <= 760;
      }
    }
}
</script>

<style lang="scss">
body {
  font-family: 'Inter', -apple-system, sans-serif, "Helvetica Neue", Arial;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #474747;
  background-color: #edecec;
}

.layout {
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(-10px);
  opacity: 0;
}

@media only screen and (max-width: 760px) {
.layout {
  padding-bottom: 0;
  padding-right: 0;
  padding-left: 0;
}
}
</style>
