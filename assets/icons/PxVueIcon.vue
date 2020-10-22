<template>
  <div class="stack__item">
    <a href="https://es.vuejs.org" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        :width="size"
        :height="size"
      >
        <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"/>
        <polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"/>
      </svg>
    </a>
    <h5 class="stack__item--title">Vue</h5>
  </div>
</template>

<script>
export default {
  name: 'PxVueIcon',
  props: {
    size: {
      type: String,
      required: true,
      default: '60px'
    }
  }
}
</script>
