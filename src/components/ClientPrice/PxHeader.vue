<template>
    <section class="cardsPrices">
        <article class="cardPrices__standar">
            <section class="cardPrices__standar--title">
                <h3>Estandar</h3>
            </section>

            <ul class="cardPrices__standar--features">
                <li>
                    <v-icon color="blue">mdi-checkbox-marked-circle</v-icon>
                    <span>Diseño Personalizado</span>
                </li>

                <li>
                    <v-icon color="blue">mdi-checkbox-marked-circle</v-icon>
                    <span>Animaciones</span>
                </li>

                <li>
                    <v-icon color="blue">mdi-checkbox-marked-circle</v-icon>
                    <span>3 Paginas internas</span>

                </li>

                <li>
                    <v-icon color="blue">mdi-checkbox-marked-circle</v-icon>
                    <span>Boton de contacto (Whatsapp)</span>
                </li>

                <li>
                    <v-icon color="blue">mdi-checkbox-marked-circle</v-icon>
                    <span>SEO (Basico)</span>
                </li>

                <li>
                    <v-icon color="blue">mdi-checkbox-marked-circle</v-icon>
                    <span>Dominio personalizado (.com, .shop, .io...)</span>
                </li>

                <li>
                    <v-icon color="blue">mdi-checkbox-marked-circle</v-icon>
                    <span>Certificado SSL</span>
                </li>

                <li>
                    <hr>
                    <span class="featuresPrice">$15</span>
                </li>
            </ul>
        </article>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.cardsPrices {
    height: auto;
    max-width: 1440px;
    margin: 50px auto 0 auto;

    & .cardPrices__standar {
        padding: 25px 0 0 0;
        text-align: center;
        border-radius: 10px;
        height: auto;
        width: 40%;
        margin: auto;
        background-color: rgba(134, 134, 134, 0.1);
        box-shadow: 10px 10px 6px 5px rgba(0, 0, 0, 0.28);

        &--features {
            padding: 0;
            font-weight: 500;

            li{
                // display: flex;
                // align-items: center;
                // justify-content: center;
                // flex-wrap: wrap;
                padding: 15px 10px;

                &:nth-last-child(1n) hr {
                        margin: 0 auto 10px auto;
                        width: 70%
                }
            }

            & .featuresPrice {
                color: rgba(137, 43, 226, 0.774);
                font-size: 1.5rem;
            }
        }
    }
}
</style>