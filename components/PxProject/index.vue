<template>
<a :href="url" target="_blank" rel="noopener noreferrer">
  <article class="project">
    <div class="project__imgBox">
      <img :src="img" :alt="title" />
    </div>

    <div class="project__content">
      <!-- <h2>{{ project.title }}</h2> -->
      <!-- <img :src="img" width="100%"> -->
    </div>
  </article>
</a>
</template>

<style lang="scss" scoped>
.project {
  position: relative;
  transition: 0.3s ease-in-out;

  // &:hover {
  //   height: 420px
  // }

  // &:hover .project__content {
  //   visibility: visible;
  //   opacity: 1;
  //   transition-delay: 0.3s;
  // }

  &__imgBox {
    width: 90%;
    height: 90%;
    margin: auto;
    border-radius: 35px;
    position: relative;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 35px;
      object-fit: cover;
    }
  }

  // &__content {
  //   position: relative;
  //   // margin-top: -140px;
  //   // padding: 10px 15px;
  //   text-align: center;
  //   // color: #111;
  //   visibility: hidden;
  //   opacity: 0;
  //   transition: 0.3s ease-in-out
  // }
}
</style>

<script>
export default {
  name: 'PxProject',
  props: ['img', 'title', 'url', 'description', 'stack', 'repository'],
}
</script>

