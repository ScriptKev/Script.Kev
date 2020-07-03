<template>
    <nav class="nav">
        <section class="nav__logo">
            <h2 class="neuCard">ScriptKev</h2>
        </section>

        <section class="nav__links">
            <router-link
            v-for="(n , i) in navLinks"
            :key="i"
            :to="n.route"
            class="nav__link">
                {{ n.text }}
            </router-link>
        </section>
    </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.nav {
    @extend .neu;
    height: 10vh;
    border-radius: 0 0 20px 20px;

    &__links {

        & .nav__link {
            margin: 0 10px;
        }
    }
}
</style>

<script>
export default {
    name: 'PxNav',
    data () {
        return {
            navLinks: [
                { text: 'Inicio', route: '/' },
                { text: 'Portafolio', route: '/portfolio' },
                { text: 'Presupuesto', route: '/proposal' },
            ],
        }
    }
}
</script>