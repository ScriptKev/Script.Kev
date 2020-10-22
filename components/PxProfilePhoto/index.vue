<template>
  <figure class="logo">
    <img class="logo__profile" src="~/assets/scriptkevProfile.jpg" alt="scriptkev" />
  </figure>
</template>

<style lang="scss" scoped>
.logo {
  width: 240px;
  height: 240px;
  border-radius: 35px;
  background: #edecec;
  /* box-shadow: 10px 10px 30px #c9c9c9, -10px -10px 30px 5px #fff; */
  box-shadow: -4px -4px 15px rgba(255, 255, 255, 1), 4px 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 400ms;

  &:hover {
    color: rgba(29, 29, 29, 0.932);
    transform: rotate(8deg)
  }

  &__profile {
    width: 90%;
    height: 90%;
    object-fit: cover;
    margin: auto;
    border-radius: 35px;
  }
}
</style>

<script>
export default {
  name: 'PxLogo'
}
</script>
