<template>
    <section class="widgets">
        <article class="widget__primary">
            <div class="widget__primary--title">
                <h3>Paginas y Sitios Web</h3>
                <span>
                    Tiendas Online Excluidas
                    (Por Ahora)
                </span>
            </div>

            <div class="widget__primary--description">
                <p>
                    Creacion de paginas y sitios webs impecables con interfaces modernas.
                </p>
            </div>
        </article>

        <!-- <article class="widget__secondary">
            <div class="widget__secondary--title">
                <h3>Optimizacion</h3>
            </div>

            <div class="widget__secondary--description">
                <p>
                    Variedad de presupuestos accesibles y tentadores.
                </p>
            </div>
        </article> -->

        <article class="widget__tertiary">
            <div class="widget__tertiary--title">
                <h3>Entrega</h3>
            </div>

            <div class="widget__tertiary--description">
                <p>
                    1 semana para un sitio web optimizado, <br> moderno y elegante.
                </p>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.widgets{
    display: grid;
    padding: 0 30px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px;
    grid-template-areas:    "primary tertiary";
    column-gap: 50px;
    align-items: center;
    max-width: 1440px;
    justify-items: center;
    margin-top: 120px;

    p {
        font-weight: 500;
    }

        & .widget__primary {
            grid-area: primary;
            @extend .widget;

            &--title {

                & span {
                    font-size: 0.7rem;
                    color: rgba(219, 16, 16, 0.753);
                    // line-height: -100px;
                }
            }

            &--description {
                color: map-get($Text, 'widgetDescription')
            }
        }

        & .widget__secondary {
            grid-area: secondary;
            @extend .widget

        }

        & .widget__tertiary {
            grid-area: tertiary;
            @extend .widget

        }
}

// Media Queries

@media (min-width: 320px) and (max-width: 767px) {
    .widgets {
        // padding: 0 30px;
        grid-template-columns: 1fr;
        grid-template-rows: 200px 200px;
        grid-template-areas:    "primary"
                                "tertiary";
        row-gap: 50px;
    }
}

</style>

<script>
export default {
    name: 'PxWidgets'
}
</script>