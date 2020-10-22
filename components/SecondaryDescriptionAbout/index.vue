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

          <p>Nodejs, Express, Ionic y Flutter.</p>
    </div>
  </section>
</template>

<style lang="scss">
.secondaryDescriptionAbout {
  grid-area: secondaryDescription;
  align-self: flex-start;
  width: 100%;
  height: 145px;
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
