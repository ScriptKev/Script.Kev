<template>
    <div class="Home">
        <px-header />
        <px-main />
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main';

</style>

<script>
import PxHeader from '@/components/Home/PxHeader';
import PxMain from '@/components/Home/PxMain';

export default {
    name: 'Home',
    components: { PxHeader, PxMain }
}
</script>