<template>
  <nav class="navMobile">
    <div class="navMobile__container">
      <ul class="navMobile__routes">
        <li class="navMobile__route">
          <nuxt-link class="navMobile__route--wrap" to='/'>
            <PxHomeIcon size="25" color="#0082ff" />
            <small>Inicio</small>
          </nuxt-link>
        </li>

        <li class="navMobile__route">
          <nuxt-link class="navMobile__route--wrap" to='/projects'>
            <PxProjectsIcon size="25" color="#0082ff" />
            <small>Proyectos</small>
          </nuxt-link>
        </li>

        <li class="navMobile__route">
          <nuxt-link class="navMobile__route--wrap" to='/services'>
            <PxServicesIcon size="25" color="#0082ff" />
            <small>Servicios</small>
          </nuxt-link>
        </li>

        <li class="navMobile__route">
          <nuxt-link class="navMobile__route--wrap" to='/about'>
            <PxAboutIcon size="25" color="#0082ff" />
            <small>Conoceme</small>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navMobile {
  margin-top: 30px;
  width: 100vw;
  bottom: 0;
  height: 70px;
  display: flex;
  position: sticky;
  z-index: 1000;
  background-color: white;
  justify-content: center;
  font-weight: bold;

  &__container {
    width: 100%;
    height: 100%;
  }

  &__routes {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 10px;
    // padding-top: 10px;
  }

  &__route {
    margin: 5px 10px;

    &--wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & small {
        color: #474747d5;
      }
    }
  }
}
</style>

<script>
import PxAboutIcon from '~/assets/icons/PxNavMobileIcons/PxAboutIcon'
import PxProjectsIcon from '~/assets/icons/PxNavMobileIcons/PxProjectsIcon'
import PxHomeIcon from '~/assets/icons/PxNavMobileIcons/PxHomeIcon'
import PxServicesIcon from '~/assets/icons/PxNavMobileIcons/PxServicesIcon'

export default {
  name: 'PxNavMobile',
  components: { PxAboutIcon, PxProjectsIcon, PxServicesIcon, PxHomeIcon }
}
</script>
