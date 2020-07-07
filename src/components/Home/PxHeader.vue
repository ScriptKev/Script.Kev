<template>
    <header class="header">
        <div class="header__grid">
            <section class="presentation__scriptKev">
                <div class="presentation__scriptKev--bg"></div>

                <figure class="presentation__scriptKev--perfil">
                    <img src="@/static/ScriptKev.jpg" alt="ScriptKev">
                </figure>
            </section>

            <section class="scriptKev">
                <div class="scriptKev__title">
                    <h1>
                        Frontend Developer <br />
                        Web Designer
                    </h1>
                </div>

                <div class="scriptKev__description">
                    <p>
                        Hola, soy Kevin Blanco, desarrollador web frontend, apasionado de la tecnologia,
                        y crear cosas increibles en la web.
                    </p>

                    <br />

                    <span> <i> "No se trata de saberlo todo, sino de <strong>Nunca para de Aprender 🚀</strong>" </i> </span>
                </div>

                <div class="scriptKev__stack">
                    <a
                        :href="i.link"
                        class="stackLogo"
                        v-for="i in stackLogos"
                        :key="i.name"
                        >
                            <img :src="i.logo" :key="i.name" v-bind:alt="i.name" width="100%" height="100%" loading="lazy">
                    </a>
                </div>
                <div class="scriptKev__phrase"></div>
            </section>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.header {
    background-color: transparent;
    height: 100vh;
    max-width: 1440px;
    margin: auto;

    &__grid {
        display: grid;
        height: 100%;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:    "scriptkev description";

        & .presentation__scriptKev {
            grid-area: scriptkev;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;

                &--bg {
                    height: 100%;
                    width: 100%;
                    background-image: url('../../static/ScriptKev.jpg');
                    background-repeat: no-repeat;
                    background-position: 50%;
                    opacity: .5;
                    -webkit-filter: blur(20px);
                    filter: blur(20px);
                    background-size: cover;
                    position: relative;
                }

                &--perfil {
                    position: absolute;

                    & img {
                        width: 200px;
                        height: 200px;
                        opacity: 1;
                        border-radius:50%;
                        box-shadow: map-get($Shadows, 'Primary' );
                    }
                }
        }

        & .scriptKev {
            grid-area: description;
            text-align: center;
            margin: auto;

            &__title{
                font-size: 1.2rem;
                margin-top: 30px;
                color: rgba(20, 20, 20, 0.863);
            }

            &__description {
                margin-top: 10px;
                color: rgba(17, 17, 17, 0.63);

                & p {
                    padding: 0 20px;
                    font-weight: 500;
                }
            }

            &__stack {
                margin: 30px 0px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: auto;
                justify-items: center;
                align-content: center;
                gap: 20px 10px;

                & .stackLogo {
                    width: 60px;
                    height: 60px;
                    transition: box-shadow 2s ease 0s, transform 0.5s ease 0s, filter 0.1s ease-in-out 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0s;
                }

                & .stackLogo:hover {
                    transform: scale(1.20);
                }
            }
        }
    }

}
</style>

<script>
export default {
    name: 'PxHeader',
    data () {
        return {
            stackLogos: [
                { name: 'Adobe XD', logo: require('@/static/stackLogos/Adobe-XD.svg'), link: 'https://www.adobe.com/es/products/xd' },
                { name: 'Figma', logo: require('@/static/stackLogos/Figma.jpg'), link: 'https://www.figma.com' },
                { name: 'Framer', logo: require('@/static/stackLogos/Framer.svg'), link: 'https://www.framer.com' },
                { name: 'HTML', logo: require('@/static/stackLogos/HTML.svg'), link: 'https://www.developer.mozilla.org/es/docs/Web/HTML' },
                { name: 'CSS', logo: require('@/static/stackLogos/CSS.svg'), link: 'https://www.developer.mozilla.org/es/docs/Web/CSS' },
                { name: 'JavaScript', logo: require('@/static/stackLogos/JavaScript.svg'), link: 'https://www.developer.mozilla.org/es/docs/Web/JavaScript' },
                { name: 'Sass', logo: require('@/static/stackLogos/Sass.png'), link: 'https://www.sass-lang.com' },
                { name: 'GitHub', logo: require('@/static/stackLogos/GitHub.png'), link: 'https://www.github.com' },
                { name: 'PWA', logo: require('@/static/stackLogos/PWA.png'), link: 'https://www.developer.mozilla.org/es/docs/Web/Progressive_web_apps' },
                { name: 'Wordpress', logo: require('@/static/stackLogos/Wordpress.svg'), link: 'https://es.wordpress.com/' },
                { name: 'NPM', logo: require('@/static/stackLogos/NPM.svg'), link: 'https://www.npmjs.com' },
                { name: 'Vue', logo: require('@/static/stackLogos/Vue.png'), link: 'https://www.vuejs.org' },
                { name: 'Vuetify', logo: require('@/static/stackLogos/Vuetify.png'), link: 'https://www.vuetifyjs.com' },
                { name: 'Vercel', logo: require('@/static/stackLogos/Vercel.svg'), link: 'https://www.vercel.com' },
                { name: 'Firebase', logo: require('@/static/stackLogos/Firebase.svg'), link: 'https://www.firebase.google.com' },
            ],
        }
    }
}
</script>