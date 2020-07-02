<template>
    <footer id="footer" class="footer">
        <section class="footer__contactMe">
            <a :href="social.link" v-for="social in socialContact" :key="social.name">
                {{ social.name }}
            </a>
        </section>

        <section class="footer__copyright">
            <span>Made in Venezuela / By ScriptKev 💜 👨‍💻</span>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.footer {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 20px;
    height: 10vh;

    &__contactMe {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        & a {
            margin: 0px 10px;
            font-size: 1.4rem;
        }
    }

    &__copyright {
        text-align: center;
    }
}

@media only screen and (min-width: 1024px) {
    .footer {

        &__contactMe {
            font-size: 1.5em;
        }
    }
}

</style>

<script>
export default {
    name: 'PxGlobalFooter',
    data ()  {
        return {
            socialContact: [
                { name: 'Email', link: 'mailto: script.kev@gmail.com' },
                { name: 'Instagram', link: 'https://www.instagram.com/scriptkev' },
                { name: 'GitHub', link: 'https://www.github.com/ScriptKev' },
                { name: 'Linkedin', link: 'https://www.linkedin.com/in/scriptkev' },
            ],
        }
    },
}
</script>
