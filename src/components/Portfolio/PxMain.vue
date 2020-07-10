<template>
    <main class="mainPortfolio">
        <section class="mainPortfolio__title">
            <h2>Mis Proyectos</h2>
        </section>

        <section class="mainPortfolio__projects">
            <article class="project" v-for="(p, i) in projects" :key="i">
                <a :href="p.sourceCode.link" target="_blank" rel="noopener noreferrer">
                    <figure class="project__img">
                        <img :src="p.snapshot" :alt="p.title" loading="lazy">
                    </figure>

                    <section class="project__about">
                        <h3> {{ p.title }} </h3>

                        <p v-for="(t, i) in p.tags" :key="i">
                            {{ t }}
                        </p>
                    </section>
                </a>
            </article>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.mainPortfolio {
    height: auto;
    width: 100%;
    margin-top: 50px;
    padding: 0 30px;

    &__title {
        text-align: center;
    }

    &__projects {
        max-width: 1440px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        row-gap: 20px;
        column-gap: 20px;
        margin-top: 60px;
    }

    & .project {
        width: 400px;
        height: 350px;
            position: relative;

        &__img {
            height: 250px;
            // background-image: url('../../static/iconProjects/lcpSnapshot.png');
            // background-repeat: no-repeat;
            // background-position: center;
            // background-size: cover;
            transition: 1s ease-out;

            & img {
                border-radius: 10px;
                width: 100%;
                height: inherit;
                box-shadow: 1px 1px 15px rgba(26, 26, 26, 0.527);
            }

            &:hover {
                transform: scale(0.9);
            }
        }

        &__about {
            position: absolute;
            bottom: 20%;
            width: 70%;
            left: 15%;
            margin: 0 auto 0 auto;
            background-color: rgba(26, 26, 26, 0.349);
            box-sizing: border-box;
            text-align: center;
            border-radius: 10px;
            color: #ebebeb;
            text-shadow: 1px 1px 10px black;
            box-shadow: 1px 1px 10px rgba(26, 26, 26, 0.349);

        }
    }
}

// Media Queries

@media only screen and (min-width: 320px) and (max-width: 880px) {
    .mainPortfolio {

        &__projects {
            grid-template-columns: 1fr;
        }
    }
}

@media only screen and (min-width: 881px) and (max-width: 1340px) {
    .mainPortfolio {

        &__projects {
            grid-template-columns: 1fr 1fr;
        }
    }
}

@media only screen and (min-width: 1341px) {
    .mainPortfolio {

        &__projects {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
}

</style>

<script>
export default {
    name: 'PxMain',
    data () {
        return {
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
    }
}
</script>