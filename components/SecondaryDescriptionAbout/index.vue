<template>
  <section class="secondaryDescriptionAbout">
    <div class="secondaryDescriptionAbout__title">
      <h4>Estoy interesado en aprender</h4>
        <!-- <img
          v-for="(icon, index) in iconsTech"
          :key="index"
          :src="icon.img"
          :alt="icon.title"
          :width="icon.sizeWidth"
          :height="icon.sizeHeight"> -->

          <p>Desarrollo backend con Node/Express/Typescript 🔥</p>
       <h4>Mas info</h4>
          <p>
            script.kev@gmail.com <br/>
            <a href='https://github.com/ScriptKev/' target='_blank'>https://github.com/ScriptKev/</a>
          </p>
    </div>
  </section>
</template>

<style lang="scss">
.secondaryDescriptionAbout {
  grid-area: secondaryDescription;
  align-self: flex-start;
  width: 100%;
  height: min-content;
  display: flex;
  border-radius: 35px;
  background: #edecec;
  box-shadow: -4px -4px 15px rgba(255, 255, 255, 1), 4px 4px 15px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 400ms;
  text-align: center;

  &__title {
    width: 100%;
    height: 100%;

    & h4 {
      margin-left: 30px;
      margin-bottom: 8px;
      font-size: 20px;
      text-align: left;
    }

    & p {
      margin: 16px;
      font-size: 17px;
      font-weight: 600;
      color: #474747e0;
    }

    & p > a {
      font-size: 15px;
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 912px) {
  .secondaryDescriptionAbout {
    align-self: center;
    width: 80%;
    height: min-content;
    padding-bottom: 10px;
    display: flex;
    border-radius: 35px;
  }
}
</style>

<script>
export default {
  name: 'secondaryDescriptionAbout',
  // data: () => ({
  //   iconsTech: [
  //     { title: 'Expressjs', img: require('~/assets/icons/Expressjs.png'), sizeWidth: '100px', sizeHeight: '30px' },
  //     { title: 'Flutter', img: require('~/assets/icons/flutter.png'), sizeWidth: '50px', sizeHeight: '65px' },
  //     { title: 'Flutter', img: require('~/assets/icons/ionic.png'), sizeWidth: '50px', sizeHeight: '20px' },
  //     { title: 'Flutter', img: require('~/assets/icons/nodejs.png'), sizeWidth: '50px', sizeHeight: '30px' },
  //   ]
  // })
}
</script>
