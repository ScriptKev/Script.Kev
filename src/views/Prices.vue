<template>
    <div class="Precios">
        <px-header />
        <px-main />
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main';

.Precios {
    height: auto;
    max-width: 1440px;
    margin: auto;
}
</style>

<script>
import PxHeader from '@/components/ClientPrice/PxHeader';
import PxMain from '@/components/ClientPrice/PxMain';

export default {
    name: 'Precios',
    components: { PxHeader, PxMain }
}
</script>