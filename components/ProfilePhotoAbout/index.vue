<template>
  <figure class="logo">
    <img class="logo__profile" src="~/assets/scriptkevProfileAbout.jpg" alt="scriptkev" />
  </figure>
</template>

<style lang="scss" scoped>
.logo {
  grid-area: profilePhoto;
  justify-self: flex-end;
  width: 350px;
  height: 650px;
  border-radius: 35px;
  background: #edecec;
  box-shadow: -4px -4px 15px rgba(255, 255, 255, 1), 4px 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 400ms;

  &__profile {
    width: 90%;
    height: 90%;
    object-fit: contain;
    margin: auto;
  }

  & img {
    border-radius: 10px;
  }
}

@media only screen and (min-width: 320px) and (max-width: 912px) {
  .logo {
    grid-area: profilePhoto;
    justify-self: center;
    width: 200px;
    height: 250px;
    border-radius: 20px;
  }
}
</style>

<script>
export default {
  name: 'PxLogo'
}
</script>
