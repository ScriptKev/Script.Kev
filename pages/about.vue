<template>
  <div class="about">
    <section class="about__container">
      <ProfilePhotoAbout />
      <PrimaryDescriptionAbout />
      <SecondaryDescriptionAbout />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about {

  &__container {
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:  "profilePhoto primaryDescription"
                          "profilePhoto secondaryDescription";
    align-items: center;
    justify-items: flex-start;
    row-gap: 50px;
  }
}

@media only screen and (min-width: 320px) and (max-width: 912px) {
  .about {

    &__container {
      margin-top: 10px;
      margin-bottom: 20px;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr min-content min-content;
      grid-template-areas:  "profilePhoto"
                            "primaryDescription"
                            "secondaryDescription";
      align-items: center;
      justify-items: center;
      row-gap: 20px;
    }
  }
}
</style>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'Scriptkev - Conoceme',
      meta: [
        {
          hid: 'acerca de scriptkev',
          name: 'acerca de scriptkev',
          content: 'acerca de scriptkev'
        }
      ]
    }
  },

  created () {
    if (process.client) {
      window.scrollTo(0, 0);
    }
  },
}
</script>
