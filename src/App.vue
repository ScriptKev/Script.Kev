<template>
    <div class="App">
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>

        <transition name="slide" appear>
            <div class="modal" v-if="showModal">
                <h1>ScriptKev les informa</h1>
                <p>
                    Mi sitio web aun sigue en construccion, por lo que aun no esta optimizada del todo. <br> <br>
                    Dispulpe las molestias. 😅
                </p>
                <button class="button" @click="showModal = false">
                    cerrar
                </button>
            </div>
        </transition>

        <px-nav />
        <router-view />
        <px-footer />
    </div>
</template>

<style lang="scss" src="./assets/scss/main.scss"></style>
<style lang="scss" scoped>

.App {
 position: relative;
 
 
//  width: 100vw;
//  min-height: 100vh;
//  overflow-x: hidden;
}

.button {
 appearance: none;
 outline: none;
 border: none;
 background: none;
 cursor: pointer;
 
 display: inline-block;
 background-image: linear-gradient(to right, #CC2E5D, #FF5858);
 border-radius: 8px;
 
 color: #FFF;
 font-size: 18px;
 font-weight: 700;
 
 box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
 transition: 0.4s ease-out;
 
 
 &:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
 }
}

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 100%;
 max-width: 400px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 
 h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
 }
 
 p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}
</style>

<script>
import PxNav from './components/PxGlobal/PxNav';
import PxFooter from './components/PxGlobal/PxFooter';

export default {
    name: 'App',
    components: { PxNav, PxFooter },
    data() {
        return {
            showModal: false
        }
    },
 
    created() {
        this.showModal = true   
    }
}
</script>