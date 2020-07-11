<template>
    <section class="mainServices">
        <div class="mainServices__title">
            <h3>Que puedo ofrecer?</h3>
        </div>

        <div class="mainServices__itemsContainer">
            <arcticle class="mainServices__item" v-for="(s, i) in services" :key="i">
                <section class="mainServices__item--title">
                    <h4> {{ s.title }} </h4>
                </section>

                <section class="mainServices__item--description">
                    <p> {{ s.description }} </p>
                </section>

                <figure class="mainServices__item--img">
                    <img :src="s.img" :alt="s.title" width="100%" height="100%" />
                </figure>
            </arcticle>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.mainServices {
    width: 100%;
    max-width: 1440px;
    padding: 0 30px;
    margin-top: 50px;

    &__title {
        font-size: 1.5rem;
        text-align: center;
    }

    &__itemsContainer {
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 320px);
        grid-template-rows: min-content;
        justify-content: center;
        align-items: center;
        row-gap: 10px;
        column-gap: 50px;

        & .mainServices__item {
            width: 100%;
            text-align: center;
            height: 400px;

            &--title {
                font-size: 1.3rem;
                padding: 0 10px;
            }

            &--description {
                padding: 0 10px;
                margin-top: 10px;
                font-size: 1rem;
            }

            &--img {
                width: 95%;
                border-radius: 10px;
                margin: auto;

                img {
                    border-radius: 10px;
                }
            }
        }
    }
}

</style>

<script>
export default {
    name: 'PxServices',
    data () {
        return {
            services: [
                {
                    title: 'Diseño Personalizado',
                    description: 'Diseñar antes de implementar provée un feedback mas acertivo, resultados mas efectivos y satisfactorios',
                    img: require('../../static/servicesImg/wireframe.png')
                },

                {
                    title: 'Desarrollo a Medida',
                    description: 'Un desarrollo unico con codigo limpio, eficaz, mantenible, usando tecnologias modernas.',
                    img: require('../../static/servicesImg/code.jpg')
                },

                {
                    title: 'Configuracion Completa',
                    description: 'No solo desarrollo tu pagina web soñada incluyo el Dominio y Email Corporativo de tu sitio web. ',
                    img: require('../../static/servicesImg/com.png')
                },
            ]
        }
    }
}
</script>