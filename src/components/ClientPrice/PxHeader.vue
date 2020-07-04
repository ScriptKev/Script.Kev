<template>
    <main class="headerPortfolio">
        <div class="headerPortfolio__container">
            <div class="headerPortfolio__grid">
                <section class="headerPortfolio__presentation">
                    <h2>
                        Te muestro un poco de mi trabajo
                        <br>
                        😀 🦾
                        <br>
                        <span class="typed__text"> {{ typeValue }} </span>
                        <span class="typed__cursor" :class="{ 'typing': typeStatus }" >|</span>
                    </h2>
                </section>

                <section class="headerPortfolio__img--container"></section>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.headerPortfolio {
    // margin-top: 50px;
    width: 100%;
    height: 90vh;

    &__container {
        max-width: 1440px;
    }

    &__grid {
        display: grid;
        height: 90vh;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:    "presentacion img";
        align-content: center;
        justify-items: center;

        & .headerPortfolio__presentation {
            grid-area: presentacion;

            & h2 {
                font-size: 2.5rem;
            }
        }

        & .headerPortfolio__img--container {
            grid-area: img;
        }
    }

    &__presentation {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    &__img--container {
        height: 100%;
        width: 100%;
        background-image: url('../../static/pages.png');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        filter: drop-shadow(1px 1px 10px rgba(51, 51, 51, 0.747))
    }

}
.typed__text{
    color: rgba(251, 0, 0, 0.801);
    text-shadow: 1px 1px 6px rgba(251, 0, 0, 0.486);
}

.typed__cursor{
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    color: rgba(251, 0, 0, 0.801);
    text-shadow: 1px 1px 6px rgba(251, 0, 0, 0.486);
    animation: cursorBlink 1s infinite;
}

span.typing {
    animation: none;
}

@keyframes cursorBlink {
    49% { background-color: transparent; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
}

</style>

<script>
import { setTimeout } from 'timers';

export default {
    name: 'PxPreciosHeader',
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['Paginas Web', 'Landings Page', 'Portafolios', 'Sitios Interactivos'],
                typingSpeed: 150,
                erasingSpeed: 100,
                newTextDelay: 2000,
                typeArrayIndex: 0,
                charIndex: 0
            }
        },

        methods: {
        typeText() {
            if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if(!this.typeStatus)
                    this.typeStatus = true;

                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            }
            else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },

        eraseText() {
                if(this.charIndex > 0) {
                    if(!this.typeStatus)
                        this.typeStatus = true;

                this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            }
            else {
                this.typeStatus = false;
                this.typeArrayIndex += 1;

                if(this.typeArrayIndex >= this.typeArray.length)
                    this.typeArrayIndex = 0;

                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        }
    },

    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    }
}
</script>