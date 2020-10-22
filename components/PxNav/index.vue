<template>
  <nav class="nav">
    <nuxt-link to="/">
      <PxLogo />
    </nuxt-link>

    <ul class="nav__list">
      <li v-for="(route, i) in routes" :key="i" class="nav__route">
        <nuxt-link class="nav__link" :to="route.to">{{ route.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PxNav',
  data: () => ({
    routes: [
      { title: 'Proyectos', to: '/projects' },
      { title: 'Servicios', to: '/services' },
      { title: 'Conoceme', to: '/about' },
    ]
  })
}
</script>
