<template>
  <div class="stack__item">
    <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 116 100"
        fill="#000"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M57.5 0L115 100H0L57.5 0z"/>
      </svg>
    </a>
    <h5 class="stack__item--title">Vercel</h5>
  </div>
</template>

<script>
export default {
  name: 'PxVercelIcon',
  props: {
    size: {
      type: String,
      required: true,
      default: '60px'
    }
  }
}
</script>
