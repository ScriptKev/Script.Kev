<template>
    <main class="mainPrice">
        <section class="mainPrice__title">
            <h2>Envia tu proyecto</h2>
            <span>Entrare en contacto contigo</span>
        </section>

        <div class="mainPrice__clientType">
            <h3>Eres Individuo o Empresa</h3>
            <v-switch style="display:inline-block; margin-top: 10px;" :typeClientComp="typeClientComp"  v-model="typeClient" inset></v-switch>
        </div>

        <section class="mainPrice__clientData">
            <px-client-form-business v-if="typeClient === true"/>
            <px-client-form-single v-else />
        </section>

        <section class="mainPrice__clientResults">
            <px-client-results />
        </section>
    </main>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';


.mainPrice {
    height: auto;
    max-width: 1440px;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px 100px 1fr;
    grid-template-areas:    "title title"
                            "clientType clientType"
                            "clientForm clientResults";
    width: 70vw;

    &__clientType {
        grid-area: clientType;
        text-align: center;
        margin-top: 10px;
    }

    &__title {
        grid-area: title;
        text-align: center;
    }

    &__clientData {
        grid-area: clientForm;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: auto;
        font-weight: 500;
    }

    &__clientResults{
        grid-area: clientResults;
    }
}

</style>

<script>
import PxClientFormBusiness from './PxClientFormBusiness';
import PxClientFormSingle from './PxClientFormSingle';
import PxClientResults from './PxClientResults';

export default {
    name: 'PxPreciosMain',
    components: { PxClientFormBusiness, PxClientFormSingle, PxClientResults },
    data () {
        return {
            totalPrice: Number,
            typeClient: false,
            clientComp: '',
        }
    },

    computed: {
        typeClientComp () {
            return this.typeClient ? this.clientComp = 'Empresa' : this.clientComp = 'Individuo'
        },
    },
}
</script>