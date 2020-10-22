<template>
  <section class="primaryDescriptionAbout">
    <div class="primaryDescriptionAbout__title">
      <h4>Acerca de mi</h4>
      <p>
        Mi nombre es Kevin Blanco tengo 22 años, soy de Caracas Venezuela, 
        soy estudiante Universitario en la <strong>UNEXCA</strong> 
        en la carrera de informatica. 
        <br>
        <br>
        En mis ratos libres disfruto de crear o interpretar canciones con mi piano y guitarra.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.primaryDescriptionAbout {
  align-self: flex-end;
  grid-area: primaryDescription;
  width: 100%;
  height: 255px;
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
      color: #474747e0;
      margin: 16px 30px;
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 912px) {
  .primaryDescriptionAbout {
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
  name: 'primaryDescriptionAbout'
}
</script>
