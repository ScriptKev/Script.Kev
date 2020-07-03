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