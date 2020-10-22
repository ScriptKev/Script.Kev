<template>
  <div class="projects">
    <h2>Mis Proyectos</h2>

  <section class="projects__grid">
      <PxProject
        v-for="(p,i) in projects"
        :img="p.img"
        :key="i"
        :url="p.url"
        :title="p.title"
        :description="p.description"
        :stack="p.stack"
        :repository="p.repository"
      />
  </section>
  </div>
</template>

<style lang="scss" scoped>
.projects__grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center
}

@media only screen and (min-width: 320px) and (max-width: 760px) {
  .projects {
    text-align: center;
  }
}
</style>

<script>
export default {
  name: 'Projects',
  transition: 'slide-left',
  data: () => ({
    projects: [
      {
        url: 'https://manage-vue.vercel.app/',
        title: 'Manage Vue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue non nisi dictum pretium.',
        stack: [ 'Vue', 'Vuetify', 'Sass' ],
        img: require('~/assets/projectsImg/manage-vue.png'),
        repository: 'https://github.com/ScriptKev/ManageVue',
      },
      {
        url: 'https://github.com/ScriptKev/platzi-badges-hooks',
        title: 'Platzi Badges Hooks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue non nisi dictum pretium.',
        stack: [ 'Vue', 'Vuetify', 'Sass' ],
        repository: 'https://github.com/ScriptKev/platzi-badges-hooks',
        img: require('~/assets/projectsImg/platzi-badge-hooks.png'),
      },
      // {
      //   url: '/#',
      //   title: 'AquaLux',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue non nisi dictum pretium.',
      //   stack: [ 'Vue', 'Vuetify', 'Sass' ],
      //   img: require('~/assets/projectsImg/platzi-badge-hooks.png'),
      //   repository: 'https://github.com/ScriptKev/'
      // },
      {
        url: 'https://lcp-test.now.sh/',
        title: 'LCP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue non nisi dictum pretium.',
        stack: [ 'Vue', 'Vuetify', 'Sass' ],
        img: require('~/assets/projectsImg/lcp.png'),
        repository: 'https://github.com/ScriptKev/LCP'
      },
      // {
      //   url: '/#',
      //   title: 'Giss App',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue non nisi dictum pretium.',
      //   stack: [ 'Vue', 'Vuetify', 'Sass' ],
      //   img: require('~/assets/projectsImg/giss-app.png'),
      //   repository: 'https://github.com/ScriptKev/'
      // },
      // {
      //   url: '/#',
      //   title: 'TequeGi',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue non nisi dictum pretium.',
      //   stack: [ 'Vue', 'Vuetify', 'Sass' ],
      //   img: require('~/assets/projectsImg/platzi-badge-hooks.png'),
      //   repository: 'https://github.com/ScriptKev/'
      // },
    ]
  }),

  head() {
    return {
      title: 'Scriptkev - Proyectos',
      meta: [
        {
          hid: 'scriptkev proyectos',
          name: 'scriptkev proyectos',
          content: 'scriptkev proyectos'
        }
      ]
    }
  }
}
</script>
