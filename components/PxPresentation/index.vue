<template>
  <section class="presentation">
    <p>
      Hola, soy Kevin Blanco un Frontend Developer Junior, apasionado de la tecnologia, y crear cosas increibles en la web.
        <br />
        <br />
      "No se trata de saberlo todo, sino de Nunca para de Aprender 🚀"
    </p>
  </section>
</template>

<style lang="scss" scoped>
.presentation {
  width: 500px;
  height: 190px;
  padding: 30px;
  display: flex;
  border-radius: 35px;
  background: #edecec;
  box-shadow: -4px -4px 15px rgba(255, 255, 255, 1), 4px 4px 15px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 400ms;
  color: #474747e0;

  p {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  &:hover {
    color: rgba(29, 29, 29, 0.932)
  }
}

@media screen and (min-width: 320px) and (max-width: 600px) {
  .presentation {
    width: 240px;
    height: 265px;
    padding: 30px;
    display: flex;
    border-radius: 35px;
    background: #edecec;
    box-shadow: -4px -4px 15px rgba(255, 255, 255, 1), 4px 4px 15px rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 400ms;
    color: #474747e0;
  }
}
</style>

<script>
export default {
  name: 'PxPresentation'
}
</script>
