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
        url: 'https://instagram-redesign-sage.vercel.app',
        title: 'Instagram Redesign',
        description: 'Rediseño de instagram',
        stack: [ 'Next', 'Styled Components' ],
        img: require('~/assets/projectsImg/instagram-redesign.png'),
        repository: 'https://github.com/ScriptKev/instagram-redesign'
      },
      {
        url: 'https://lcpcaracas.org',
        title: 'La Casa de mi Padre',
        description: 'Iglesia cristana - La Casa de mi Padre',
        stack: [ 'Vue', 'Vuetify', 'Sass' ],
        img: require('~/assets/projectsImg/lcp-web.png'),
        repository: 'https://github.com/ScriptKev/LCP'
      },
      {
        url: 'https://tequegi.ml/',
        title: 'TequeGi',
        description: 'Tienda virtual hecha en Nextjs',
        stack: [ 'Nextjs', 'Emotion' ],
        img: require('~/assets/projectsImg/tequegi.png'),
        repository: 'https://github.com/ScriptKev/tequegi-ccs',
      },
      {
        url: 'https://rick-and-morty-indol.vercel.app/',
        title: 'Rick And morty',
        description: 'Pagina de rick and morty',
        stack: [ 'React', 'Styled Components', 'Typescript', 'Graphql' ],
        img: require('~/assets/projectsImg/rick-and-morty.png'),
        repository: 'https://github.com/ScriptKev/rick-and-morty',
      },
      {
        url: 'https://techgroup.ga/',
        title: 'Blog Project University',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue non nisi dictum pretium.',
        stack: [ 'Nextjs', 'Emotion' ],
        img: require('~/assets/projectsImg/blog-wiki-project.png'),
        repository: 'https://github.com/ScriptKev/blog-wiki-project'
      },
      {
        url: 'https://github.com/ScriptKev/platzi-badges-hooks',
        title: 'Platzi Badges Hooks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue non nisi dictum pretium.',
        stack: [ 'Vue', 'Vuetify', 'Sass' ],
        repository: 'https://github.com/ScriptKev/platzi-badges-hooks',
        img: require('~/assets/projectsImg/platzi-badge-hooks.png'),
      },
      {
        url: 'https://manage-vue.vercel.app/',
        title: 'Manage Vue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue non nisi dictum pretium.',
        stack: [ 'Vue', 'Vuetify', 'Sass' ],
        img: require('~/assets/projectsImg/manage-vue.png'),
        repository: 'https://github.com/ScriptKev/ManageVue',
      },
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
  },

  created () {
    if (process.client) {
      window.scrollTo(0, 0);
    }
  },
}
</script>
