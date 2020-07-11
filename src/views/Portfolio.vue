<template>
    <div class="Portfolio">
        <px-header />
        <px-main />
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main';

.Portfolio {
    height: auto;
    max-width: 1440px;
    margin: auto;
    width: 100%;
}
</style>

<script>
import PxHeader from '@/components/Portfolio/PxHeader';
import PxMain from '@/components/Portfolio/PxMain';

export default {
    name: 'Portfolio',
    components: { PxHeader, PxMain }
}
</script>