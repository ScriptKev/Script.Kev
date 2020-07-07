<template>
    <section class="clientResults">
        <div class="browser">
            <div class="browser__bar">
                <div class="browser__bar--buttons">
                    <svg style="width:18px;height:18px; color: red;" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>

                    <svg style="width:18px;height:18px; color: yellow;" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>

                    <svg style="width:18px;height:18px; color: #3aee3a;" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                </div>

                <div class="browser__bar--url">
                    {{ clientDomain.name.replace(/ /g, "") + clientDomain.ext }}
                </div>
            </div>

            <div class="browser__body">
                <div class="browser__body--title">
                    {{ clientDomain.businessName }}
                </div>

                <div class="browser__body--content">
                    <v-skeleton-loader style="margin: auto;" width="100%" type="article"></v-skeleton-loader>

                    <div class="skeleton-img" style="padding-left: 20px; width: 100%;display:flex; align-items: center; justify-content: space-around;">
                        <v-skeleton-loader width="100%" height="150px" type="image"></v-skeleton-loader>
                        <v-skeleton-loader width="100%" type="article"></v-skeleton-loader>
                    </div>
                </div>
            </div>

            <div class="browser__footer">
                <div class="browser__footer--copyright">
                    <h4>@CopyRight <span style="font-weight: 300; color: #3aee3a;"> {{ clientDomain.businessName }} </span></h4>
                </div>

                <div class="browser__footer--webType">
                    <span> {{ clientDomain.webType }} </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.clientResults {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #ecececc2;

    -webkit-box-shadow: 20px 10px 6px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: 20px 10px 6px 5px rgba(0,0,0,0.75);
    box-shadow: 20px 10px 6px 5px rgba(0,0,0,0.75);

    -webkit-transform: rotateX(-5deg) rotateY(5deg);
    -moz-transform: rotateX(-5deg) rotateY(5deg);
    -ms-transform: rotateX(-5deg) rotateY(5deg);
    -o-transform: rotateX(-5deg) rotateY(5deg);
    transform:  rotateX(-5deg) rotateY(5deg);
}

.browser {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 80px;
    grid-template-areas:    "bar"
                            "body"
                            "footer";

    &__bar {
        grid-area: bar;
        border-radius: 10px 10px 0 0;
        position: relative;
        height: 100%;
        background-color: #0f0f0fc5;
        overflow: hidden;
        text-overflow: ellipsis;
        &--buttons {
            position: absolute;
            left: 5%;
            top: 30%;
        }

        &--url {
            position: absolute;
            left: 25%;
            top: 25%;
            color:#fbfbfb;
        }
    }

    &__body {
        grid-area: body;
        display: grid;
        width: 100%;
        height: 100%;

        grid-template-columns: 1fr;
        grid-template-rows: 50px 1fr;
        grid-template-areas:    "title"
                                "content";
        align-items: center;
        justify-items: center;

        &--title {
            grid-area: title;
        }

        &--content {
            width: 100%;
            height: 100%;
            grid-area: content;
            background-color: rgba(105, 10, 194, 0.65);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            align-items: center;
            justify-items: center;
        }

    }

    &__footer {
        grid-area: footer;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(105, 10, 194, 0.65);
        border-radius: 0 0 0 10px;
        color: #e4e4e4c7;
        flex-wrap: wrap;
        text-align: center;

        &--copyright {
            width: 100%;
        }

        &--webType {
        }
    }
}
</style>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PxClientResults',
    computed: {
        ...mapState(['clientDomain'])
    }
}
</script>