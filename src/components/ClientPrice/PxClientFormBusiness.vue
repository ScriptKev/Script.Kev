<template>
  <v-form class="clientForm" ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="Fullname"
            :counter="20"
            :rules="nameRules"
            label="Nombre y Apellido"
            required
        ></v-text-field>

        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail Corporativo"
            required
        ></v-text-field>

        <v-text-field
            v-model="clientDomain.businessName"
            :counter="20"
            :rules="ClientBusinessNameRules"
            label="Nombre de la Empresa"
            required
        ></v-text-field>

        <v-text-field
            v-model="clientDomain.name"
            :counter="20"
            :rules="nameRules"
            label="Nombre para su dominio"
            hint="Recomendacion: Usar el nombre de su empresa"
            required
        ></v-text-field>

        <v-select
          v-model="clientDomain.ext"
          :items="domainExtensions"
          item-text="ext"
          item-value="ext"
          label="Elija una extension para su dominio"
          single-line
        ></v-select>
<!--
        {{
            clientDomain.name.replace(/ /g, "") + clientDomain.ext
            + ' '    + webType
        }} -->

        <v-radio-group v-model="clientDomain.webType" row>
            <v-radio label="Landing" value="Landing"></v-radio>
            <v-radio label="Sitio Web" value="Sitio Web"></v-radio>
            <v-radio disabled label="Tienda Virtual" value="Tienda Virtual"></v-radio>
        </v-radio-group>

        <v-textarea
            v-model="description"
            :rules="descriptionRules"
            class="mx-auto"
            clearable
            label="Describe tu proyecto"
            clear-icon="mdi-close"
            auto-grow
            prepend-icon="mdi-comment"
        ></v-textarea>

        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Debes estar de acuerdo']"
            label="Estas de acuerdo con tu elección?"
            required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click.prevent="sumbitProspectDataForm">
            Enviar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
            Limpiar
        </v-btn>
    </v-form>
</template>

<style lang="scss" scoped>
.clientForm {
    width: 90%;
    height: auto;
    margin: auto;
}

</style>

<script>
import { mapState } from 'vuex';
import {db} from '@/main.js';

export default {
    name: 'PxClientFormSingle',
    data: () => ({
        webType: '',
        valid: true,

        Fullname: '',
        nameRules: [
            v => !!v || 'Nombre y Apellido son requeridos',
            v => (v && v.length <= 20) || 'No puedes superar los 20 caracteres',
        ],

        ClientBusinessNameRules: [
            v => !!v || 'El nombre de la Empresa es requerida',
            v => (v && v.length <= 20) || 'No puedes superar los 20 caracteres',
        ],


        email: '',
        emailRules: [
            v => !!v || 'Correo Electronico requerido',
            v => /.+@.+\..+/.test(v) || 'Tiene que ser un correo valido',
        ],

        description: '',
        descriptionRules: [
            v => !!v || 'La descripccion es requerida',
            v => (v && v.length <= 250) || 'No puedes superar los 250 caracteres',
        ],

        domainExtensions: [
            { ext: '.com', description: 'Recomendada' },
            { ext: '.shop', description: 'Genial para tiendas' },
            { ext: '.store', description: 'ideal para SuperMarkets' },
            { ext: '.io', description: 'Te hace ver mas cool' },
        ],

        checkbox: false,

    }),

    computed: {
        ...mapState(['clientDomain', 'dataSending']),
    },

    methods: {
        async sumbitProspectDataForm () {
            try {
                this.$refs.form.validate()

                await db.collection('prospectsData').add({
                    Fullname: this.Fullname,
                    Email: this.email,
                    Domain: this.clientDomain.name,
                    DomainExt: this.clientDomain.ext,
                    DomainWebType: this.clientDomain.webType,
                    DescriptionWeb: this.description
                })

                this.$refs.form.reset()
                this.Fullname = '';
                this.email = '';
                this.clientDomain.name = '';
                this.clientDomain.ext = '';
                this.clientDomain.webType = '';
                this.description = '';
                this.dataSending.status = true;

                setTimeout(() =>  this.dataSending.status = false, 5000);

            } catch (error) {
                console.error(error)
            }
        },

        // validate () {
        //     this.$refs.form.validate()
        // },
        reset () {
            this.$refs.form.reset()
        },
    },
}
</script>