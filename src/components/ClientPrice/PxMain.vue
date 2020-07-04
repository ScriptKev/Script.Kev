<template>
    <main class="mainPrice">
        <section class="mainPrice__title">
            <h2>Crea tu Presupuesto</h2>
        </section>

        <section class="mainPrice__clientData">
            <px-client-form />
        </section>
    </main>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.mainPrice {
    height: auto;
    width: 100%;
    margin-top: 50px;

    &__title {
        text-align: center;
    }

    &__clientData {
        max-width: 1440px;
        margin-top: 5%;
        margin-left: auto;
        margin-right: auto;
    }
}

</style>

<script>
import PxClientForm from './PxClientForm'

export default {
    name: 'PxPreciosMain',
    components: { PxClientForm },
    data () {
        return {
            totalPrice: Number,

            projects:[
               {
                    title: 'LCP',
                    description: 'SPA - Iglesia La Casa de mi Padre',
                    icon: require('@/static/iconProjects/lcpSnapshot.png'),
                    snapshot: require('@/static/iconProjects/lcpSnapshot.png'),
                    status: true,
                    tags: [ 'Sitio Web' ],
                    stackUsed: [
                        { name: 'Vue', logo: require('@/static/stackLogos/Vue.png') },
                        { name: 'Vuetify', logo: require('@/static/stackLogos/Vuetify.png') },
                        { name: 'Vercel', logo: require('@/static/stackLogos/Vercel.svg') },
                    ],
                    roles: [ 'UI/UX Design', 'Cloud Administrator', 'Frontend Developer' ],
                    sourceCode: { link: 'https://lcp-test.now.sh', github: 'https://github.com/Tech-K/LCP' }
                },

                {
                    title: 'Giss-App',
                    description: 'Aplicacion Web - Buscador de productos resguardados en una API',
                    icon: require('@/static/iconProjects/Giss-App.png'),
                    snapshot: require('@/static/iconProjects/gissAppSnapshot.png'),
                    status: false,
                    tags: [ 'WebApp'],
                    stackUsed: [
                        { name: 'Vue', logo: require('@/static/stackLogos/Vue.png') },
                        { name: 'Vuetify', logo: require('@/static/stackLogos/Vuetify.png') },
                        { name: 'Vercel', logo: require('@/static/stackLogos/Vercel.svg') },
                    ],
                    roles: [ 'UI/UX Design', 'Cloud Administrator', 'Frontend Developer' ],
                    sourceCode: { link: 'https://giss-app.now.sh', github: 'https://github.com/Tech-K/Giss-App' }
                },

                {
                    title: 'Cute and Dark',
                    description: 'Diseño de una Landing, practicando metodologias de trabajo con grillas, frames, tipografias, paletas de colores y animaciones.',
                    snapshot: require('@/static/iconProjects/cuteAndDarkSnapshot.png'),
                    status: false,
                    tags: [ 'Web Design'],
                    preview: `<iframe style="border: none; border-radius: 10px;" width="100%" height="100%" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2FzLWnUChahV2gafazeZ1Taa%2FCute-And-Dark%3Fnode-id%3D0%253A1" allowfullscreen=""></iframe>`,
                    stackUsed: [
                        { name: 'Figma', logo: require('@/static/stackLogos/Figma.jpg') },
                        { name: 'HTML', logo: require('@/static/stackLogos/HTML.svg') },
                        { name: 'Sass', logo: require('@/static/stackLogos/Sass.png') },
                        { name: 'Vercel', logo: require('@/static/stackLogos/Vercel.svg') },
                    ],
                    sourceCode: { link: 'https://cute-and-dark.tech-k.now.sh', github: 'https://github.com/Tech-K/Cute-And-Dark' }
                },

                {
                    title: 'CRM',
                    description: 'Aplicacion Web - Destinada a cumplir las funcionalidades de un CRM',
                    icon: require('@/static/iconProjects/CRM.png'),
                    snapshot: require('@/static/iconProjects/CRM.png'),
                    status: false,
                    tags: [ 'WebApp' ],
                    stackUsed: [
                        { name: 'Vue', logo: require('@/static/stackLogos/Vue.png') },
                        { name: 'Vuetify', logo: require('@/static/stackLogos/Vuetify.png') },
                        { name: 'Firebase', logo: require('@/static/stackLogos/Firebase.svg') },
                        { name: 'Vercel', logo: require('@/static/stackLogos/Vercel.svg') },
                    ],
                    roles: [ 'UI Design', 'Frontend Developer', 'Cloud Administrator' ],
                    sourceCode: false
                },
            ],
        }
    },

    methods: {
        checkForm: () => {
            console.log('hola')
        }
    }
}
</script>