<template>
  <div class="services">
    <section class="services__section">
      <h3>¿Que puedo ofrecerte?</h3>

      <div class="services__stack">
        <article class="services__stack--item">
          <div class="verticalTitle">
            <h2>Proximamente</h2>
          </div>
        </article>

        <article class="services__stack--item">
          <div class="verticalTitle">
            <h2>Proximamente</h2>
          </div>
        </article>
      </div>
    </section>

    <!-- <section class="formServices">
      <PxServicesForm />
      <PxServicesInfo />
    </section> -->
  </div>
</template>

<style lang="scss" scoped>
.services {
  width: 100%;
  height: 100%;

  &__section {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  &__description {
    width: 450px;
    height: 150px;
    padding: 10px 20px;
    border-radius: 20px;
    background: #edecec;
    box-shadow: -4px -4px 15px rgba(255, 255, 255, 1), 4px 4px 15px rgba(0, 0, 0, 0.1);
    transition: all ease-in-out 400ms;

    h3 {
      margin: 5px 0 0 0;
    }
  }

  &__stack {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin: auto;
    width: 100%;
    margin: auto;
    height: 100%;
    transition: all ease-in-out 400ms;
    column-gap: 30px;

    &--item {
      margin: 0 30px;
      width: 250px;
      height: 400px;
      padding: 10px 20px;
      border-radius: 20px;
      background: #edecec;
      box-shadow: -4px -4px 15px rgba(255, 255, 255, 1), 4px 4px 15px rgba(0, 0, 0, 0.1);
      transition: all ease-in-out 400ms;
    }
  }
}

.verticalTitle {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    transform: rotate(-50deg)
  }
}

.formServices {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
}

@media only screen and (min-width: 320px) and (max-width: 725px) {
  .services {

    &__stack {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 30px;

      &--item {
        margin: 0;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Services',
  head() {
    return {
      title: 'Scriptkev - Servicios',
      meta: [
        {
          hid: 'scriptkev servicios',
          name: 'scriptkev servicios',
          content: 'scriptkev servicio de aplicaciones y paginas web'
        }
      ]
    }
  }
};
</script>
