<template>
    <section class="mainServices">
        <section class="mainServices__title">
            <h2>Que puedo ofrecerte?</h2>
        </section>

            <section class="mainServices__one">
                <div class="shadow">
                    <div class="mainServices__one--description">
                        <h3>Diseño personalizado</h3>
                        <p>
                            Diseñar antes de implementar provée
                            <br /> 
                            un feedback mas acertivo, resultados
                            <br /> 
                            mas efectivos y satisfactorios.
                        </p>
                    </div>
                </div>

                <div class="shadow">
                    <figure class="mainServices__one--icon">
                    </figure>
                </div>
            </section>

            <section class="mainServices__two">
                <div class="shadow">
                    <figure class="mainServices__two--icon"></figure>
                </div>

                <div class="shadow">
                    <div class="mainServices__two--description">
                        <h3>Desarrollo a medida</h3>
                        <p>
                            Un desarrollo unico con codigo limpio, eficaz,
                            <br />
                            mantenible, usando tecnologias modernas.
                        </p>
                    </div>
                </div>
            </section>

            <section class="mainServices__three">
                <div class="shadow">
                    <div class="mainServices__three--description">
                        <h3>Configuracion completa</h3>
                        <p>
                            No solo desarrollo tu pagina web soñada
                            <br /> 
                            incluyo el Dominio y Email Corporativo
                            <br /> de tu sitio web.
                        </p>
                    </div>
                </div>

                <div class="shadow">
                    <figure class="mainServices__three--icon">
                        <img src="" alt="Main Service" class="mainService__icon">
                    </figure>
                </div>
            </section>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.mainServices {
    margin: 100px auto 0 auto;
    height: auto;
    max-width: 1440px;

    &__title {
        text-align: center;
        font-size: 1.5rem;
    }

    &__one {
        @extend .mainServices__one;
        & .shadow{
            filter: drop-shadow(1px 1px 10px rgba(51, 51, 51, 0.507));
            height: 100%;
            width: 100%;
            border-radius: 10px 0 0 10px;
        }

        &--description {
            clip-path: polygon(0% 0%, 100% 0, 60% 100%, 0% 100%);
            background-color: transparent;
            height: 100%;
            width: 100%;
            grid-area: description;
            border-radius: inherit;
            margin-left: 100px;
            

            & h3 {
                padding-top: 40px;
                padding-right: 180px;
                text-align: center;
                font-size: 1.5rem;
            }

            & p {
                padding: 20px 0 0 50px;
                font-size: 1.3rem;
            }

        }

        &--icon {
            grid-area: icon;
            clip-path: polygon(40% 0%, 100% 0, 100% 100%, 0% 100%);
            background-color: #bcd2eb;;
            height: 100%;
            width: 100%;
            border-radius: 0 10px 10px 0;
            margin-left: -100px;

            background-image: url('../../static/servicesImg/wireframe.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
        }
    }

    &__two {
        @extend .mainServices__two;

        & .shadow{
            filter: drop-shadow(1px 1px 10px rgba(51, 51, 51, 0.507));
            height: 100%;
            width: 100%;
            border-radius: 10px 0 0 10px;
        }

        &--description {
            grid-area: description;
            clip-path: polygon(40% 0%, 100% 0, 100% 100%, 0% 100%);
            background-color: transparent;
            height: 100%;
            width: 100%;
            border-radius: 0 10px 10px 0;
            margin-left: -100px;

            & h3 {
                padding-top: 90px;
                padding-left: 150px;
                text-align: center;
                font-size: 1.5rem;
            }

            & p {
                padding: 20px 0 0 200px;
                font-size: 1.3rem;
            }

        }

        &--icon {
            grid-area: icon;
            clip-path: polygon(0% 0%, 100% 0, 60% 100%, 0% 100%);
            background-color: #26272b;
            height: 100%;
            width: 100%;
            border-radius: inherit;
            margin-left: 100px;

            background-image: url('../../static/servicesImg/serviceImgOne.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
        }
    }

    &__three {
        @extend .mainServices__three;

        & .shadow{
            filter: drop-shadow(1px 1px 10px rgba(51, 51, 51, 0.507));
            height: 100%;
            width: 100%;
            border-radius: 10px 0 0 10px;
        }

        &--description {
            clip-path: polygon(0% 0%, 100% 0, 60% 100%, 0% 100%);
            background-color: transparent;
            height: 100%;
            width: 100%;
            grid-area: description;
            border-radius: inherit;
            margin-left: 100px;
            

            & h3 {
                padding-top: 70px;
                padding-right: 180px;
                text-align: center;
                font-size: 1.5rem;
            }

            & p {
                padding: 20px 0 0 50px;
                font-size: 1.3rem;
            }

        }

        &--icon {
            grid-area: icon;
            clip-path: polygon(40% 0%, 100% 0, 100% 100%, 0% 100%);
            background-color: rgba(144, 144, 144, 0.192);
            height: 100%;
            width: 100%;
            border-radius: 0 10px 10px 0;
            margin-left: -100px;

            background-image: url('../../static/servicesImg/com.png');
            background-repeat: no-repeat;
            background-position-x: 82%;
            background-position-y: 70%;
            background-size: 30%;
            background-attachment: fixed;
            transition: 1s ease-out;
        }
    }

}

// scroll Animation
</style>

<script>
export default {
    name: 'PxServices'
}
</script>