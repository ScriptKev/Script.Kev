<template>
    <nav class="nav">
        <section class="nav__logo">
            <router-link to="/">
                <h2 class="neuCard">ScriptKev</h2>
            </router-link>
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

    &__logo {
        & h2.neuCard  {
            color: rgba(19, 19, 19, 0.712);
            text-shadow: 1px 1px 5px rgba(15, 15, 15, 0.377);
        }
    }

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