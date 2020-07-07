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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    max-width: 1440px;
    margin: auto;

    &__logo {
        & h2.neuCard  {
            color: rgba(19, 19, 19, 0.712);
            text-shadow: 1px 1px 5px rgba(15, 15, 15, 0.377);
            margin: 0 20px;
        }
    }

    &__links {

        & .nav__link {
            margin: 0 10px;
            color: rgba(17,17,17,.63);
            font-weight: 500;
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
                { text: 'Precios', route: '/pricing' },
            ],
        }
    }
}
</script>