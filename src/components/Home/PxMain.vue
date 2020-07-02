<template>
    <main class="main">
        <px-widgets />
        <px-services />
    </main>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.main{
    height: auto;
    width: 100%;
    margin-top: 50px;
}
</style>

<script>
import PxWidgets from './PxWidgets'
import PxServices from './PxServices'

export default {
    name: 'PxMain',
    components: { PxWidgets, PxServices }
}
</script>